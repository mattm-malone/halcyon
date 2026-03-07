#include "widgets.h"
#include "utils.h"
#include <pebble.h>

void widget_get_text(WidgetType type, char *buf, int buf_len) {
  switch (type) {

  case WIDGET_DATE: {
    struct tm *t = getCurrentTime();
    strftime(buf, buf_len, "%a, %b %e", t);
    to_uppercase(buf);
    break;
  }

  case WIDGET_STEPS: {
#if defined(PBL_HEALTH)
    HealthServiceAccessibilityMask mask = health_service_metric_accessible(
        HealthMetricStepCount, time_start_of_today(), time(NULL));
    if (mask & HealthServiceAccessibilityMaskAvailable) {
      HealthValue steps = health_service_sum_today(HealthMetricStepCount);
      snprintf(buf, buf_len, "%d STEPS", (int)steps);
    } else {
      snprintf(buf, buf_len, "-- STEPS");
    }
#else
    buf[0] = '\0';
#endif
    break;
  }

  case WIDGET_DISTANCE: {
#if defined(PBL_HEALTH)
    HealthServiceAccessibilityMask mask = health_service_metric_accessible(
        HealthMetricWalkedDistanceMeters, time_start_of_today(), time(NULL));
    if (mask & HealthServiceAccessibilityMaskAvailable) {
      HealthValue meters =
          health_service_sum_today(HealthMetricWalkedDistanceMeters);
      // Format as km with one decimal place, e.g. "1.2 KM"
      int km_whole = (int)(meters / 1000);
      int km_tenths = (int)((meters % 1000) / 100);
      snprintf(buf, buf_len, "%d.%d KM", km_whole, km_tenths);
    } else {
      snprintf(buf, buf_len, "-.-- KM");
    }
#else
    buf[0] = '\0';
#endif
    break;
  }

  case WIDGET_BATTERY: {
    BatteryChargeState state = battery_state_service_peek();
    snprintf(buf, buf_len, "%d%%", state.charge_percent);
    break;
  }

  case WIDGET_NONE:
  default:
    buf[0] = '\0';
    break;
  }
}
