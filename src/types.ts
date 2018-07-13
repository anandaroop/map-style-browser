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

/* tslint:disable:object-literal-sort-keys */
export const VISUAL_STYLES = {
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

export const CONTENT_STYLES = {
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
