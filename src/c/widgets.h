#pragma once

#include <pebble.h>

// ============================================================
// Widget Type Enum
// ============================================================
// Each enum value corresponds to a setting value sent from the
// config page. The integer values MUST NOT be changed — they
// are stored persistently on the watch and transmitted from
// the phone. To add a new widget, append before WIDGET_TYPE_COUNT.
typedef enum {
  WIDGET_NONE = 0,     // Slot is hidden
  WIDGET_DATE = 1,     // e.g. "MON, JAN 01"
  WIDGET_STEPS = 2,    // e.g. "1234 STEPS" (health platforms only)
  WIDGET_DISTANCE = 3, // e.g. "0.8 KM"     (health platforms only)
  WIDGET_BATTERY = 4,  // e.g. "85%"
  WIDGET_TYPE_COUNT    // Sentinel — keep last
} WidgetType;

// Maximum length of any widget text string (including null terminator)
#define WIDGET_TEXT_LEN 24

// ---------------------------------------------------------------------------
// widget_get_text
// Writes a human-readable representation of `type` into `buf` (size `buf_len`).
// On platforms without the Health API, health-based widgets produce an empty
// string rather than crashing.
// ---------------------------------------------------------------------------
void widget_get_text(WidgetType type, char *buf, int buf_len);
