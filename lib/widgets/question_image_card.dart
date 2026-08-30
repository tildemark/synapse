import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

/// Reusable responsive image and diagram viewer for Synapse questions.
/// Supports:
/// 1. Data URIs with SVG (data:image/svg+xml;base64,...)
/// 2. Data URIs with PNG/JPEG (data:image/png;base64,...)
/// 3. Direct SVG string / XML markup
/// 4. Local Flutter assets (assets/packs/...)
/// 5. Direct Network URLs (https://...)
class QuestionImageCard extends StatelessWidget {
  const QuestionImageCard({
    super.key,
    required this.imageUrl,
    this.maxHeight = 160,
  });

  final String imageUrl;
  final double maxHeight;

  @override
  Widget build(BuildContext context) {
    final cs = Theme.of(context).colorScheme;

    Widget imageWidget;

    if (imageUrl.startsWith('data:image/svg+xml;base64,')) {
      try {
        final base64Str = imageUrl.substring('data:image/svg+xml;base64,'.length);
        final svgBytes = base64Decode(base64Str);
        imageWidget = SvgPicture.memory(
          svgBytes,
          fit: BoxFit.contain,
          placeholderBuilder: (_) => const _ImageLoadingPlaceholder(),
        );
      } catch (_) {
        imageWidget = const _ImageErrorPlaceholder();
      }
    } else if (imageUrl.startsWith('data:image/svg+xml;utf8,') || imageUrl.startsWith('data:image/svg+xml,')) {
      try {
        final rawSvg = Uri.decodeComponent(
          imageUrl.replaceFirst(RegExp(r'^data:image\/svg\+xml(;utf8)?,'), ''),
        );
        imageWidget = SvgPicture.string(
          rawSvg,
          fit: BoxFit.contain,
          placeholderBuilder: (_) => const _ImageLoadingPlaceholder(),
        );
      } catch (_) {
        imageWidget = const _ImageErrorPlaceholder();
      }
    } else if (imageUrl.trim().startsWith('<svg')) {
      imageWidget = SvgPicture.string(
        imageUrl,
        fit: BoxFit.contain,
        placeholderBuilder: (_) => const _ImageLoadingPlaceholder(),
      );
    } else if (imageUrl.startsWith('data:image/')) {
      try {
        final commaIdx = imageUrl.indexOf(',');
        final base64Str = commaIdx != -1 ? imageUrl.substring(commaIdx + 1) : imageUrl;
        final bytes = base64Decode(base64Str);
        imageWidget = Image.memory(
          bytes,
          fit: BoxFit.contain,
        );
      } catch (_) {
        imageWidget = const _ImageErrorPlaceholder();
      }
    } else if (imageUrl.endsWith('.svg')) {
      if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
        imageWidget = SvgPicture.network(
          imageUrl,
          fit: BoxFit.contain,
          placeholderBuilder: (_) => const _ImageLoadingPlaceholder(),
        );
      } else {
        imageWidget = SvgPicture.asset(
          imageUrl,
          fit: BoxFit.contain,
          placeholderBuilder: (_) => const _ImageLoadingPlaceholder(),
        );
      }
    } else if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
      imageWidget = Image.network(
        imageUrl,
        fit: BoxFit.contain,
        loadingBuilder: (context, child, progress) {
          if (progress == null) return child;
          return const _ImageLoadingPlaceholder();
        },
        errorBuilder: (_, __, ___) => const _ImageErrorPlaceholder(),
      );
    } else {
      // Local Flutter Asset
      imageWidget = Image.asset(
        imageUrl,
        fit: BoxFit.contain,
        errorBuilder: (_, __, ___) => const _ImageErrorPlaceholder(),
      );
    }

    return Container(
      width: double.infinity,
      constraints: BoxConstraints(maxHeight: maxHeight),
      margin: const EdgeInsets.only(bottom: 16),
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: Colors.black.withAlpha(80),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: cs.outlineVariant.withAlpha(60), width: 1.2),
      ),
      child: Center(
        child: ClipRRect(
          borderRadius: BorderRadius.circular(8),
          child: imageWidget,
        ),
      ),
    );
  }
}

class _ImageLoadingPlaceholder extends StatelessWidget {
  const _ImageLoadingPlaceholder();

  @override
  Widget build(BuildContext context) {
    return const Center(
      child: SizedBox(
        width: 24,
        height: 24,
        child: CircularProgressIndicator(strokeWidth: 2),
      ),
    );
  }
}

class _ImageErrorPlaceholder extends StatelessWidget {
  const _ImageErrorPlaceholder();

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(16),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(Icons.broken_image_rounded, size: 24, color: Colors.orange.shade300),
          const SizedBox(width: 8),
          Text(
            'Traffic Diagram / Sign',
            style: TextStyle(fontSize: 12, color: Colors.orange.shade300),
          ),
        ],
      ),
    );
  }
}
