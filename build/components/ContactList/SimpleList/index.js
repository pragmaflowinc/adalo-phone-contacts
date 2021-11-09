"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleList = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const react_native_material_ui_1 = require("@protonapp/react-native-material-ui");
//@ts-ignore
const dist_1 = __importDefault(require("react-native-vector-icons/dist"));
function SimpleList(_a) {
    var { items = [], dividerType, dividerColor } = _a, rest = __rest(_a, ["items", "dividerType", "dividerColor"]);
    return (react_1.default.createElement(react_native_1.View, { style: styles.wrapper }, items.map((itm, i) => (react_1.default.createElement(Row, Object.assign({}, itm, rest, { key: itm.id, dividerType: dividerType, dividerColor: dividerColor, lastRow: i === items.length - 1 }))))));
}
exports.SimpleList = SimpleList;
function Row({ onPress, dividerType, leftSection, rightSection, dividerColor, lastRow, firstLine, secondLine }) {
    function getDividerInset() {
        if (dividerType !== 'inset') {
            return 0;
        }
        let baseInset = 16;
        if (!leftSection || !leftSection.enabled) {
            return baseInset;
        }
        if (leftSection.type === 'icon' || leftSection.type === 'avatar') {
            return baseInset * 2 + 40;
        }
        if (leftSection.type === 'image') {
            return baseInset * 2 + 56;
        }
        return 0;
    }
    function getDividerStyles() {
        return {
            left: getDividerInset(),
            backgroundColor: dividerColor
        };
    }
    function hasDivider() {
        return !lastRow && dividerType && dividerType !== 'none';
    }
    function renderLeftSection() {
        if (!leftSection || !leftSection.enabled) {
            return null;
        }
        let source = leftSection.image;
        if (leftSection.type === 'icon') {
            return (react_1.default.createElement(react_native_1.View, { style: styles.iconWrapper, pointerEvents: "none" },
                react_1.default.createElement(dist_1.default, { size: 24, name: leftSection.icon, color: leftSection.iconColor })));
        }
        if (leftSection.type === 'avatar') {
            return (react_1.default.createElement(react_native_1.Image, { resizeMode: "cover", source: source, style: styles.avatar }));
        }
        if (leftSection.type === 'image') {
            return (react_1.default.createElement(react_native_1.Image, { resizeMode: "cover", source: source, style: styles.image }));
        }
        return null;
    }
    function renderRightSection() {
        if (!rightSection || !rightSection.enabled) {
            return null;
        }
        if (rightSection.type === 'icon' && rightSection.icon) {
            return (react_1.default.createElement(react_native_material_ui_1.IconToggle, { name: rightSection.icon, color: rightSection.iconColor, underlayColor: rightSection.iconColor, maxOpacity: 0.3, size: 24, onPress: rightSection.onPress, style: { container: { marginRight: -12 } } }));
        }
        return null;
    }
    function renderContent() {
        return (react_1.default.createElement(react_native_1.View, { style: styles.row },
            renderLeftSection(),
            react_1.default.createElement(react_native_1.View, { style: styles.main, pointerEvents: "none" },
                react_1.default.createElement(FirstLine, Object.assign({}, firstLine)),
                (secondLine && secondLine.enabled)
                    ? react_1.default.createElement(SecondLine, Object.assign({}, secondLine))
                    : null),
            renderRightSection(),
            hasDivider()
                ? react_1.default.createElement(react_native_1.View, { style: [styles.divider, getDividerStyles()] })
                : null));
    }
    if (onPress) {
        return (react_1.default.createElement(react_native_1.View, null,
            react_1.default.createElement(react_native_material_ui_1.RippleFeedback, { onPress: onPress }, renderContent())));
    }
    return (react_1.default.createElement(react_native_1.View, null, renderContent()));
}
function FirstLine({ color = '#212121', text = '' }) {
    return (react_1.default.createElement(react_native_1.Text, { style: [styles.firstLine, { color }], numberOfLines: 1, ellipsizeMode: "tail" }, text));
}
function SecondLine({ color = '#757575', text = '' }) {
    return (react_1.default.createElement(react_native_1.Text, { style: [styles.secondLine, { color }], numberOfLines: 1, ellipsizeMode: "tail" }, text));
}
const styles = react_native_1.StyleSheet.create({
    wrapper: {
        paddingTop: 8,
        paddingBottom: 8,
    },
    row: {
        paddingLeft: 16,
        paddingRight: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
    divider: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        height: 1,
    },
    iconWrapper: {
        marginRight: 32,
        width: 24,
        height: 24,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginTop: 16,
        marginBottom: 16,
    },
    icon: {
        width: 24,
        height: 24,
    },
    avatar: {
        marginRight: 16,
        borderRadius: 20,
        height: 40,
        width: 40,
        marginTop: 8,
        marginBottom: 8,
        backgroundColor: '#ccc',
    },
    image: {
        marginRight: 16,
        marginTop: 8,
        marginBottom: 8,
        height: 56,
        width: 56,
        backgroundColor: '#ccc',
    },
    main: {
        flex: 1,
        marginTop: 16,
        marginBottom: 16,
    },
    firstLine: {
        lineHeight: 20,
        fontSize: 16,
        maxWidth: '100%',
    },
    secondLine: {
        lineHeight: 18,
        marginTop: 2,
        fontSize: 14,
        maxWidth: '100%',
    }
});
//# sourceMappingURL=index.js.map