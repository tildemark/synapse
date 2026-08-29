/// Centralized time source — makes time manipulation easy to mock in tests.
class AppTime {
  static DateTime? _mockTime;

  static DateTime now() => _mockTime ?? DateTime.now();

  /// Sets a fixed or mock time for tests.
  static void mockNow(DateTime time) {
    _mockTime = time;
  }

  /// Clears the mock time and restores system clock.
  static void reset() {
    _mockTime = null;
  }
}