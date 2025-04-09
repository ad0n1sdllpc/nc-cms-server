import type { Schema, Struct } from '@strapi/strapi';

export interface SharedSeoMetadata extends Struct.ComponentSchema {
  collectionName: 'components_shared_seo_metadata';
  info: {
    displayName: 'SEO Metadata';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    metaKeywords: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.seo-metadata': SharedSeoMetadata;
    }
  }
}
