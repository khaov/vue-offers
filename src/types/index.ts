export interface OfferItem {
  id: number
  title: string
  logo_white_src: string
  min_amount: number
  max_amount: number
  currency: string
  percent: {
    rate: string
    type: 'day' | 'week' | 'month' | 'year'
  }
  time_to_get: string
}

export interface UiButton {
  color?: 'default' | 'primary' | 'secondary' | 'warning' | 'error' | 'success'
  size?: 'default' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  href?: string
}
