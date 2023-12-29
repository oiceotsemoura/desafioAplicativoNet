// import {theme} from '@theme/index';

export enum FontFamilyTypes {
  GraphikBold = 'Graphik-Bold',
  GraphikLight = 'Graphik-Light',
  GraphikMedium = 'Graphik-Medium',
  GraphikRegular = 'Graphik-Regular',
  LexendBold = 'Lexend-Bold',
  LexendRegular = 'Lexend-Regular',
}

interface IFontProps {
  fontFamily: FontFamilyTypes;
  fontSize?: number;
}

const Heading8: IFontProps = {
  fontFamily: FontFamilyTypes.LexendBold,
  fontSize: 16,
};

const Heading5: IFontProps = {
  fontFamily: FontFamilyTypes.LexendBold,
  fontSize: 21,
};

const Heading4: IFontProps = {
  fontFamily: FontFamilyTypes.LexendBold,
  fontSize: 24,
};

const Heading3: IFontProps = {
  fontFamily: FontFamilyTypes.GraphikBold,
  fontSize: 18,
};

const Caption: IFontProps = {
  fontFamily: FontFamilyTypes.GraphikRegular,
  fontSize: 14,
};

const CaptionMedium: IFontProps = {
  fontFamily: FontFamilyTypes.GraphikMedium,
  fontSize: 14,
};

const CaptionLight: IFontProps = {
  fontFamily: FontFamilyTypes.GraphikLight,
  fontSize: 14,
};

const TextBodyBold: IFontProps = {
  fontFamily: FontFamilyTypes.GraphikBold,
  fontSize: 16,
};

const TextBodyRegular: IFontProps = {
  fontFamily: FontFamilyTypes.GraphikRegular,
  fontSize: 16,
};

const TextBodyMedium: IFontProps = {
  fontFamily: FontFamilyTypes.GraphikMedium,
  fontSize: 16,
};

const Password: IFontProps = {
  fontFamily: FontFamilyTypes.GraphikMedium,
  fontSize: 52,
};

export const FontTypes = {
  Heading8,
  Heading5,
  Heading4,
  Heading3,
  Caption,
  CaptionMedium,
  CaptionLight,
  TextBodyBold,
  TextBodyRegular,
  TextBodyMedium,
  Password,
};
