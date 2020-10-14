const myTheme = {
    "name": "my theme",
    "rounding": 6,
    "spacing": 24,
    "defaultMode": "light",
    "global": {
      "colors": {
        "brand": {
          "dark": "#E91159",
          "light": "#D81159"
        },
        "background": {
          "dark": "#111111",
          "light": "#FFFFFF"
        },
        "background-back": {
          "dark": "#111111",
          "light": "#EEEEEE"
        },
        "background-front": {
          "dark": "#222222",
          "light": "#FFFFFF"
        },
        "background-contrast": {
          "dark": "#FFFFFF11",
          "light": "#11111111"
        },
        "text": {
          "dark": "#EEEEEE",
          "light": "#333333"
        },
        "text-strong": {
          "dark": "#FFFFFF",
          "light": "#000000"
        },
        "text-weak": {
          "dark": "#CCCCCC",
          "light": "#444444"
        },
        "text-xweak": {
          "dark": "#999999",
          "light": "#666666"
        },
        "border": {
          "dark": "#444444",
          "light": "#CCCCCC"
        },
        "control": "brand",
        "active-background": "background-contrast",
        "active-text": "text-strong",
        "selected-background": "brand",
        "selected-text": "text-strong",
        "status-critical": "#FF4040",
        "status-warning": "#FFAA15",
        "status-ok": "#00C781",
        "status-unknown": "#CCCCCC",
        "status-disabled": "#CCCCCC",
        "graph-0": "brand",
        "graph-1": "status-warning",
        "green?": {
          "dark": "#328380",
          "light": "#218380"
        },
        "green?!": "",
        "myPurple": {
          "dark": "#902d56",
          "light": "#8F2d56"
        },
        "purple!": "",
        "yellow": {
          "dark": "#0CB13C",
          "light": "#FBB13C"
        },
        "yellow!": ""
      },
      "font": {
        "family": "Helvetica",
        "size": "18px",
        "height": "24px",
        "maxWidth": "432px"
      },
      "active": {
        "background": "active-background",
        "color": "active-text"
      },
      "hover": {
        "background": "active-background",
        "color": "active-text"
      },
      "selected": {
        "background": "selected-background",
        "color": "selected-text"
      },
      "control": {
        "border": {
          "radius": "6px"
        }
      },
      "drop": {
        "border": {
          "radius": "6px"
        }
      },
      "borderSize": {
        "xsmall": "1px",
        "small": "2px",
        "medium": "4px",
        "large": "12px",
        "xlarge": "24px"
      },
      "breakpoints": {
        "small": {
          "value": 768,
          "borderSize": {
            "xsmall": "1px",
            "small": "2px",
            "medium": "4px",
            "large": "6px",
            "xlarge": "12px"
          },
          "edgeSize": {
            "none": "0px",
            "hair": "1px",
            "xxsmall": "2px",
            "xsmall": "3px",
            "small": "6px",
            "medium": "12px",
            "large": "24px",
            "xlarge": "48px"
          },
          "size": {
            "xxsmall": "24px",
            "xsmall": "48px",
            "small": "96px",
            "medium": "192px",
            "large": "384px",
            "xlarge": "768px",
            "full": "100%"
          }
        },
        "medium": {
          "value": 1536
        },
        "large": {}
      },
      "edgeSize": {
        "none": "0px",
        "hair": "1px",
        "xxsmall": "3px",
        "xsmall": "6px",
        "small": "12px",
        "medium": "24px",
        "large": "48px",
        "xlarge": "96px",
        "responsiveBreakpoint": "small"
      },
      "input": {
        "padding": "12px",
        "weight": 600
      },
      "spacing": "24px",
      "size": {
        "xxsmall": "48px",
        "xsmall": "96px",
        "small": "192px",
        "medium": "384px",
        "large": "768px",
        "xlarge": "1152px",
        "xxlarge": "1536px",
        "full": "100%"
      }
    },
    "chart": {},
    "diagram": {
      "line": {}
    },
    "meter": {},
    "button": {
      "border": {
        "width": "2px",
        "radius": "18px"
      },
      "padding": {
        "vertical": "4px",
        "horizontal": "22px"
      }
    },
    "checkBox": {
      "check": {
        "radius": "6px"
      },
      "toggle": {
        "radius": "24px",
        "size": "48px"
      },
      "size": "24px"
    },
    "radioButton": {
      "size": "24px"
    },
    "formField": {
      "border": {
        "color": "brand",
        "error": {
          "color": {
            "dark": "white",
            "light": "status-critical"
          }
        },
        "position": "inner",
        "side": "all",
        "style": "solid",
        "size": "xsmall"
      },
      "content": {
        "pad": "small"
      },
      "disabled": {
        "background": {
          "color": "status-disabled",
          "opacity": "medium"
        }
      },
      "error": {
        "color": "status-critical",
        "margin": {
          "vertical": "xsmall",
          "horizontal": "small"
        }
      },
      "help": {
        "color": "dark-3",
        "margin": {
          "start": "small"
        }
      },
      "info": {
        "color": "text-xweak",
        "margin": {
          "vertical": "xsmall",
          "horizontal": "small"
        }
      },
      "label": {
        "margin": {
          "vertical": "xsmall",
          "horizontal": "small"
        },
        "color": "text"
      },
      "margin": {
        "bottom": "small"
      },
      "round": "6px"
    },
    "scale": 0.9,
    "calendar": {
      "small": {
        "fontSize": "14.4px",
        "lineHeight": 1.375,
        "daySize": "27.43px"
      },
      "medium": {
        "fontSize": "18px",
        "lineHeight": 1.45,
        "daySize": "54.86px"
      },
      "large": {
        "fontSize": "28.8px",
        "lineHeight": 1.11,
        "daySize": "109.71px"
      }
    },
    "clock": {
      "analog": {
        "hour": {
          "width": "8px",
          "size": "24px"
        },
        "minute": {
          "width": "4px",
          "size": "12px"
        },
        "second": {
          "width": "3px",
          "size": "9px"
        },
        "size": {
          "small": "72px",
          "medium": "96px",
          "large": "144px",
          "xlarge": "216px",
          "huge": "288px"
        }
      },
      "digital": {
        "text": {
          "xsmall": {
            "size": "10.8px",
            "height": 1.5
          },
          "small": {
            "size": "14.4px",
            "height": 1.43
          },
          "medium": {
            "size": "18px",
            "height": 1.375
          },
          "large": {
            "size": "21.6px",
            "height": 1.167
          },
          "xlarge": {
            "size": "25.2px",
            "height": 1.1875
          },
          "xxlarge": {
            "size": "32.4px",
            "height": 1.125
          }
        }
      }
    },
    "heading": {
      "level": {
        "1": {
          "small": {
            "size": "32px",
            "height": "38px",
            "maxWidth": "778px"
          },
          "medium": {
            "size": "47px",
            "height": "53px",
            "maxWidth": "1123px"
          },
          "large": {
            "size": "76px",
            "height": "82px",
            "maxWidth": "1814px"
          },
          "xlarge": {
            "size": "104px",
            "height": "110px",
            "maxWidth": "2506px"
          }
        },
        "2": {
          "small": {
            "size": "29px",
            "height": "35px",
            "maxWidth": "691px"
          },
          "medium": {
            "size": "40px",
            "height": "46px",
            "maxWidth": "950px"
          },
          "large": {
            "size": "50px",
            "height": "56px",
            "maxWidth": "1210px"
          },
          "xlarge": {
            "size": "61px",
            "height": "67px",
            "maxWidth": "1469px"
          }
        },
        "3": {
          "small": {
            "size": "25px",
            "height": "31px",
            "maxWidth": "605px"
          },
          "medium": {
            "size": "32px",
            "height": "38px",
            "maxWidth": "778px"
          },
          "large": {
            "size": "40px",
            "height": "46px",
            "maxWidth": "950px"
          },
          "xlarge": {
            "size": "47px",
            "height": "53px",
            "maxWidth": "1123px"
          }
        },
        "4": {
          "small": {
            "size": "22px",
            "height": "28px",
            "maxWidth": "518px"
          },
          "medium": {
            "size": "25px",
            "height": "31px",
            "maxWidth": "605px"
          },
          "large": {
            "size": "29px",
            "height": "35px",
            "maxWidth": "691px"
          },
          "xlarge": {
            "size": "32px",
            "height": "38px",
            "maxWidth": "778px"
          }
        },
        "5": {
          "small": {
            "size": "16px",
            "height": "22px",
            "maxWidth": "389px"
          },
          "medium": {
            "size": "16px",
            "height": "22px",
            "maxWidth": "389px"
          },
          "large": {
            "size": "16px",
            "height": "22px",
            "maxWidth": "389px"
          },
          "xlarge": {
            "size": "16px",
            "height": "22px",
            "maxWidth": "389px"
          }
        },
        "6": {
          "small": {
            "size": "14px",
            "height": "20px",
            "maxWidth": "346px"
          },
          "medium": {
            "size": "14px",
            "height": "20px",
            "maxWidth": "346px"
          },
          "large": {
            "size": "14px",
            "height": "20px",
            "maxWidth": "346px"
          },
          "xlarge": {
            "size": "14px",
            "height": "20px",
            "maxWidth": "346px"
          }
        }
      }
    },
    "paragraph": {
      "small": {
        "size": "16px",
        "height": "22px",
        "maxWidth": "389px"
      },
      "medium": {
        "size": "18px",
        "height": "24px",
        "maxWidth": "432px"
      },
      "large": {
        "size": "22px",
        "height": "28px",
        "maxWidth": "518px"
      },
      "xlarge": {
        "size": "25px",
        "height": "31px",
        "maxWidth": "605px"
      },
      "xxlarge": {
        "size": "32px",
        "height": "38px",
        "maxWidth": "778px"
      }
    },
    "text": {
      "xsmall": {
        "size": "14px",
        "height": "20px",
        "maxWidth": "346px"
      },
      "small": {
        "size": "16px",
        "height": "22px",
        "maxWidth": "389px"
      },
      "medium": {
        "size": "18px",
        "height": "24px",
        "maxWidth": "432px"
      },
      "large": {
        "size": "22px",
        "height": "28px",
        "maxWidth": "518px"
      },
      "xlarge": {
        "size": "25px",
        "height": "31px",
        "maxWidth": "605px"
      },
      "xxlarge": {
        "size": "32px",
        "height": "38px",
        "maxWidth": "778px"
      }
    }
  }

export default myTheme;