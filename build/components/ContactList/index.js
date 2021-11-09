"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const react_native_contacts_1 = __importDefault(require("react-native-contacts"));
const SimpleList_1 = require("./SimpleList");
const ContactList = (props) => {
    const [loading, setLoading] = (0, react_1.useState)(false);
    const [contacts, setContacts] = (0, react_1.useState)([{
            recordID: '6b2237ee0df85980',
            displayName: 'Carl Jung',
            note: '',
            backTitle: '',
            company: '',
            emailAddresses: [{
                    label: 'work',
                    email: 'carl-jung@example.com',
                }],
            familyName: 'Jung',
            givenName: 'Carl',
            middleName: '',
            jobTitle: '',
            phoneNumbers: [{
                    label: 'mobile',
                    number: '(555) 555-5555',
                }],
            hasThumbnail: true,
            thumbnailPath: 'content://com.android.contacts/display_photo/3',
            postalAddresses: [{
                    label: 'home',
                    formattedAddress: '',
                    street: '123 Fake Street',
                    pobox: '',
                    neighborhood: '',
                    city: 'Sample City',
                    region: 'CA',
                    state: 'CA',
                    postCode: '90210',
                    country: 'USA',
                }],
            prefix: 'MR',
            suffix: '',
            department: '',
            birthday: { 'year': 1988, 'month': 0, 'day': 1 },
            imAddresses: [
                { username: '0123456789', service: 'ICQ' },
                { username: 'johndoe123', service: 'Facebook' }
            ]
        }, {
            recordID: '6b2237ee0df85981',
            displayName: 'Carl Jung',
            note: '',
            backTitle: '',
            company: '',
            emailAddresses: [{
                    label: 'work',
                    email: 'carl-jung@example.com',
                }],
            familyName: 'Jung',
            givenName: 'Carl',
            middleName: '',
            jobTitle: '',
            phoneNumbers: [{
                    label: 'mobile',
                    number: '(555) 555-5555',
                }],
            hasThumbnail: true,
            thumbnailPath: 'content://com.android.contacts/display_photo/3',
            postalAddresses: [{
                    label: 'home',
                    formattedAddress: '',
                    street: '123 Fake Street',
                    pobox: '',
                    neighborhood: '',
                    city: 'Sample City',
                    region: 'CA',
                    state: 'CA',
                    postCode: '90210',
                    country: 'USA',
                }],
            prefix: 'MR',
            suffix: '',
            department: '',
            birthday: { 'year': 1988, 'month': 0, 'day': 1 },
            imAddresses: [
                { username: '0123456789', service: 'ICQ' },
                { username: 'johndoe123', service: 'Facebook' }
            ]
        }]);
    const [error, setError] = (0, react_1.useState)('');
    const [items, setItems] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        if (props.firstLine) {
            const firstLineText = props.firstLine;
            setItems(contacts.map(contact => {
                let retVal = {
                    id: contact.recordID,
                    firstLine: {
                        text: contact[firstLineText],
                        color: props.titleColor
                    },
                    rightSection: props.rightSection,
                    onPress: () => {
                        var _a, _b;
                        if (props.onPress) {
                            props.onPress(contact[firstLineText], ((_a = contact.emailAddresses[0]) === null || _a === void 0 ? void 0 : _a.email) || '', ((_b = contact.phoneNumbers[0]) === null || _b === void 0 ? void 0 : _b.number) || '');
                        }
                    }
                };
                if (props.secondLine && props.secondLine.enabled) {
                    let secondLineText = '';
                    switch (props.secondLine.text) {
                        case 'emailAddresses':
                            {
                                if (contact.emailAddresses.length > 0) {
                                    secondLineText = contact.emailAddresses[0].email || '';
                                }
                            }
                            break;
                        case 'phoneNumbers':
                            {
                                if (contact.emailAddresses.length > 0) {
                                    secondLineText = contact.phoneNumbers[0].number || '';
                                }
                            }
                            break;
                        case 'postalAddresses':
                            {
                                if (contact.emailAddresses.length > 0) {
                                    secondLineText = contact.postalAddresses[0].formattedAddress || '';
                                }
                            }
                            break;
                    }
                    retVal.secondLine = {
                        enabled: true,
                        color: props.secondLine.color,
                        text: secondLineText
                    };
                }
                return retVal;
            }));
        }
    }, [contacts, props]);
    const loadContacts = () => __awaiter(void 0, void 0, void 0, function* () {
        setLoading(true);
        try {
            const currentPermissions = yield react_native_contacts_1.default.checkPermission();
            if (currentPermissions === 'authorized') {
                const myContacts = yield react_native_contacts_1.default.getAll();
                setLoading(false);
                setContacts(myContacts);
            }
        }
        catch (e) {
            setLoading(false);
            setError(e.message);
        }
    });
    (0, react_1.useEffect)(() => {
        if (react_native_1.Platform.OS !== 'web') {
            if (react_native_1.Platform.OS === 'android') {
                react_native_1.PermissionsAndroid.request(react_native_1.PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
                    title: "Contacts",
                    message: "This app would like to view your contacts.",
                    buttonPositive: 'Accept',
                    buttonNegative: 'Decline',
                    buttonNeutral: 'Ask later'
                }).then(() => {
                    loadContacts();
                });
            }
            else {
                loadContacts();
            }
        }
    }, []);
    return (react_1.default.createElement(react_native_1.View, { style: styles.wrapper },
        react_1.default.createElement(SimpleList_1.SimpleList, { items: items, dividerColor: props.dividerColor, dividerType: props.dividerType })));
};
const styles = react_native_1.StyleSheet.create({
    wrapper: {
        display: 'flex',
    }
});
exports.default = ContactList;
//# sourceMappingURL=index.js.map