import 'dart:convert';
import 'package:flutter/material.dart';

/// Reusable responsive image and diagram viewer for Synapse questions.
/// Supports:
/// 1. Local Flutter assets (e.g. 'assets/packs/lto/stop_sign.png')
/// 2. Base64 Data URIs (e.g. 'data:image/png;base64,...')
/// 3. Direct Network URLs (e.g. 'https://...')
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

    if (imageUrl.startsWith('data:image/')) {
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
    } else if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
      imageWidget = Image.network(
        imageUrl,
        fit: BoxFit.contain,
        loadingBuilder: (context, child, progress) {
          if (progress == null) return child;
          return const Center(
            child: SizedBox(
              width: 24,
              height: 24,
              child: CircularProgressIndicator(strokeWidth: 2),
            ),
          );
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
