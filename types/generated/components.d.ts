import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsAboutSection extends Struct.ComponentSchema {
  collectionName: 'components_components_about_sections';
  info: {
    displayName: 'AboutSection';
    icon: 'envelop';
  };
  attributes: {
    Desc: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    Image: Schema.Attribute.RichText;
    Title: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface ComponentsBanner extends Struct.ComponentSchema {
  collectionName: 'components_components_banners';
  info: {
    displayName: 'Banner';
    icon: 'landscape';
  };
  attributes: {
    Desc: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    image: Schema.Attribute.RichText;
    link: Schema.Attribute.String;
    Title: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface ComponentsGearImage extends Struct.ComponentSchema {
  collectionName: 'components_components_gear_images';
  info: {
    displayName: 'GearImage';
  };
  attributes: {
    image: Schema.Attribute.RichText;
  };
}

export interface ComponentsKeynoteSpeakers extends Struct.ComponentSchema {
  collectionName: 'components_components_keynote_speakers';
  info: {
    displayName: 'KeynoteSpeakers';
  };
  attributes: {
    designation: Schema.Attribute.Text;
    image: Schema.Attribute.RichText;
    name: Schema.Attribute.String;
  };
}

export interface ComponentsNews extends Struct.ComponentSchema {
  collectionName: 'components_components_news';
  info: {
    displayName: 'News';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.RichText;
    link: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsPartnerBanner extends Struct.ComponentSchema {
  collectionName: 'components_components_partner_banners';
  info: {
    displayName: 'PartnerBanner';
    icon: 'picture';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ComponentsPartnerSection extends Struct.ComponentSchema {
  collectionName: 'components_components_partner_sections';
  info: {
    displayName: 'PartnerSection';
    icon: 'stack';
  };
  attributes: {
    Image: Schema.Attribute.Component<'components.partner-banner', true>;
  };
}

export interface ComponentsPartners extends Struct.ComponentSchema {
  collectionName: 'components_components_partners';
  info: {
    displayName: 'Partners';
  };
  attributes: {
    logo: Schema.Attribute.RichText;
    name: Schema.Attribute.String;
  };
}

export interface ComponentsSideInfoCard extends Struct.ComponentSchema {
  collectionName: 'components_components_side_info_cards';
  info: {
    displayName: 'SideInfoCard';
    icon: 'archive';
  };
  attributes: {
    desc: Schema.Attribute.Text;
    imagePart: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    QWERTYUTREWQ: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    title: Schema.Attribute.String;
    wq: Schema.Attribute.String;
  };
}

export interface ComponentsSpeakers extends Struct.ComponentSchema {
  collectionName: 'components_components_speakers';
  info: {
    displayName: 'Speakers';
  };
  attributes: {
    designation: Schema.Attribute.Text;
    image: Schema.Attribute.RichText;
    name: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.about-section': ComponentsAboutSection;
      'components.banner': ComponentsBanner;
      'components.gear-image': ComponentsGearImage;
      'components.keynote-speakers': ComponentsKeynoteSpeakers;
      'components.news': ComponentsNews;
      'components.partner-banner': ComponentsPartnerBanner;
      'components.partner-section': ComponentsPartnerSection;
      'components.partners': ComponentsPartners;
      'components.side-info-card': ComponentsSideInfoCard;
      'components.speakers': ComponentsSpeakers;
    }
  }
}
