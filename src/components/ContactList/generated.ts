/*********** Manifest Props *******************
 * This file is auto generated, making manual *
 * edits to this file might result in loosing *
 * information.                               *
 **********************************************/
export interface IStyles {
  fontFamily?: string
  fontSize?: number
  fontWeight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | undefined
  textAlignment?: string
  color?: string
}

export interface IFonts {
  body: string
  heading: string
}

export interface IAvatar {
  uri: string
  cache: string
}

export interface ISecondLine {
  enabled?: boolean
  text?: string
  color?: string
}

export interface IRightSection {
  enabled?: boolean
  type?: string
  icon?: string
  iconColor?: string
  onPress?: (DisplayName?: string, PrimaryEmailAddresss?: string, PrimaryPhoneNumber?: string) => void
}

export interface ContactListProps {
  secondLine?: ISecondLine
  rightSection?: IRightSection
  dividerType?: string
  dividerColor?: string
  onPress?: (DisplayName?: string, PrimaryEmailAddresss?: string, PrimaryPhoneNumber?: string) => void
  firstLine?: string
  titleColor?: string
  appId: string
  _fonts: IFonts
  _width: number
  _height: number
  editor: boolean
}