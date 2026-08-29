import 'package:flutter/material.dart';


// ─────────────────────────────────────────────────────────────────────────────
// Synapse Brand Colors
// ─────────────────────────────────────────────────────────────────────────────
class SynapseColors {
  static const primary    = Color(0xFF6C63FF); // Violet – brand identity
  static const secondary  = Color(0xFF10B981); // Emerald – success / mastered
  static const apprentice = Color(0xFFEF5350); // Coral – learning / active
  static const guru       = Color(0xFF7C4DFF); // Purple – guru stage
  static const master     = Color(0xFF1565C0); // Blue – master stage
  static const burned     = Color(0xFFF59E0B); // Gold – burned / permanent
  static const surface    = Color(0xFF0F0F1A); // Near-black app background
  static const card       = Color(0xFF1A1A2E); // Card background
  static const cardBorder = Color(0xFF2A2A40); // Card border
}

// ─────────────────────────────────────────────────────────────────────────────
// Dark Theme
// ─────────────────────────────────────────────────────────────────────────────
ThemeData buildSynapseTheme() {
  const cs = ColorScheme(
    brightness: Brightness.dark,
    primary:           SynapseColors.primary,
    onPrimary:         Colors.white,
    secondary:         SynapseColors.secondary,
    onSecondary:       Colors.black,
    error:             Color(0xFFEF5350),
    onError:           Colors.white,
    surface:           SynapseColors.surface,
    onSurface:         Color(0xFFE8E8F0),
    surfaceContainerHighest: Color(0xFF252540),
    surfaceContainerHigh:    Color(0xFF1E1E36),
    surfaceContainer:        Color(0xFF181828),
    outline:           Color(0xFF4A4A70),
    outlineVariant:    Color(0xFF2A2A48),
    onSurfaceVariant:  Color(0xFF9E9EC0),
    primaryContainer:  Color(0xFF3D35B0),
    onPrimaryContainer: Colors.white,
    secondaryContainer: Color(0xFF0D6E50),
    onSecondaryContainer: Colors.white,
  );

  return ThemeData(
    useMaterial3: true,
    colorScheme: cs,
    scaffoldBackgroundColor: SynapseColors.surface,
    cardColor: SynapseColors.card,
    textTheme: const TextTheme(
      displayLarge:  TextStyle(color: Color(0xFFE8E8F0), fontWeight: FontWeight.bold),
      headlineLarge: TextStyle(color: Color(0xFFE8E8F0), fontWeight: FontWeight.bold),
      headlineMedium: TextStyle(color: Color(0xFFE8E8F0), fontWeight: FontWeight.w600),
      titleLarge:    TextStyle(color: Color(0xFFE8E8F0), fontWeight: FontWeight.w700),
      titleMedium:   TextStyle(color: Color(0xFFE8E8F0), fontWeight: FontWeight.w600),
      titleSmall:    TextStyle(color: Color(0xFFB8B8D8), fontWeight: FontWeight.w600),
      bodyLarge:     TextStyle(color: Color(0xFFD0D0E8)),
      bodyMedium:    TextStyle(color: Color(0xFFB8B8D8)),
      bodySmall:     TextStyle(color: Color(0xFF9090B0)),
      labelLarge:    TextStyle(color: Color(0xFFE8E8F0), fontWeight: FontWeight.w600),
    ),
    appBarTheme: const AppBarTheme(
      backgroundColor: SynapseColors.surface,
      foregroundColor: Color(0xFFE8E8F0),
      elevation: 0,
      scrolledUnderElevation: 0,
    ),
    elevatedButtonTheme: ElevatedButtonThemeData(
      style: ElevatedButton.styleFrom(
        backgroundColor: SynapseColors.primary,
        foregroundColor: Colors.white,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
        padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 14),
      ),
    ),
    filledButtonTheme: FilledButtonThemeData(
      style: FilledButton.styleFrom(
        backgroundColor: SynapseColors.primary,
        foregroundColor: Colors.white,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
        padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 14),
      ),
    ),
    outlinedButtonTheme: OutlinedButtonThemeData(
      style: OutlinedButton.styleFrom(
        foregroundColor: SynapseColors.primary,
        side: const BorderSide(color: SynapseColors.primary, width: 1.5),
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
        padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 12),
      ),
    ),
    dividerTheme: const DividerThemeData(
      color: Color(0xFF2A2A48),
      thickness: 1,
    ),
    inputDecorationTheme: InputDecorationTheme(
      filled: true,
      fillColor: SynapseColors.card,
      border: OutlineInputBorder(
        borderRadius: BorderRadius.circular(12),
        borderSide: const BorderSide(color: Color(0xFF2A2A48)),
      ),
      enabledBorder: OutlineInputBorder(
        borderRadius: BorderRadius.circular(12),
        borderSide: const BorderSide(color: Color(0xFF2A2A48)),
      ),
      focusedBorder: OutlineInputBorder(
        borderRadius: BorderRadius.circular(12),
        borderSide: const BorderSide(color: SynapseColors.primary, width: 2),
      ),
    ),
  );
}