export interface UntappdResponse {
  meta: Meta;
  notifications?: (null)[] | null;
  response: Response;
}
export interface Meta {
  code: number;
  response_time: ResponseTimeOrInitTime;
  init_time: ResponseTimeOrInitTime;
}
export interface ResponseTimeOrInitTime {
  time: number;
  measure: string;
}
export interface Response {
  beer: Beer;
}
export interface Beer {
  bid: number;
  beer_name: string;
  beer_label: string;
  beer_label_hd: string;
  beer_abv: number;
  beer_ibu: number;
  beer_description: string;
  beer_style: string;
  is_in_production: number;
  beer_slug: string;
  is_homebrew: number;
  created_at: string;
  rating_count: number;
  rating_score: number;
  stats: Stats;
  brewery: Brewery;
  auth_rating: number;
  wish_list: boolean;
  media: Media;
  checkins: Checkins;
  similar: Similar;
  friends: BadgesOrMediaOrFriendsOrVintagesOrBrewedBy;
  weighted_rating_score: number;
  beer_active: number;
  vintages: BadgesOrMediaOrFriendsOrVintagesOrBrewedBy;
  brewed_by: BadgesOrMediaOrFriendsOrVintagesOrBrewedBy;
}
export interface Stats {
  total_count: number;
  monthly_count: number;
  total_user_count: number;
  user_count: number;
}
export interface Brewery {
  brewery_id: number;
  brewery_name: string;
  brewery_slug: string;
  brewery_type: string;
  brewery_page_url: string;
  brewery_label: string;
  country_name: string;
  contact: Contact;
  location: Location;
}
export interface Contact {
  twitter: string;
  facebook: string;
  url: string;
}
export interface Location {
  brewery_city: string;
  brewery_state: string;
  lat: number;
  lng: number;
}
export interface Media {
  count: number;
  items?: (ItemsEntity)[] | null;
}
export interface ItemsEntity {
  photo_id: number;
  photo: Photo;
  created_at: string;
  checkin_id: number;
  beer: Beer1;
  brewery: Brewery1;
  user: User;
  venue?: (VenueEntity | (null)[] | null | (null)[] | null | VenueEntity)[] | null;
}
export interface Photo {
  photo_img_sm: string;
  photo_img_md: string;
  photo_img_lg: string;
  photo_img_og: string;
}
export interface Beer1 {
  bid: number;
  beer_name: string;
  beer_label: string;
  beer_abv: number;
  beer_ibu: number;
  beer_slug: string;
  beer_description: string;
  is_in_production: number;
  beer_style_id: number;
  beer_style: string;
  rating_score: number;
  rating_count: number;
  count: number;
  beer_active: number;
  on_list: boolean;
  has_had: boolean;
  auth_rating: number;
  wish_list: boolean;
}
export interface Brewery1 {
  brewery_id: number;
  brewery_name: string;
  brewery_slug: string;
  brewery_page_url: string;
  brewery_label: string;
  country_name: string;
  contact: Contact;
  location: Location;
  brewery_active: number;
}
export interface User {
  uid: number;
  user_name: string;
  first_name: string;
  last_name: string;
  user_avatar: string;
  is_private: number;
}
export interface VenueEntity {
  venue_id: number;
  venue_name: string;
  venue_slug: string;
  primary_category: string;
  parent_category_id: string;
  categories: Categories;
  location: Location1;
  contact: Contact1;
  foursquare: Foursquare;
  venue_icon: VenueIconOrBadgeImage;
  is_verified: number;
}
export interface Categories {
  count: number;
  items?: (ItemsEntity1)[] | null;
}
export interface ItemsEntity1 {
  category_key: string;
  category_name: string;
  category_id: string;
  is_primary: boolean;
}
export interface Location1 {
  venue_address: string;
  venue_city: string;
  venue_state: string;
  lat: number;
  lng: number;
}
export interface Contact1 {
  twitter: string;
  venue_url: string;
}
export interface Foursquare {
  foursquare_id: string;
  foursquare_url: string;
}
export interface VenueIconOrBadgeImage {
  sm: string;
  md: string;
  lg: string;
}
export interface Checkins {
  count: number;
  items?: (ItemsEntity2)[] | null;
  pagination: Pagination;
}
export interface ItemsEntity2 {
  checkin_id: number;
  created_at: string;
  checkin_comment: string;
  rating_score: number;
  user: User1;
  beer: Beer2;
  brewery: Brewery1;
  venue?: Venue | (null)[] | null | Venue | (null)[] | null | Venue | (null)[] | null;
  comments: Comments;
  toasts: Toasts;
  media: Media1;
  source: Source;
  badges: Badges;
}
export interface User1 {
  uid: number;
  user_name: string;
  first_name: string;
  last_name: string;
  location: string;
  url: string;
  is_supporter: number;
  bio: string;
  relationship?: null;
  user_avatar: string;
  is_private: number;
}
export interface Beer2 {
  bid: number;
  beer_name: string;
  beer_label: string;
  beer_abv: number;
  beer_ibu: number;
  beer_slug: string;
  beer_description: string;
  beer_style: string;
  has_had: boolean;
  beer_active: number;
}
export interface Venue {
  venue_id: number;
  venue_name: string;
  venue_slug: string;
  primary_category_key: string;
  primary_category: string;
  parent_category_id: string;
  categories: Categories;
  location: Location2;
  contact: Contact1;
  foursquare: Foursquare;
  venue_icon: VenueIconOrBadgeImage;
  is_verified: boolean;
}
export interface Location2 {
  venue_address: string;
  venue_city: string;
  venue_state: string;
  venue_country: string;
  lat: number;
  lng: number;
}
export interface Comments {
  total_count: number;
  count: number;
  items?: (ItemsEntity3 | null)[] | null;
}
export interface ItemsEntity3 {
  user: User2;
  checkin_id: number;
  comment_id: number;
  comment_owner: boolean;
  comment_editor: boolean;
  comment: string;
  created_at: string;
  comment_source: string;
}
export interface User2 {
  uid: number;
  user_name: string;
  first_name: string;
  last_name: string;
  bio: string;
  location: string;
  relationship: string;
  is_supporter: number;
  user_avatar: string;
  account_type: string;
  venue_details?: (null)[] | null;
  brewery_details?: (null)[] | null;
}
export interface Toasts {
  total_count: number;
  count: number;
  auth_toast?: boolean | null;
  items?: (ItemsEntity4 | null)[] | null;
}
export interface ItemsEntity4 {
  uid: number;
  user: User3;
  like_id: number;
  like_owner: boolean;
  created_at: string;
}
export interface User3 {
  uid: number;
  user_name: string;
  first_name: string;
  last_name: string;
  bio: string;
  location: string;
  relationship: string;
  user_avatar: string;
  account_type: string;
  venue_details?: (null)[] | null;
  brewery_details?: (null)[] | null;
}
export interface Media1 {
  count: number;
  items?: (ItemsEntity5 | null)[] | null;
}
export interface ItemsEntity5 {
  photo_id: number;
  photo: Photo;
}
export interface Source {
  app_name: string;
  app_website: string;
}
export interface Badges {
  count: number;
  items?: (ItemsEntity6 | null)[] | null;
  retro_status?: boolean | null;
}
export interface ItemsEntity6 {
  badge_id: number;
  user_badge_id: number;
  badge_name: string;
  badge_description: string;
  created_at: string;
  badge_image: VenueIconOrBadgeImage;
}
export interface Pagination {
  since_url: string;
  next_url: string;
  max_id: number;
}
export interface Similar {
  method: string;
  count: number;
  items?: (ItemsEntity7)[] | null;
}
export interface ItemsEntity7 {
  rating_score: number;
  beer: Beer3;
  brewery: Brewery2;
  friends: BadgesOrMediaOrFriendsOrVintagesOrBrewedBy;
}
export interface Beer3 {
  bid: number;
  beer_name: string;
  beer_abv: number;
  beer_ibu: number;
  beer_slug: string;
  beer_style: string;
  beer_label: string;
  has_had: boolean;
}
export interface Brewery2 {
  brewery_id: number;
  brewery_name: string;
  brewery_slug: string;
  brewery_page_url: string;
  brewery_type: string;
  brewery_label: string;
  country_name: string;
  contact: Contact2;
  location: Location;
  brewery_active: number;
}
export interface Contact2 {
  twitter: string;
  facebook: string;
  instagram: string;
  url: string;
}
export interface BadgesOrMediaOrFriendsOrVintagesOrBrewedBy {
  count: number;
  items?: (null)[] | null;
}
