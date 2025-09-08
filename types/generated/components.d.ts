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

export interface ComponentsOurServices extends Struct.ComponentSchema {
  collectionName: 'components_components_our_services';
  info: {
    displayName: 'Our Services';
  };
  attributes: {
    Card: Schema.Attribute.Component<'components.service-card', true>;
    Description: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
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

export interface ComponentsServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_components_service_cards';
  info: {
    displayName: 'service-card';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
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

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    external: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    href: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface ElementsLogoLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_logo_links';
  info: {
    displayName: 'Logo link';
  };
  attributes: {
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.String;
  };
}

export interface LayoutTopNav extends Struct.ComponentSchema {
  collectionName: 'components_layout_top_navs';
  info: {
    displayName: 'Top nav';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    link: Schema.Attribute.Component<'elements.link', true>;
    logoLink: Schema.Attribute.Component<'elements.logo-link', false>;
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
      'components.our-services': ComponentsOurServices;
      'components.partner-banner': ComponentsPartnerBanner;
      'components.partner-section': ComponentsPartnerSection;
      'components.partners': ComponentsPartners;
      'components.service-card': ComponentsServiceCard;
      'components.side-info-card': ComponentsSideInfoCard;
      'components.speakers': ComponentsSpeakers;
      'elements.link': ElementsLink;
      'elements.logo-link': ElementsLogoLink;
      'layout.top-nav': LayoutTopNav;
    }
  }
}
