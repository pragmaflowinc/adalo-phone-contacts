import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Platform, PermissionsAndroid } from 'react-native'
import RNContacts, { Contact } from 'react-native-contacts';
import { ContactListProps } from './generated';
import { RowProps, SimpleList } from './SimpleList'

const ContactList = (props: ContactListProps) => {
	const [loading, setLoading] = useState(false)
	const [contacts, setContacts] = useState<Contact[]>([{
		
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
		birthday: {'year': 1988, 'month': 0, 'day': 1 },
		imAddresses: [
			{ username: '0123456789', service: 'ICQ'},
			{ username: 'johndoe123', service: 'Facebook'}
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
		birthday: {'year': 1988, 'month': 0, 'day': 1 },
		imAddresses: [
			{ username: '0123456789', service: 'ICQ'},
			{ username: 'johndoe123', service: 'Facebook'}
		]
	}])
	const [error, setError] = useState('')
	const [items, setItems] = useState<any[]>([])
	
	useEffect(() => {
		if (props.firstLine) {
			const firstLineText = props.firstLine as 'displayName' | 'familyName' | 'givenName' 
			setItems(contacts.map(contact => {
				let retVal = {
					id: contact.recordID,
					firstLine: {
						text: contact[firstLineText],
						color: props.titleColor
					},
					rightSection: props.rightSection,
					onPress: () => {
						if (props.onPress) {
							props.onPress(contact[firstLineText], contact.emailAddresses[0]?.email || '', contact.phoneNumbers[0]?.number || '')
						}
					}
				} as RowProps
				if (props.secondLine && props.secondLine.enabled) {
					let secondLineText = ''
					switch (props.secondLine.text as 'emailAddresses' | 'phoneNumbers' | 'postalAddresses') {
						case 'emailAddresses': {
							if (contact.emailAddresses.length > 0) {
								secondLineText = contact.emailAddresses[0].email || ''
							}
						}
						break;
						case 'phoneNumbers': {
							if (contact.emailAddresses.length > 0) {
								secondLineText = contact.phoneNumbers[0].number || ''
							}
						}
						break;
						case 'postalAddresses': {
							if (contact.emailAddresses.length > 0) {
								secondLineText = contact.postalAddresses[0].formattedAddress || ''
							}
						}
						break;
					}
					retVal.secondLine = {
						enabled: true,
						color: props.secondLine.color,
						text: secondLineText
					}
				}
				
				return retVal
			}))
		}
	}, [contacts, props])
  const loadContacts = async () => {
		setLoading(true) 
		try {
			const currentPermissions = await RNContacts.checkPermission();
			if (currentPermissions === 'authorized') {
				const myContacts =  await RNContacts.getAll()
				setLoading(false)
				setContacts(myContacts)
			}
		} catch (e: any) {
			setLoading(false) 
			setError(e.message)
		}
  }

	useEffect(() => {
		if (Platform.OS !== 'web') {
			if (Platform.OS === 'android') {
				PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
					title: "Contacts",
					message: "This app would like to view your contacts.",
					buttonPositive: 'Accept',
					buttonNegative: 'Decline',
					buttonNeutral: 'Ask later'
				}).then(() => {
					loadContacts();
				});
			} else {
				loadContacts()
			}
		}
	}, [])

	return(
		<View style={styles.wrapper}>
			<SimpleList items={items} dividerColor={props.dividerColor} dividerType={props.dividerType} />
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		display: 'flex',
	}
})
 
export default ContactList
