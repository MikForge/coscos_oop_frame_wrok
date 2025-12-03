System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd;

  /**
   * 返回枚举的键（排除反向映射的数字键）
   */

  /**
   * 返回枚举的 [键, 值] 列表
   */

  /**
   * 返回枚举的值列表（数字或字符串）
   */
  function enumKeys(e) {
    return Object.keys(e).filter(k => isNaN(Number(k)));
  }

  function enumEntries(e) {
    return enumKeys(e).map(k => [k, e[k]]);
  }

  function enumValues(e) {
    return enumEntries(e).map(([_, v]) => v);
  }

  _export({
    enumKeys: enumKeys,
    enumEntries: enumEntries,
    enumValues: enumValues
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0bd05SiQIFBU5lHCns1kkdb", "utils", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=47059cdcbb8af7209d815a41faa884a27739fa4e.js.map