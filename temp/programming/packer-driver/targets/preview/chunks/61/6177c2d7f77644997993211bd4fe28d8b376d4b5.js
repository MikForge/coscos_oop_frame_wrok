System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, log, Logger, _crd, LogLevel, LogType, names;

  _export("Logger", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      log = _cc.log;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f6c8e+ozztIY43dlfAcMCqV", "Logger", undefined);

      /** 日志级别(数字越大级别越高) */
      __checkObsolete__(['log']);

      _export("LogLevel", LogLevel = /*#__PURE__*/function (LogLevel) {
        LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
        LogLevel[LogLevel["INFO"] = 1] = "INFO";
        LogLevel[LogLevel["WARN"] = 2] = "WARN";
        LogLevel[LogLevel["ERROR"] = 3] = "ERROR";
        LogLevel[LogLevel["OFF"] = 999] = "OFF";
        return LogLevel;
      }({}));
      /** 日志类型(用于分类) */


      _export("LogType", LogType = /*#__PURE__*/function (LogType) {
        LogType[LogType["Net"] = 1] = "Net";
        LogType[LogType["Model"] = 2] = "Model";
        LogType[LogType["Business"] = 4] = "Business";
        LogType[LogType["View"] = 8] = "View";
        LogType[LogType["Config"] = 16] = "Config";
        LogType[LogType["Trace"] = 32] = "Trace";
        LogType[LogType["Info"] = 64] = "Info";
        LogType[LogType["Warn"] = 128] = "Warn";
        LogType[LogType["Error"] = 256] = "Error";
        return LogType;
      }({}));

      names = {
        "1": "网络日志",
        "2": "数据日志",
        "4": "业务日志",
        "8": "视图日志",
        "16": "配置日志",
        "32": "标准日志",
        "64": "信息日志",
        "128": "警告日志",
        "256": "错误日志"
      };

      /** 
       * 日志管理 
       * @help    https://gitee.com/dgflash/oops-framework/wikis/pages?sort_id=12037904&doc_id=2873565
       * @example
      // 按类型分类的日志
      oops.log.trace("默认标准日志");
      oops.log.logConfig("灰色配置日志");
      oops.log.logNet("橙色网络日志");
      oops.log.logModel("紫色数据日志");
      oops.log.logBusiness("蓝色业务日志");
      oops.log.logView("绿色视图日志");
      
      // 按级别分类的日志
      oops.log.debug("调试信息");
      oops.log.info("普通信息");
      oops.log.warn("警告信息");
      oops.log.error("错误信息");
      
      // 设置日志级别(只显示 WARN 及以上)
      oops.log.setLevel(LogLevel.WARN);
      
      // 设置类型过滤(兼容原有方式)
      oops.log.setTags(LogType.Net | LogType.Business);
       */
      _export("Logger", Logger = class Logger {
        constructor() {
          this.tags = 0;
          this.level = LogLevel.DEBUG;
          // 新增:日志级别
          this.lc = null;
        }

        static get instance() {
          if (this._instance == null) {
            this._instance = new Logger();

            this._instance.init();
          }

          return this._instance;
        }

        /** 设置界面日志控制台 */
        setLoggerConsole(lc) {
          this.lc = lc;
        }

        init() {
          this.tags = LogType.Net | LogType.Model | LogType.Business | LogType.View | LogType.Config | LogType.Trace | LogType.Info | LogType.Warn | LogType.Error;
        }
        /** 
         * 设置显示的日志类型,默认值为不显示任何类型日志
         * @example
        oops.log.setTags(LogType.View|LogType.Business)
         */


        setTags(tag) {
          if (tag === void 0) {
            tag = null;
          }

          if (tag) {
            this.tags = tag;
          }
        }
        /**
         * 设置日志级别(只显示该级别及以上的日志)
         * @example
        oops.log.setLevel(LogLevel.WARN);  // 只显示 WARN 和 ERROR
         */


        setLevel(level) {
          this.level = level;
        }
        /**
         * 记录开始计时
         * @param describe  标题描述
         */


        start(describe) {
          if (describe === void 0) {
            describe = "Time";
          }

          console.time(describe);
        }
        /**
         * 打印范围内时间消耗
         * @param describe  标题描述
         */


        end(describe) {
          if (describe === void 0) {
            describe = "Time";
          }

          console.timeEnd(describe);
        }
        /**
         * 打印表格
         * @param msg       日志消息
         * @param describe  标题描述
         */


        table(msg, describe) {
          if (!this.isOpen(LogType.Trace)) {
            return;
          }

          console.table(msg);
        }
        /**
         * 打印标准日志
         * @param msg       日志消息
         */


        trace(msg, color) {
          if (color === void 0) {
            color = "#000000ff";
          }

          this.print(LogType.Trace, msg, color);
        }
        /**
         * 打印网络层日志
         * @param msg       日志消息
         * @param describe  标题描述
         */


        logNet(msg, describe) {
          this.orange(LogType.Net, msg, describe);
        }
        /**
         * 打印数据层日志
         * @param msg       日志消息
         * @param describe  标题描述
         */


        logModel(msg, describe) {
          this.violet(LogType.Model, msg, describe);
        }
        /**
         * 打印业务层日志
         * @param msg       日志消息
         * @param describe  标题描述
         */


        logBusiness(msg, describe) {
          this.blue(LogType.Business, msg, describe);
        }
        /**
         * 打印视图日志
         * @param msg       日志消息
         * @param describe  标题描述
         */


        logView(msg, describe) {
          this.green(LogType.View, msg, describe);
        }
        /** 打印配置日志 */


        logConfig(msg, describe) {
          this.gray(LogType.Config, msg, describe);
        } // ========== 新增:标准日志级别方法 ==========

        /**
         * 调试日志(DEBUG级别)
         * @param msg       日志消息
         * @param describe  标题描述
         */


        debug(msg, describe) {
          this.printWithLevel(LogLevel.DEBUG, "调试", msg, "#808080", describe);
        }
        /**
         * 信息日志(INFO级别)
         * @param msg       日志消息
         * @param describe  标题描述
         */


        info(msg) {
          this.trace(msg);
        }
        /**
         * 警告日志(WARN级别)
         * @param msg       日志消息
         * @param describe  标题描述
         */


        warn(msg, describe) {
          this.printWithLevel(LogLevel.WARN, "警告", msg, "#ffd700", describe);
        }
        /**
         * 错误日志(ERROR级别)
         * @param msg       日志消息
         * @param describe  标题描述
         */


        error(msg, describe) {
          this.printWithLevel(LogLevel.ERROR, "错误", msg, "#ff0000", describe);
        } // ========== 私有颜色方法 ==========
        // 橙色


        orange(tag, msg, describe) {
          this.print(tag, msg, "#ee7700", describe);
        } // 紫色


        violet(tag, msg, describe) {
          this.print(tag, msg, "#800080", describe);
        } // 蓝色


        blue(tag, msg, describe) {
          this.print(tag, msg, "#3a5fcd", describe);
        } // 绿色


        green(tag, msg, describe) {
          this.print(tag, msg, "#008000", describe);
        } // 灰色


        gray(tag, msg, describe) {
          this.print(tag, msg, "#808080", describe);
        }

        isOpen(tag) {
          return (this.tags & tag) != 0;
        }
        /**
         * 按级别输出日志(不受 tags 控制,只受 level 控制)
         */


        printWithLevel(level, levelName, msg, color, describe) {
          // 级别不够,不打印
          if (level < this.level) {
            return;
          }

          if (this.lc == null) {
            var backLog = console.log || log;
            color = "color:" + color + ";";

            if (describe) {
              backLog.call(null, "%c%s[%s]%s:%s%o", color, this.getDateString(), levelName, this.stack(5), describe, msg);
            } else {
              backLog.call(null, "%c%s[%s]%s:%o", color, this.getDateString(), levelName, this.stack(5), msg);
            }
          } else {
            this.lc.trace(this.getDateString() + "[" + levelName + "]" + msg, color);
          }
        }
        /**
         * 输出日志(按类型控制)
         * @param tag       日志类型
         * @param msg       日志内容
         * @param color     日志文本颜色
         * @param describe  日志标题描述
         */


        print(tag, msg, color, describe) {
          // 标记没有打开,不打印该日志
          if (!this.isOpen(tag)) {
            return;
          }

          var type = names[tag];

          if (this.lc == null) {
            var backLog = console.log || log;
            color = "color:" + color + ";";

            if (describe) {
              backLog.call(null, "%c%s%s%s:%s%o", color, this.getDateString(), '[' + type + ']', this.stack(5), describe, msg);
            } else {
              backLog.call(null, "%c%s%s%s:%o", color, this.getDateString(), '[' + type + ']', this.stack(5), msg);
            }
          } else {
            this.lc.trace(this.getDateString() + "[" + type + "]" + msg, color);
          }
        }

        stack(index) {
          var e = new Error();
          var lines = e.stack.split("\n");
          var result = [];
          lines.forEach(line => {
            line = line.substring(7);
            var lineBreak = line.split(" ");

            if (lineBreak.length < 2) {
              result.push(lineBreak[0]);
            } else {
              result.push({
                [lineBreak[0]]: lineBreak[1]
              });
            }
          });
          var list = [];
          var splitList = [];

          if (index < result.length - 1) {
            var value;

            for (var a in result[index]) {
              splitList = a.split(".");

              if (splitList.length == 2) {
                list = splitList.concat();
              } else {
                value = result[index][a];
                var start = value.lastIndexOf("/");
                var end = value.lastIndexOf(".");

                if (start > -1 && end > -1) {
                  var r = value.substring(start + 1, end);
                  list.push(r);
                } else {
                  list.push(value);
                }
              }
            }
          }

          if (list.length == 1) {
            return "[" + list[0] + ".ts]";
          } else if (list.length == 2) {
            return "[" + list[0] + ".ts->" + list[1] + "]";
          }

          return "";
        }

        getDateString() {
          var d = new Date();
          var str = d.getHours().toString();
          var timeStr = "";
          timeStr += (str.length == 1 ? "0" + str : str) + ":";
          str = d.getMinutes().toString();
          timeStr += (str.length == 1 ? "0" + str : str) + ":";
          str = d.getSeconds().toString();
          timeStr += (str.length == 1 ? "0" + str : str) + ":";
          str = d.getMilliseconds().toString();
          if (str.length == 1) str = "00" + str;
          if (str.length == 2) str = "0" + str;
          timeStr += str;
          timeStr = "[" + timeStr + "]";
          return timeStr;
        }

      });

      Logger._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6177c2d7f77644997993211bd4fe28d8b376d4b5.js.map