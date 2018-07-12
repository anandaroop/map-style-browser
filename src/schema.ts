export enum VisualStyle {
  natural = 'natural',
  relief = 'relief',
  flat = 'flat'
}

export enum ContentStyle {
  locator = 'locator',
  entities = 'entities',
  phenomena = 'phenomena'
}

export type VisualStyleKey =
  | VisualStyle.natural
  | VisualStyle.relief
  | VisualStyle.flat

export type ContentStyleKey =
  | ContentStyle.locator
  | ContentStyle.entities
  | ContentStyle.phenomena


/* tslint:disable:object-literal-sort-keys */
export const visualStyles = {
  [VisualStyle.natural]: {
    displayName: 'Natural',
    description:
      'uses naturalistic colors to depict land cover and vegetation as well as terrain'
  },
  [VisualStyle.relief]: {
    displayName: 'Relief',
    description: 'uses shaded topographic relief to depict terrain'
  },
  [VisualStyle.flat]: {
    displayName: 'Flat',
    description: 'uses flat tints and line art only'
  }
}

export const contentStyles = {
  [ContentStyle.locator]: {
    displayName: 'Simple locator',
    description:
      'locates simple point features such as towns, archaeological sites, etc'
  },
  [ContentStyle.entities]: {
    displayName: 'Historical entities',
    description:
      'shows areal entities such as kingdoms, states, linguistic areas, etc'
  },
  [ContentStyle.phenomena]: {
    displayName: 'Historical phenomena',
    description: 'shows spatial phenomena such as trade or invasion routes, etc'
  }
}
