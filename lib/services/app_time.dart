/// Centralized time source — makes time manipulation easy to mock in tests.
class AppTime {
  static DateTime now() => DateTime.now();
}