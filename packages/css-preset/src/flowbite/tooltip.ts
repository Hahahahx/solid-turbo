export default function tooltip(theme: any) {
  const baseTooltip = `
    .tooltip-arrow, .tooltip-arrow:before {
      position: absolute;
      width: 8px;
      height: 8px;
      background: inherit;
    }

    .tooltip-arrow {
      visibility: hidden;
    }
    
    .tooltip-arrow:before {
      content: '';
      visibility: visible;
      transform: rotate(45deg);
    }

    [data-tooltip-style^='light'] + .tooltip > .tooltip-arrow:before{
      border-style: solid;
      border-color: ${theme.colors.gray['200']};
    }

    
    [data-tooltip-style^='light'] + .tooltip[data-popper-placement^='top'] > .tooltip-arrow:before{
      border-bottom-width: 1px;
      border-right-width: 1px;
    }
      
    [data-tooltip-style^='light'] + .tooltip[data-popper-placement^='right'] > .tooltip-arrow:before{
      border-bottom-width: 1px;
      border-left-width: 1px;
    }
      
    [data-tooltip-style^='light'] + .tooltip[data-popper-placement^='bottom'] > .tooltip-arrow:before{
      border-top-width: 1px;
      border-left-width: 1px;
    }
      
    [data-tooltip-style^='light'] + .tooltip[data-popper-placement^='left'] > .tooltip-arrow:before{
      border-top-width: 1px;
      border-right-width: 1px;
    }

    .tooltip[data-popper-placement^='top'] > .tooltip-arrow {
      bottom: 4px;
    }
    .tooltip[data-popper-placement^='bottom'] > .tooltip-arrow {
      top: 4px;
    }
    .tooltip[data-popper-placement^='left'] > .tooltip-arrow {
      right: 4px;
    }
    .tooltip[data-popper-placement^='right'] > .tooltip-arrow {
      left: 4px;
    }
    .tooltip.invisible > .tooltip-arrow:before {
      visibility: hidden;
    }
  `

  const popover = `
    [data-popper-arrow], [data-popper-arrow]:before {
      position: absolute;
      width: 8px;
      height: 8px;
      background: inherit;
    }
    [data-popper-arrow] {
        visibility: hidden;
    }
    [data-popper-arrow]:before {
        content: '';
        visibility: visible;
        transform: rotate(45deg);
    }
    [data-popper-arrow]:after {
        content: '';
        visibility: visible;
        transform: rotate(45deg);
        position: absolute;
        width: 9px;
        height: 9px;
        background: inherit;
    }
    [role="tooltip"] > [data-popper-arrow]:before {
        border-style: solid;
        border-color: ${theme.colors.gray['200']};
    }
    .dark [role="tooltip"] > [data-popper-arrow]:before {
        border-style: solid;
        border-color: ${theme.colors.gray['600']};
    }
    [role="tooltip"] > [data-popper-arrow]:after {
        border-style: solid;
        border-color: ${theme.colors.gray['200']};
    }
    .dark [role="tooltip"] > [data-popper-arrow]:after {
        border-style: solid;
        border-color: ${theme.colors.gray['600']};
    }
  `

  const popoverAndTooltip = `
  [role="tooltip"][data-popper-placement^='top'] > [data-popper-arrow]:before
    {
        border-bottom-width: 1px;
        border-right-width: 1px;
    }
  [role="tooltip"][data-popper-placement^='top'] > [data-popper-arrow]:after
    {
        border-bottom-width: 1px;
        border-right-width: 1px;
    }
  [role="tooltip"][data-popper-placement^='right'] > [data-popper-arrow]:before
    {
        border-bottom-width: 1px;
        border-left-width: 1px;
    }
  [role="tooltip"][data-popper-placement^='right'] > [data-popper-arrow]:after
    {
        border-bottom-width: 1px;
        border-left-width: 1px;
    }
  [role="tooltip"][data-popper-placement^='bottom'] > [data-popper-arrow]:before
    {
        border-top-width: 1px;
        border-left-width: 1px;
    }
  [role="tooltip"][data-popper-placement^='bottom'] > [data-popper-arrow]:after
    {
        border-top-width: 1px;
        border-left-width: 1px;
    }
  [role="tooltip"][data-popper-placement^='left'] > [data-popper-arrow]:before
    {
        border-top-width: 1px;
        border-right-width: 1px;
    }
  [role="tooltip"][data-popper-placement^='left'] > [data-popper-arrow]:after
    {
        border-top-width: 1px;
        border-right-width: 1px;
    }
  [role="tooltip"][data-popper-placement^='top'] > [data-popper-arrow]
    {
        bottom: -5px;
    }
  [role="tooltip"][data-popper-placement^='bottom'] > [data-popper-arrow]
    {
        top: -5px;
    }
  [role="tooltip"][data-popper-placement^='left'] > [data-popper-arrow]
    {
        right: -5px;
    }
  [role="tooltip"][data-popper-placement^='right'] > [data-popper-arrow]
    {
        left: -5px;
    }
  [role="tooltip"].invisible > [data-popper-arrow]:before {
    visibility: hidden;
  }
  [role="tooltip"].invisible > [data-popper-arrow]:after {
    visibility: hidden;
  }
  
  
  
  `

  return [
    baseTooltip,
    popover,
    popoverAndTooltip,
  ].join('\n')
}
