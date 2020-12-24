// Stores the currently-being-typechecked object for error messages.
let obj: any = null;
export class UntappdResponseProxy {
  public readonly meta: MetaProxy;
  public readonly notifications: null[] | null;
  public readonly response: ResponseProxy;
  public static Parse(d: string): UntappdResponseProxy {
    return UntappdResponseProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): UntappdResponseProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.meta = MetaProxy.Create(d.meta, field + ".meta");
    checkArray(d.notifications, field + ".notifications");
    if (d.notifications) {
      for (let i = 0; i < d.notifications.length; i++) {
        checkNull(d.notifications[i], field + ".notifications" + "[" + i + "]");
        if (d.notifications[i] === undefined) {
          d.notifications[i] = null;
        }
      }
    }
    if (d.notifications === undefined) {
      d.notifications = null;
    }
    d.response = ResponseProxy.Create(d.response, field + ".response");
    return new UntappdResponseProxy(d);
  }
  private constructor(d: any) {
    this.meta = d.meta;
    this.notifications = d.notifications;
    this.response = d.response;
  }
}

export class MetaProxy {
  public readonly code: number;
  public readonly response_time: ResponseTimeOrInitTimeProxy;
  public readonly init_time: ResponseTimeOrInitTimeProxy;
  public static Parse(d: string): MetaProxy {
    return MetaProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): MetaProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.code, false, field + ".code");
    d.response_time = ResponseTimeOrInitTimeProxy.Create(d.response_time, field + ".response_time");
    d.init_time = ResponseTimeOrInitTimeProxy.Create(d.init_time, field + ".init_time");
    return new MetaProxy(d);
  }
  private constructor(d: any) {
    this.code = d.code;
    this.response_time = d.response_time;
    this.init_time = d.init_time;
  }
}

export class ResponseTimeOrInitTimeProxy {
  public readonly time: number;
  public readonly measure: string;
  public static Parse(d: string): ResponseTimeOrInitTimeProxy {
    return ResponseTimeOrInitTimeProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ResponseTimeOrInitTimeProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.time, false, field + ".time");
    checkString(d.measure, false, field + ".measure");
    return new ResponseTimeOrInitTimeProxy(d);
  }
  private constructor(d: any) {
    this.time = d.time;
    this.measure = d.measure;
  }
}

export class ResponseProxy {
  public readonly beer: BeerProxy;
  public static Parse(d: string): ResponseProxy {
    return ResponseProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ResponseProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    d.beer = BeerProxy.Create(d.beer, field + ".beer");
    return new ResponseProxy(d);
  }
  private constructor(d: any) {
    this.beer = d.beer;
  }
}

export class BeerProxy {
  public readonly bid: number;
  public readonly beer_name: string;
  public readonly beer_label: string;
  public readonly beer_label_hd: string;
  public readonly beer_abv: number;
  public readonly beer_ibu: number;
  public readonly beer_description: string;
  public readonly beer_style: string;
  public readonly is_in_production: number;
  public readonly beer_slug: string;
  public readonly is_homebrew: number;
  public readonly created_at: string;
  public readonly rating_count: number;
  public readonly rating_score: number;
  public readonly stats: StatsProxy;
  public readonly brewery: BreweryProxy;
  public readonly auth_rating: number;
  public readonly wish_list: boolean;
  public readonly media: MediaProxy;
  public readonly checkins: CheckinsProxy;
  public readonly similar: SimilarProxy;
  public readonly friends: BadgesOrMediaOrFriendsOrVintagesOrBrewedByProxy;
  public readonly weighted_rating_score: number;
  public readonly beer_active: number;
  public readonly vintages: BadgesOrMediaOrFriendsOrVintagesOrBrewedByProxy;
  public readonly brewed_by: BadgesOrMediaOrFriendsOrVintagesOrBrewedByProxy;
  public static Parse(d: string): BeerProxy {
    return BeerProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): BeerProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.bid, false, field + ".bid");
    checkString(d.beer_name, false, field + ".beer_name");
    checkString(d.beer_label, false, field + ".beer_label");
    checkString(d.beer_label_hd, false, field + ".beer_label_hd");
    checkNumber(d.beer_abv, false, field + ".beer_abv");
    checkNumber(d.beer_ibu, false, field + ".beer_ibu");
    checkString(d.beer_description, false, field + ".beer_description");
    checkString(d.beer_style, false, field + ".beer_style");
    checkNumber(d.is_in_production, false, field + ".is_in_production");
    checkString(d.beer_slug, false, field + ".beer_slug");
    checkNumber(d.is_homebrew, false, field + ".is_homebrew");
    checkString(d.created_at, false, field + ".created_at");
    checkNumber(d.rating_count, false, field + ".rating_count");
    checkNumber(d.rating_score, false, field + ".rating_score");
    d.stats = StatsProxy.Create(d.stats, field + ".stats");
    d.brewery = BreweryProxy.Create(d.brewery, field + ".brewery");
    checkNumber(d.auth_rating, false, field + ".auth_rating");
    checkBoolean(d.wish_list, false, field + ".wish_list");
    d.media = MediaProxy.Create(d.media, field + ".media");
    d.checkins = CheckinsProxy.Create(d.checkins, field + ".checkins");
    d.similar = SimilarProxy.Create(d.similar, field + ".similar");
    d.friends = BadgesOrMediaOrFriendsOrVintagesOrBrewedByProxy.Create(d.friends, field + ".friends");
    checkNumber(d.weighted_rating_score, false, field + ".weighted_rating_score");
    checkNumber(d.beer_active, false, field + ".beer_active");
    d.vintages = BadgesOrMediaOrFriendsOrVintagesOrBrewedByProxy.Create(d.vintages, field + ".vintages");
    d.brewed_by = BadgesOrMediaOrFriendsOrVintagesOrBrewedByProxy.Create(d.brewed_by, field + ".brewed_by");
    return new BeerProxy(d);
  }
  private constructor(d: any) {
    this.bid = d.bid;
    this.beer_name = d.beer_name;
    this.beer_label = d.beer_label;
    this.beer_label_hd = d.beer_label_hd;
    this.beer_abv = d.beer_abv;
    this.beer_ibu = d.beer_ibu;
    this.beer_description = d.beer_description;
    this.beer_style = d.beer_style;
    this.is_in_production = d.is_in_production;
    this.beer_slug = d.beer_slug;
    this.is_homebrew = d.is_homebrew;
    this.created_at = d.created_at;
    this.rating_count = d.rating_count;
    this.rating_score = d.rating_score;
    this.stats = d.stats;
    this.brewery = d.brewery;
    this.auth_rating = d.auth_rating;
    this.wish_list = d.wish_list;
    this.media = d.media;
    this.checkins = d.checkins;
    this.similar = d.similar;
    this.friends = d.friends;
    this.weighted_rating_score = d.weighted_rating_score;
    this.beer_active = d.beer_active;
    this.vintages = d.vintages;
    this.brewed_by = d.brewed_by;
  }
}

export class StatsProxy {
  public readonly total_count: number;
  public readonly monthly_count: number;
  public readonly total_user_count: number;
  public readonly user_count: number;
  public static Parse(d: string): StatsProxy {
    return StatsProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): StatsProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.total_count, false, field + ".total_count");
    checkNumber(d.monthly_count, false, field + ".monthly_count");
    checkNumber(d.total_user_count, false, field + ".total_user_count");
    checkNumber(d.user_count, false, field + ".user_count");
    return new StatsProxy(d);
  }
  private constructor(d: any) {
    this.total_count = d.total_count;
    this.monthly_count = d.monthly_count;
    this.total_user_count = d.total_user_count;
    this.user_count = d.user_count;
  }
}

export class BreweryProxy {
  public readonly brewery_id: number;
  public readonly brewery_name: string;
  public readonly brewery_slug: string;
  public readonly brewery_type: string;
  public readonly brewery_page_url: string;
  public readonly brewery_label: string;
  public readonly country_name: string;
  public readonly contact: ContactProxy;
  public readonly location: LocationProxy;
  public static Parse(d: string): BreweryProxy {
    return BreweryProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): BreweryProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.brewery_id, false, field + ".brewery_id");
    checkString(d.brewery_name, false, field + ".brewery_name");
    checkString(d.brewery_slug, false, field + ".brewery_slug");
    checkString(d.brewery_type, false, field + ".brewery_type");
    checkString(d.brewery_page_url, false, field + ".brewery_page_url");
    checkString(d.brewery_label, false, field + ".brewery_label");
    checkString(d.country_name, false, field + ".country_name");
    d.contact = ContactProxy.Create(d.contact, field + ".contact");
    d.location = LocationProxy.Create(d.location, field + ".location");
    return new BreweryProxy(d);
  }
  private constructor(d: any) {
    this.brewery_id = d.brewery_id;
    this.brewery_name = d.brewery_name;
    this.brewery_slug = d.brewery_slug;
    this.brewery_type = d.brewery_type;
    this.brewery_page_url = d.brewery_page_url;
    this.brewery_label = d.brewery_label;
    this.country_name = d.country_name;
    this.contact = d.contact;
    this.location = d.location;
  }
}

export class ContactProxy {
  public readonly twitter: string;
  public readonly facebook: string;
  public readonly url: string;
  public static Parse(d: string): ContactProxy {
    return ContactProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ContactProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.twitter, false, field + ".twitter");
    checkString(d.facebook, false, field + ".facebook");
    checkString(d.url, false, field + ".url");
    return new ContactProxy(d);
  }
  private constructor(d: any) {
    this.twitter = d.twitter;
    this.facebook = d.facebook;
    this.url = d.url;
  }
}

export class LocationProxy {
  public readonly brewery_city: string;
  public readonly brewery_state: string;
  public readonly lat: number;
  public readonly lng: number;
  public static Parse(d: string): LocationProxy {
    return LocationProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): LocationProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.brewery_city, false, field + ".brewery_city");
    checkString(d.brewery_state, false, field + ".brewery_state");
    checkNumber(d.lat, false, field + ".lat");
    checkNumber(d.lng, false, field + ".lng");
    return new LocationProxy(d);
  }
  private constructor(d: any) {
    this.brewery_city = d.brewery_city;
    this.brewery_state = d.brewery_state;
    this.lat = d.lat;
    this.lng = d.lng;
  }
}

export class MediaProxy {
  public readonly count: number;
  public readonly items: ItemsEntityProxy[] | null;
  public static Parse(d: string): MediaProxy {
    return MediaProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): MediaProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.count, false, field + ".count");
    checkArray(d.items, field + ".items");
    if (d.items) {
      for (let i = 0; i < d.items.length; i++) {
        d.items[i] = ItemsEntityProxy.Create(d.items[i], field + ".items" + "[" + i + "]");
      }
    }
    if (d.items === undefined) {
      d.items = null;
    }
    return new MediaProxy(d);
  }
  private constructor(d: any) {
    this.count = d.count;
    this.items = d.items;
  }
}

export class ItemsEntityProxy {
  public readonly photo_id: number;
  public readonly photo: PhotoProxy;
  public readonly created_at: string;
  public readonly checkin_id: number;
  public readonly beer: Beer1Proxy;
  public readonly brewery: Brewery1Proxy;
  public readonly user: UserProxy;
  public readonly venue: (VenueEntityProxy | null[] | null | null[] | null | VenueEntityProxy)[] | null;
  public static Parse(d: string): ItemsEntityProxy {
    return ItemsEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ItemsEntityProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.photo_id, false, field + ".photo_id");
    d.photo = PhotoProxy.Create(d.photo, field + ".photo");
    checkString(d.created_at, false, field + ".created_at");
    checkNumber(d.checkin_id, false, field + ".checkin_id");
    d.beer = Beer1Proxy.Create(d.beer, field + ".beer");
    d.brewery = Brewery1Proxy.Create(d.brewery, field + ".brewery");
    d.user = UserProxy.Create(d.user, field + ".user");
    checkArray(d.venue, field + ".venue");
    if (d.venue) {
      for (let i = 0; i < d.venue.length; i++) {
        // This will be refactored in the next release.
        try {
          d.venue[i] = VenueEntityProxy.Create(d.venue[i], field + ".venue" + "[" + i + "]");
        } catch (e) {
          try {
            checkArray(d.venue[i], field + ".venue" + "[" + i + "]");
            if (d.venue[i]) {
              for (let i = 0; i < d.venue[i].length; i++) {
                checkNull(d.venue[i][i], field + ".venue" + "[" + i + "]" + "[" + i + "]");
                if (d.venue[i][i] === undefined) {
                  d.venue[i][i] = null;
                }
              }
            }
            if (d.venue[i] === undefined) {
              d.venue[i] = null;
            }
          } catch (e) {
            try {
              // This will be refactored in the next release.
              try {
                checkArray(d.venue[i], field + ".venue" + "[" + i + "]");
                if (d.venue[i]) {
                  for (let i = 0; i < d.venue[i].length; i++) {
                    checkNull(d.venue[i][i], field + ".venue" + "[" + i + "]" + "[" + i + "]");
                    if (d.venue[i][i] === undefined) {
                      d.venue[i][i] = null;
                    }
                  }
                }
                if (d.venue[i] === undefined) {
                  d.venue[i] = null;
                }
              } catch (e) {
                try {
                  d.venue[i] = VenueEntityProxy.Create(d.venue[i], field + ".venue" + "[" + i + "]");
                } catch (e) {
                  throw e;
                }
              }
              if (d.venue[i] === undefined) {
                d.venue[i] = null;
              }
            } catch (e) {
              throw e;
            }
          }
        }
        if (d.venue[i] === undefined) {
          d.venue[i] = null;
        }
      }
    }
    if (d.venue === undefined) {
      d.venue = null;
    }
    return new ItemsEntityProxy(d);
  }
  private constructor(d: any) {
    this.photo_id = d.photo_id;
    this.photo = d.photo;
    this.created_at = d.created_at;
    this.checkin_id = d.checkin_id;
    this.beer = d.beer;
    this.brewery = d.brewery;
    this.user = d.user;
    this.venue = d.venue;
  }
}

export class PhotoProxy {
  public readonly photo_img_sm: string;
  public readonly photo_img_md: string;
  public readonly photo_img_lg: string;
  public readonly photo_img_og: string;
  public static Parse(d: string): PhotoProxy {
    return PhotoProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): PhotoProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.photo_img_sm, false, field + ".photo_img_sm");
    checkString(d.photo_img_md, false, field + ".photo_img_md");
    checkString(d.photo_img_lg, false, field + ".photo_img_lg");
    checkString(d.photo_img_og, false, field + ".photo_img_og");
    return new PhotoProxy(d);
  }
  private constructor(d: any) {
    this.photo_img_sm = d.photo_img_sm;
    this.photo_img_md = d.photo_img_md;
    this.photo_img_lg = d.photo_img_lg;
    this.photo_img_og = d.photo_img_og;
  }
}

export class Beer1Proxy {
  public readonly bid: number;
  public readonly beer_name: string;
  public readonly beer_label: string;
  public readonly beer_abv: number;
  public readonly beer_ibu: number;
  public readonly beer_slug: string;
  public readonly beer_description: string;
  public readonly is_in_production: number;
  public readonly beer_style_id: number;
  public readonly beer_style: string;
  public readonly rating_score: number;
  public readonly rating_count: number;
  public readonly count: number;
  public readonly beer_active: number;
  public readonly on_list: boolean;
  public readonly has_had: boolean;
  public readonly auth_rating: number;
  public readonly wish_list: boolean;
  public static Parse(d: string): Beer1Proxy {
    return Beer1Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): Beer1Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.bid, false, field + ".bid");
    checkString(d.beer_name, false, field + ".beer_name");
    checkString(d.beer_label, false, field + ".beer_label");
    checkNumber(d.beer_abv, false, field + ".beer_abv");
    checkNumber(d.beer_ibu, false, field + ".beer_ibu");
    checkString(d.beer_slug, false, field + ".beer_slug");
    checkString(d.beer_description, false, field + ".beer_description");
    checkNumber(d.is_in_production, false, field + ".is_in_production");
    checkNumber(d.beer_style_id, false, field + ".beer_style_id");
    checkString(d.beer_style, false, field + ".beer_style");
    checkNumber(d.rating_score, false, field + ".rating_score");
    checkNumber(d.rating_count, false, field + ".rating_count");
    checkNumber(d.count, false, field + ".count");
    checkNumber(d.beer_active, false, field + ".beer_active");
    checkBoolean(d.on_list, false, field + ".on_list");
    checkBoolean(d.has_had, false, field + ".has_had");
    checkNumber(d.auth_rating, false, field + ".auth_rating");
    checkBoolean(d.wish_list, false, field + ".wish_list");
    return new Beer1Proxy(d);
  }
  private constructor(d: any) {
    this.bid = d.bid;
    this.beer_name = d.beer_name;
    this.beer_label = d.beer_label;
    this.beer_abv = d.beer_abv;
    this.beer_ibu = d.beer_ibu;
    this.beer_slug = d.beer_slug;
    this.beer_description = d.beer_description;
    this.is_in_production = d.is_in_production;
    this.beer_style_id = d.beer_style_id;
    this.beer_style = d.beer_style;
    this.rating_score = d.rating_score;
    this.rating_count = d.rating_count;
    this.count = d.count;
    this.beer_active = d.beer_active;
    this.on_list = d.on_list;
    this.has_had = d.has_had;
    this.auth_rating = d.auth_rating;
    this.wish_list = d.wish_list;
  }
}

export class Brewery1Proxy {
  public readonly brewery_id: number;
  public readonly brewery_name: string;
  public readonly brewery_slug: string;
  public readonly brewery_page_url: string;
  public readonly brewery_label: string;
  public readonly country_name: string;
  public readonly contact: ContactProxy;
  public readonly location: LocationProxy;
  public readonly brewery_active: number;
  public static Parse(d: string): Brewery1Proxy {
    return Brewery1Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): Brewery1Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.brewery_id, false, field + ".brewery_id");
    checkString(d.brewery_name, false, field + ".brewery_name");
    checkString(d.brewery_slug, false, field + ".brewery_slug");
    checkString(d.brewery_page_url, false, field + ".brewery_page_url");
    checkString(d.brewery_label, false, field + ".brewery_label");
    checkString(d.country_name, false, field + ".country_name");
    d.contact = ContactProxy.Create(d.contact, field + ".contact");
    d.location = LocationProxy.Create(d.location, field + ".location");
    checkNumber(d.brewery_active, false, field + ".brewery_active");
    return new Brewery1Proxy(d);
  }
  private constructor(d: any) {
    this.brewery_id = d.brewery_id;
    this.brewery_name = d.brewery_name;
    this.brewery_slug = d.brewery_slug;
    this.brewery_page_url = d.brewery_page_url;
    this.brewery_label = d.brewery_label;
    this.country_name = d.country_name;
    this.contact = d.contact;
    this.location = d.location;
    this.brewery_active = d.brewery_active;
  }
}

export class UserProxy {
  public readonly uid: number;
  public readonly user_name: string;
  public readonly first_name: string;
  public readonly last_name: string;
  public readonly user_avatar: string;
  public readonly is_private: number;
  public static Parse(d: string): UserProxy {
    return UserProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): UserProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.uid, false, field + ".uid");
    checkString(d.user_name, false, field + ".user_name");
    checkString(d.first_name, false, field + ".first_name");
    checkString(d.last_name, false, field + ".last_name");
    checkString(d.user_avatar, false, field + ".user_avatar");
    checkNumber(d.is_private, false, field + ".is_private");
    return new UserProxy(d);
  }
  private constructor(d: any) {
    this.uid = d.uid;
    this.user_name = d.user_name;
    this.first_name = d.first_name;
    this.last_name = d.last_name;
    this.user_avatar = d.user_avatar;
    this.is_private = d.is_private;
  }
}

export class VenueEntityProxy {
  public readonly venue_id: number;
  public readonly venue_name: string;
  public readonly venue_slug: string;
  public readonly primary_category: string;
  public readonly parent_category_id: string;
  public readonly categories: CategoriesProxy;
  public readonly location: Location1Proxy;
  public readonly contact: Contact1Proxy;
  public readonly foursquare: FoursquareProxy;
  public readonly venue_icon: VenueIconOrBadgeImageProxy;
  public readonly is_verified: number;
  public static Parse(d: string): VenueEntityProxy {
    return VenueEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): VenueEntityProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.venue_id, false, field + ".venue_id");
    checkString(d.venue_name, false, field + ".venue_name");
    checkString(d.venue_slug, false, field + ".venue_slug");
    checkString(d.primary_category, false, field + ".primary_category");
    checkString(d.parent_category_id, false, field + ".parent_category_id");
    d.categories = CategoriesProxy.Create(d.categories, field + ".categories");
    d.location = Location1Proxy.Create(d.location, field + ".location");
    d.contact = Contact1Proxy.Create(d.contact, field + ".contact");
    d.foursquare = FoursquareProxy.Create(d.foursquare, field + ".foursquare");
    d.venue_icon = VenueIconOrBadgeImageProxy.Create(d.venue_icon, field + ".venue_icon");
    checkNumber(d.is_verified, false, field + ".is_verified");
    return new VenueEntityProxy(d);
  }
  private constructor(d: any) {
    this.venue_id = d.venue_id;
    this.venue_name = d.venue_name;
    this.venue_slug = d.venue_slug;
    this.primary_category = d.primary_category;
    this.parent_category_id = d.parent_category_id;
    this.categories = d.categories;
    this.location = d.location;
    this.contact = d.contact;
    this.foursquare = d.foursquare;
    this.venue_icon = d.venue_icon;
    this.is_verified = d.is_verified;
  }
}

export class CategoriesProxy {
  public readonly count: number;
  public readonly items: ItemsEntity1Proxy[] | null;
  public static Parse(d: string): CategoriesProxy {
    return CategoriesProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): CategoriesProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.count, false, field + ".count");
    checkArray(d.items, field + ".items");
    if (d.items) {
      for (let i = 0; i < d.items.length; i++) {
        d.items[i] = ItemsEntity1Proxy.Create(d.items[i], field + ".items" + "[" + i + "]");
      }
    }
    if (d.items === undefined) {
      d.items = null;
    }
    return new CategoriesProxy(d);
  }
  private constructor(d: any) {
    this.count = d.count;
    this.items = d.items;
  }
}

export class ItemsEntity1Proxy {
  public readonly category_key: string;
  public readonly category_name: string;
  public readonly category_id: string;
  public readonly is_primary: boolean;
  public static Parse(d: string): ItemsEntity1Proxy {
    return ItemsEntity1Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ItemsEntity1Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.category_key, false, field + ".category_key");
    checkString(d.category_name, false, field + ".category_name");
    checkString(d.category_id, false, field + ".category_id");
    checkBoolean(d.is_primary, false, field + ".is_primary");
    return new ItemsEntity1Proxy(d);
  }
  private constructor(d: any) {
    this.category_key = d.category_key;
    this.category_name = d.category_name;
    this.category_id = d.category_id;
    this.is_primary = d.is_primary;
  }
}

export class Location1Proxy {
  public readonly venue_address: string;
  public readonly venue_city: string;
  public readonly venue_state: string;
  public readonly lat: number;
  public readonly lng: number;
  public static Parse(d: string): Location1Proxy {
    return Location1Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): Location1Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.venue_address, false, field + ".venue_address");
    checkString(d.venue_city, false, field + ".venue_city");
    checkString(d.venue_state, false, field + ".venue_state");
    checkNumber(d.lat, false, field + ".lat");
    checkNumber(d.lng, false, field + ".lng");
    return new Location1Proxy(d);
  }
  private constructor(d: any) {
    this.venue_address = d.venue_address;
    this.venue_city = d.venue_city;
    this.venue_state = d.venue_state;
    this.lat = d.lat;
    this.lng = d.lng;
  }
}

export class Contact1Proxy {
  public readonly twitter: string;
  public readonly venue_url: string;
  public static Parse(d: string): Contact1Proxy {
    return Contact1Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): Contact1Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.twitter, false, field + ".twitter");
    checkString(d.venue_url, false, field + ".venue_url");
    return new Contact1Proxy(d);
  }
  private constructor(d: any) {
    this.twitter = d.twitter;
    this.venue_url = d.venue_url;
  }
}

export class FoursquareProxy {
  public readonly foursquare_id: string;
  public readonly foursquare_url: string;
  public static Parse(d: string): FoursquareProxy {
    return FoursquareProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): FoursquareProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.foursquare_id, false, field + ".foursquare_id");
    checkString(d.foursquare_url, false, field + ".foursquare_url");
    return new FoursquareProxy(d);
  }
  private constructor(d: any) {
    this.foursquare_id = d.foursquare_id;
    this.foursquare_url = d.foursquare_url;
  }
}

export class VenueIconOrBadgeImageProxy {
  public readonly sm: string;
  public readonly md: string;
  public readonly lg: string;
  public static Parse(d: string): VenueIconOrBadgeImageProxy {
    return VenueIconOrBadgeImageProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): VenueIconOrBadgeImageProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.sm, false, field + ".sm");
    checkString(d.md, false, field + ".md");
    checkString(d.lg, false, field + ".lg");
    return new VenueIconOrBadgeImageProxy(d);
  }
  private constructor(d: any) {
    this.sm = d.sm;
    this.md = d.md;
    this.lg = d.lg;
  }
}

export class CheckinsProxy {
  public readonly count: number;
  public readonly items: ItemsEntity2Proxy[] | null;
  public readonly pagination: PaginationProxy;
  public static Parse(d: string): CheckinsProxy {
    return CheckinsProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): CheckinsProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.count, false, field + ".count");
    checkArray(d.items, field + ".items");
    if (d.items) {
      for (let i = 0; i < d.items.length; i++) {
        d.items[i] = ItemsEntity2Proxy.Create(d.items[i], field + ".items" + "[" + i + "]");
      }
    }
    if (d.items === undefined) {
      d.items = null;
    }
    d.pagination = PaginationProxy.Create(d.pagination, field + ".pagination");
    return new CheckinsProxy(d);
  }
  private constructor(d: any) {
    this.count = d.count;
    this.items = d.items;
    this.pagination = d.pagination;
  }
}

export class ItemsEntity2Proxy {
  public readonly checkin_id: number;
  public readonly created_at: string;
  public readonly checkin_comment: string;
  public readonly rating_score: number;
  public readonly user: User1Proxy;
  public readonly beer: Beer2Proxy;
  public readonly brewery: Brewery1Proxy;
  public readonly venue: VenueProxy | null[] | null | VenueProxy | null[] | null | VenueProxy | null[] | null;
  public readonly comments: CommentsProxy;
  public readonly toasts: ToastsProxy;
  public readonly media: Media1Proxy;
  public readonly source: SourceProxy;
  public readonly badges: BadgesProxy;
  public static Parse(d: string): ItemsEntity2Proxy {
    return ItemsEntity2Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ItemsEntity2Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.checkin_id, false, field + ".checkin_id");
    checkString(d.created_at, false, field + ".created_at");
    checkString(d.checkin_comment, false, field + ".checkin_comment");
    checkNumber(d.rating_score, false, field + ".rating_score");
    d.user = User1Proxy.Create(d.user, field + ".user");
    d.beer = Beer2Proxy.Create(d.beer, field + ".beer");
    d.brewery = Brewery1Proxy.Create(d.brewery, field + ".brewery");
    // This will be refactored in the next release.
    try {
      d.venue = VenueProxy.Create(d.venue, field + ".venue");
    } catch (e) {
      try {
        checkArray(d.venue, field + ".venue");
        if (d.venue) {
          for (let i = 0; i < d.venue.length; i++) {
            checkNull(d.venue[i], field + ".venue" + "[" + i + "]");
            if (d.venue[i] === undefined) {
              d.venue[i] = null;
            }
          }
        }
        if (d.venue === undefined) {
          d.venue = null;
        }
      } catch (e) {
        try {
          // This will be refactored in the next release.
          try {
            d.venue = VenueProxy.Create(d.venue, field + ".venue");
          } catch (e) {
            try {
              checkArray(d.venue, field + ".venue");
              if (d.venue) {
                for (let i = 0; i < d.venue.length; i++) {
                  checkNull(d.venue[i], field + ".venue" + "[" + i + "]");
                  if (d.venue[i] === undefined) {
                    d.venue[i] = null;
                  }
                }
              }
              if (d.venue === undefined) {
                d.venue = null;
              }
            } catch (e) {
              try {
                // This will be refactored in the next release.
                try {
                  d.venue = VenueProxy.Create(d.venue, field + ".venue");
                } catch (e) {
                  try {
                    checkArray(d.venue, field + ".venue");
                    if (d.venue) {
                      for (let i = 0; i < d.venue.length; i++) {
                        checkNull(d.venue[i], field + ".venue" + "[" + i + "]");
                        if (d.venue[i] === undefined) {
                          d.venue[i] = null;
                        }
                      }
                    }
                    if (d.venue === undefined) {
                      d.venue = null;
                    }
                  } catch (e) {
                    throw e;
                  }
                }
                if (d.venue === undefined) {
                  d.venue = null;
                }
              } catch (e) {
                throw e;
              }
            }
          }
          if (d.venue === undefined) {
            d.venue = null;
          }
        } catch (e) {
          throw e;
        }
      }
    }
    if (d.venue === undefined) {
      d.venue = null;
    }
    d.comments = CommentsProxy.Create(d.comments, field + ".comments");
    d.toasts = ToastsProxy.Create(d.toasts, field + ".toasts");
    d.media = Media1Proxy.Create(d.media, field + ".media");
    d.source = SourceProxy.Create(d.source, field + ".source");
    d.badges = BadgesProxy.Create(d.badges, field + ".badges");
    return new ItemsEntity2Proxy(d);
  }
  private constructor(d: any) {
    this.checkin_id = d.checkin_id;
    this.created_at = d.created_at;
    this.checkin_comment = d.checkin_comment;
    this.rating_score = d.rating_score;
    this.user = d.user;
    this.beer = d.beer;
    this.brewery = d.brewery;
    this.venue = d.venue;
    this.comments = d.comments;
    this.toasts = d.toasts;
    this.media = d.media;
    this.source = d.source;
    this.badges = d.badges;
  }
}

export class User1Proxy {
  public readonly uid: number;
  public readonly user_name: string;
  public readonly first_name: string;
  public readonly last_name: string;
  public readonly location: string;
  public readonly url: string;
  public readonly is_supporter: number;
  public readonly bio: string;
  public readonly relationship: null;
  public readonly user_avatar: string;
  public readonly is_private: number;
  public static Parse(d: string): User1Proxy {
    return User1Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): User1Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.uid, false, field + ".uid");
    checkString(d.user_name, false, field + ".user_name");
    checkString(d.first_name, false, field + ".first_name");
    checkString(d.last_name, false, field + ".last_name");
    checkString(d.location, false, field + ".location");
    checkString(d.url, false, field + ".url");
    checkNumber(d.is_supporter, false, field + ".is_supporter");
    checkString(d.bio, false, field + ".bio");
    checkNull(d.relationship, field + ".relationship");
    if (d.relationship === undefined) {
      d.relationship = null;
    }
    checkString(d.user_avatar, false, field + ".user_avatar");
    checkNumber(d.is_private, false, field + ".is_private");
    return new User1Proxy(d);
  }
  private constructor(d: any) {
    this.uid = d.uid;
    this.user_name = d.user_name;
    this.first_name = d.first_name;
    this.last_name = d.last_name;
    this.location = d.location;
    this.url = d.url;
    this.is_supporter = d.is_supporter;
    this.bio = d.bio;
    this.relationship = d.relationship;
    this.user_avatar = d.user_avatar;
    this.is_private = d.is_private;
  }
}

export class Beer2Proxy {
  public readonly bid: number;
  public readonly beer_name: string;
  public readonly beer_label: string;
  public readonly beer_abv: number;
  public readonly beer_ibu: number;
  public readonly beer_slug: string;
  public readonly beer_description: string;
  public readonly beer_style: string;
  public readonly has_had: boolean;
  public readonly beer_active: number;
  public static Parse(d: string): Beer2Proxy {
    return Beer2Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): Beer2Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.bid, false, field + ".bid");
    checkString(d.beer_name, false, field + ".beer_name");
    checkString(d.beer_label, false, field + ".beer_label");
    checkNumber(d.beer_abv, false, field + ".beer_abv");
    checkNumber(d.beer_ibu, false, field + ".beer_ibu");
    checkString(d.beer_slug, false, field + ".beer_slug");
    checkString(d.beer_description, false, field + ".beer_description");
    checkString(d.beer_style, false, field + ".beer_style");
    checkBoolean(d.has_had, false, field + ".has_had");
    checkNumber(d.beer_active, false, field + ".beer_active");
    return new Beer2Proxy(d);
  }
  private constructor(d: any) {
    this.bid = d.bid;
    this.beer_name = d.beer_name;
    this.beer_label = d.beer_label;
    this.beer_abv = d.beer_abv;
    this.beer_ibu = d.beer_ibu;
    this.beer_slug = d.beer_slug;
    this.beer_description = d.beer_description;
    this.beer_style = d.beer_style;
    this.has_had = d.has_had;
    this.beer_active = d.beer_active;
  }
}

export class VenueProxy {
  public readonly venue_id: number;
  public readonly venue_name: string;
  public readonly venue_slug: string;
  public readonly primary_category_key: string;
  public readonly primary_category: string;
  public readonly parent_category_id: string;
  public readonly categories: CategoriesProxy;
  public readonly location: Location2Proxy;
  public readonly contact: Contact1Proxy;
  public readonly foursquare: FoursquareProxy;
  public readonly venue_icon: VenueIconOrBadgeImageProxy;
  public readonly is_verified: boolean;
  public static Parse(d: string): VenueProxy {
    return VenueProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): VenueProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.venue_id, false, field + ".venue_id");
    checkString(d.venue_name, false, field + ".venue_name");
    checkString(d.venue_slug, false, field + ".venue_slug");
    checkString(d.primary_category_key, false, field + ".primary_category_key");
    checkString(d.primary_category, false, field + ".primary_category");
    checkString(d.parent_category_id, false, field + ".parent_category_id");
    d.categories = CategoriesProxy.Create(d.categories, field + ".categories");
    d.location = Location2Proxy.Create(d.location, field + ".location");
    d.contact = Contact1Proxy.Create(d.contact, field + ".contact");
    d.foursquare = FoursquareProxy.Create(d.foursquare, field + ".foursquare");
    d.venue_icon = VenueIconOrBadgeImageProxy.Create(d.venue_icon, field + ".venue_icon");
    checkBoolean(d.is_verified, false, field + ".is_verified");
    return new VenueProxy(d);
  }
  private constructor(d: any) {
    this.venue_id = d.venue_id;
    this.venue_name = d.venue_name;
    this.venue_slug = d.venue_slug;
    this.primary_category_key = d.primary_category_key;
    this.primary_category = d.primary_category;
    this.parent_category_id = d.parent_category_id;
    this.categories = d.categories;
    this.location = d.location;
    this.contact = d.contact;
    this.foursquare = d.foursquare;
    this.venue_icon = d.venue_icon;
    this.is_verified = d.is_verified;
  }
}

export class Location2Proxy {
  public readonly venue_address: string;
  public readonly venue_city: string;
  public readonly venue_state: string;
  public readonly venue_country: string;
  public readonly lat: number;
  public readonly lng: number;
  public static Parse(d: string): Location2Proxy {
    return Location2Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): Location2Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.venue_address, false, field + ".venue_address");
    checkString(d.venue_city, false, field + ".venue_city");
    checkString(d.venue_state, false, field + ".venue_state");
    checkString(d.venue_country, false, field + ".venue_country");
    checkNumber(d.lat, false, field + ".lat");
    checkNumber(d.lng, false, field + ".lng");
    return new Location2Proxy(d);
  }
  private constructor(d: any) {
    this.venue_address = d.venue_address;
    this.venue_city = d.venue_city;
    this.venue_state = d.venue_state;
    this.venue_country = d.venue_country;
    this.lat = d.lat;
    this.lng = d.lng;
  }
}

export class CommentsProxy {
  public readonly total_count: number;
  public readonly count: number;
  public readonly items: (ItemsEntity3Proxy | null)[] | null;
  public static Parse(d: string): CommentsProxy {
    return CommentsProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): CommentsProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.total_count, false, field + ".total_count");
    checkNumber(d.count, false, field + ".count");
    checkArray(d.items, field + ".items");
    if (d.items) {
      for (let i = 0; i < d.items.length; i++) {
        d.items[i] = ItemsEntity3Proxy.Create(d.items[i], field + ".items" + "[" + i + "]");
        if (d.items[i] === undefined) {
          d.items[i] = null;
        }
      }
    }
    if (d.items === undefined) {
      d.items = null;
    }
    return new CommentsProxy(d);
  }
  private constructor(d: any) {
    this.total_count = d.total_count;
    this.count = d.count;
    this.items = d.items;
  }
}

export class ItemsEntity3Proxy {
  public readonly user: User2Proxy;
  public readonly checkin_id: number;
  public readonly comment_id: number;
  public readonly comment_owner: boolean;
  public readonly comment_editor: boolean;
  public readonly comment: string;
  public readonly created_at: string;
  public readonly comment_source: string;
  public static Parse(d: string): ItemsEntity3Proxy | null {
    return ItemsEntity3Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ItemsEntity3Proxy | null {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      return null;
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, true);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, true);
    }
    d.user = User2Proxy.Create(d.user, field + ".user");
    checkNumber(d.checkin_id, false, field + ".checkin_id");
    checkNumber(d.comment_id, false, field + ".comment_id");
    checkBoolean(d.comment_owner, false, field + ".comment_owner");
    checkBoolean(d.comment_editor, false, field + ".comment_editor");
    checkString(d.comment, false, field + ".comment");
    checkString(d.created_at, false, field + ".created_at");
    checkString(d.comment_source, false, field + ".comment_source");
    return new ItemsEntity3Proxy(d);
  }
  private constructor(d: any) {
    this.user = d.user;
    this.checkin_id = d.checkin_id;
    this.comment_id = d.comment_id;
    this.comment_owner = d.comment_owner;
    this.comment_editor = d.comment_editor;
    this.comment = d.comment;
    this.created_at = d.created_at;
    this.comment_source = d.comment_source;
  }
}

export class User2Proxy {
  public readonly uid: number;
  public readonly user_name: string;
  public readonly first_name: string;
  public readonly last_name: string;
  public readonly bio: string;
  public readonly location: string;
  public readonly relationship: string;
  public readonly is_supporter: number;
  public readonly user_avatar: string;
  public readonly account_type: string;
  public readonly venue_details: null[] | null;
  public readonly brewery_details: null[] | null;
  public static Parse(d: string): User2Proxy {
    return User2Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): User2Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.uid, false, field + ".uid");
    checkString(d.user_name, false, field + ".user_name");
    checkString(d.first_name, false, field + ".first_name");
    checkString(d.last_name, false, field + ".last_name");
    checkString(d.bio, false, field + ".bio");
    checkString(d.location, false, field + ".location");
    checkString(d.relationship, false, field + ".relationship");
    checkNumber(d.is_supporter, false, field + ".is_supporter");
    checkString(d.user_avatar, false, field + ".user_avatar");
    checkString(d.account_type, false, field + ".account_type");
    checkArray(d.venue_details, field + ".venue_details");
    if (d.venue_details) {
      for (let i = 0; i < d.venue_details.length; i++) {
        checkNull(d.venue_details[i], field + ".venue_details" + "[" + i + "]");
        if (d.venue_details[i] === undefined) {
          d.venue_details[i] = null;
        }
      }
    }
    if (d.venue_details === undefined) {
      d.venue_details = null;
    }
    checkArray(d.brewery_details, field + ".brewery_details");
    if (d.brewery_details) {
      for (let i = 0; i < d.brewery_details.length; i++) {
        checkNull(d.brewery_details[i], field + ".brewery_details" + "[" + i + "]");
        if (d.brewery_details[i] === undefined) {
          d.brewery_details[i] = null;
        }
      }
    }
    if (d.brewery_details === undefined) {
      d.brewery_details = null;
    }
    return new User2Proxy(d);
  }
  private constructor(d: any) {
    this.uid = d.uid;
    this.user_name = d.user_name;
    this.first_name = d.first_name;
    this.last_name = d.last_name;
    this.bio = d.bio;
    this.location = d.location;
    this.relationship = d.relationship;
    this.is_supporter = d.is_supporter;
    this.user_avatar = d.user_avatar;
    this.account_type = d.account_type;
    this.venue_details = d.venue_details;
    this.brewery_details = d.brewery_details;
  }
}

export class ToastsProxy {
  public readonly total_count: number;
  public readonly count: number;
  public readonly auth_toast: boolean | null;
  public readonly items: (ItemsEntity4Proxy | null)[] | null;
  public static Parse(d: string): ToastsProxy {
    return ToastsProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ToastsProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.total_count, false, field + ".total_count");
    checkNumber(d.count, false, field + ".count");
    checkBoolean(d.auth_toast, true, field + ".auth_toast");
    if (d.auth_toast === undefined) {
      d.auth_toast = null;
    }
    checkArray(d.items, field + ".items");
    if (d.items) {
      for (let i = 0; i < d.items.length; i++) {
        d.items[i] = ItemsEntity4Proxy.Create(d.items[i], field + ".items" + "[" + i + "]");
        if (d.items[i] === undefined) {
          d.items[i] = null;
        }
      }
    }
    if (d.items === undefined) {
      d.items = null;
    }
    return new ToastsProxy(d);
  }
  private constructor(d: any) {
    this.total_count = d.total_count;
    this.count = d.count;
    this.auth_toast = d.auth_toast;
    this.items = d.items;
  }
}

export class ItemsEntity4Proxy {
  public readonly uid: number;
  public readonly user: User3Proxy;
  public readonly like_id: number;
  public readonly like_owner: boolean;
  public readonly created_at: string;
  public static Parse(d: string): ItemsEntity4Proxy | null {
    return ItemsEntity4Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ItemsEntity4Proxy | null {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      return null;
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, true);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, true);
    }
    checkNumber(d.uid, false, field + ".uid");
    d.user = User3Proxy.Create(d.user, field + ".user");
    checkNumber(d.like_id, false, field + ".like_id");
    checkBoolean(d.like_owner, false, field + ".like_owner");
    checkString(d.created_at, false, field + ".created_at");
    return new ItemsEntity4Proxy(d);
  }
  private constructor(d: any) {
    this.uid = d.uid;
    this.user = d.user;
    this.like_id = d.like_id;
    this.like_owner = d.like_owner;
    this.created_at = d.created_at;
  }
}

export class User3Proxy {
  public readonly uid: number;
  public readonly user_name: string;
  public readonly first_name: string;
  public readonly last_name: string;
  public readonly bio: string;
  public readonly location: string;
  public readonly relationship: string;
  public readonly user_avatar: string;
  public readonly account_type: string;
  public readonly venue_details: null[] | null;
  public readonly brewery_details: null[] | null;
  public static Parse(d: string): User3Proxy {
    return User3Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): User3Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.uid, false, field + ".uid");
    checkString(d.user_name, false, field + ".user_name");
    checkString(d.first_name, false, field + ".first_name");
    checkString(d.last_name, false, field + ".last_name");
    checkString(d.bio, false, field + ".bio");
    checkString(d.location, false, field + ".location");
    checkString(d.relationship, false, field + ".relationship");
    checkString(d.user_avatar, false, field + ".user_avatar");
    checkString(d.account_type, false, field + ".account_type");
    checkArray(d.venue_details, field + ".venue_details");
    if (d.venue_details) {
      for (let i = 0; i < d.venue_details.length; i++) {
        checkNull(d.venue_details[i], field + ".venue_details" + "[" + i + "]");
        if (d.venue_details[i] === undefined) {
          d.venue_details[i] = null;
        }
      }
    }
    if (d.venue_details === undefined) {
      d.venue_details = null;
    }
    checkArray(d.brewery_details, field + ".brewery_details");
    if (d.brewery_details) {
      for (let i = 0; i < d.brewery_details.length; i++) {
        checkNull(d.brewery_details[i], field + ".brewery_details" + "[" + i + "]");
        if (d.brewery_details[i] === undefined) {
          d.brewery_details[i] = null;
        }
      }
    }
    if (d.brewery_details === undefined) {
      d.brewery_details = null;
    }
    return new User3Proxy(d);
  }
  private constructor(d: any) {
    this.uid = d.uid;
    this.user_name = d.user_name;
    this.first_name = d.first_name;
    this.last_name = d.last_name;
    this.bio = d.bio;
    this.location = d.location;
    this.relationship = d.relationship;
    this.user_avatar = d.user_avatar;
    this.account_type = d.account_type;
    this.venue_details = d.venue_details;
    this.brewery_details = d.brewery_details;
  }
}

export class Media1Proxy {
  public readonly count: number;
  public readonly items: (ItemsEntity5Proxy | null)[] | null;
  public static Parse(d: string): Media1Proxy {
    return Media1Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): Media1Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.count, false, field + ".count");
    checkArray(d.items, field + ".items");
    if (d.items) {
      for (let i = 0; i < d.items.length; i++) {
        d.items[i] = ItemsEntity5Proxy.Create(d.items[i], field + ".items" + "[" + i + "]");
        if (d.items[i] === undefined) {
          d.items[i] = null;
        }
      }
    }
    if (d.items === undefined) {
      d.items = null;
    }
    return new Media1Proxy(d);
  }
  private constructor(d: any) {
    this.count = d.count;
    this.items = d.items;
  }
}

export class ItemsEntity5Proxy {
  public readonly photo_id: number;
  public readonly photo: PhotoProxy;
  public static Parse(d: string): ItemsEntity5Proxy | null {
    return ItemsEntity5Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ItemsEntity5Proxy | null {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      return null;
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, true);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, true);
    }
    checkNumber(d.photo_id, false, field + ".photo_id");
    d.photo = PhotoProxy.Create(d.photo, field + ".photo");
    return new ItemsEntity5Proxy(d);
  }
  private constructor(d: any) {
    this.photo_id = d.photo_id;
    this.photo = d.photo;
  }
}

export class SourceProxy {
  public readonly app_name: string;
  public readonly app_website: string;
  public static Parse(d: string): SourceProxy {
    return SourceProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): SourceProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.app_name, false, field + ".app_name");
    checkString(d.app_website, false, field + ".app_website");
    return new SourceProxy(d);
  }
  private constructor(d: any) {
    this.app_name = d.app_name;
    this.app_website = d.app_website;
  }
}

export class BadgesProxy {
  public readonly count: number;
  public readonly items: (ItemsEntity6Proxy | null)[] | null;
  public readonly retro_status: boolean | null;
  public static Parse(d: string): BadgesProxy {
    return BadgesProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): BadgesProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.count, false, field + ".count");
    checkArray(d.items, field + ".items");
    if (d.items) {
      for (let i = 0; i < d.items.length; i++) {
        d.items[i] = ItemsEntity6Proxy.Create(d.items[i], field + ".items" + "[" + i + "]");
        if (d.items[i] === undefined) {
          d.items[i] = null;
        }
      }
    }
    if (d.items === undefined) {
      d.items = null;
    }
    checkBoolean(d.retro_status, true, field + ".retro_status");
    if (d.retro_status === undefined) {
      d.retro_status = null;
    }
    return new BadgesProxy(d);
  }
  private constructor(d: any) {
    this.count = d.count;
    this.items = d.items;
    this.retro_status = d.retro_status;
  }
}

export class ItemsEntity6Proxy {
  public readonly badge_id: number;
  public readonly user_badge_id: number;
  public readonly badge_name: string;
  public readonly badge_description: string;
  public readonly created_at: string;
  public readonly badge_image: VenueIconOrBadgeImageProxy;
  public static Parse(d: string): ItemsEntity6Proxy | null {
    return ItemsEntity6Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ItemsEntity6Proxy | null {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      return null;
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, true);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, true);
    }
    checkNumber(d.badge_id, false, field + ".badge_id");
    checkNumber(d.user_badge_id, false, field + ".user_badge_id");
    checkString(d.badge_name, false, field + ".badge_name");
    checkString(d.badge_description, false, field + ".badge_description");
    checkString(d.created_at, false, field + ".created_at");
    d.badge_image = VenueIconOrBadgeImageProxy.Create(d.badge_image, field + ".badge_image");
    return new ItemsEntity6Proxy(d);
  }
  private constructor(d: any) {
    this.badge_id = d.badge_id;
    this.user_badge_id = d.user_badge_id;
    this.badge_name = d.badge_name;
    this.badge_description = d.badge_description;
    this.created_at = d.created_at;
    this.badge_image = d.badge_image;
  }
}

export class PaginationProxy {
  public readonly since_url: string;
  public readonly next_url: string;
  public readonly max_id: number;
  public static Parse(d: string): PaginationProxy {
    return PaginationProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): PaginationProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.since_url, false, field + ".since_url");
    checkString(d.next_url, false, field + ".next_url");
    checkNumber(d.max_id, false, field + ".max_id");
    return new PaginationProxy(d);
  }
  private constructor(d: any) {
    this.since_url = d.since_url;
    this.next_url = d.next_url;
    this.max_id = d.max_id;
  }
}

export class SimilarProxy {
  public readonly method: string;
  public readonly count: number;
  public readonly items: ItemsEntity7Proxy[] | null;
  public static Parse(d: string): SimilarProxy {
    return SimilarProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): SimilarProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.method, false, field + ".method");
    checkNumber(d.count, false, field + ".count");
    checkArray(d.items, field + ".items");
    if (d.items) {
      for (let i = 0; i < d.items.length; i++) {
        d.items[i] = ItemsEntity7Proxy.Create(d.items[i], field + ".items" + "[" + i + "]");
      }
    }
    if (d.items === undefined) {
      d.items = null;
    }
    return new SimilarProxy(d);
  }
  private constructor(d: any) {
    this.method = d.method;
    this.count = d.count;
    this.items = d.items;
  }
}

export class ItemsEntity7Proxy {
  public readonly rating_score: number;
  public readonly beer: Beer3Proxy;
  public readonly brewery: Brewery2Proxy;
  public readonly friends: BadgesOrMediaOrFriendsOrVintagesOrBrewedByProxy;
  public static Parse(d: string): ItemsEntity7Proxy {
    return ItemsEntity7Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ItemsEntity7Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.rating_score, false, field + ".rating_score");
    d.beer = Beer3Proxy.Create(d.beer, field + ".beer");
    d.brewery = Brewery2Proxy.Create(d.brewery, field + ".brewery");
    d.friends = BadgesOrMediaOrFriendsOrVintagesOrBrewedByProxy.Create(d.friends, field + ".friends");
    return new ItemsEntity7Proxy(d);
  }
  private constructor(d: any) {
    this.rating_score = d.rating_score;
    this.beer = d.beer;
    this.brewery = d.brewery;
    this.friends = d.friends;
  }
}

export class Beer3Proxy {
  public readonly bid: number;
  public readonly beer_name: string;
  public readonly beer_abv: number;
  public readonly beer_ibu: number;
  public readonly beer_slug: string;
  public readonly beer_style: string;
  public readonly beer_label: string;
  public readonly has_had: boolean;
  public static Parse(d: string): Beer3Proxy {
    return Beer3Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): Beer3Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.bid, false, field + ".bid");
    checkString(d.beer_name, false, field + ".beer_name");
    checkNumber(d.beer_abv, false, field + ".beer_abv");
    checkNumber(d.beer_ibu, false, field + ".beer_ibu");
    checkString(d.beer_slug, false, field + ".beer_slug");
    checkString(d.beer_style, false, field + ".beer_style");
    checkString(d.beer_label, false, field + ".beer_label");
    checkBoolean(d.has_had, false, field + ".has_had");
    return new Beer3Proxy(d);
  }
  private constructor(d: any) {
    this.bid = d.bid;
    this.beer_name = d.beer_name;
    this.beer_abv = d.beer_abv;
    this.beer_ibu = d.beer_ibu;
    this.beer_slug = d.beer_slug;
    this.beer_style = d.beer_style;
    this.beer_label = d.beer_label;
    this.has_had = d.has_had;
  }
}

export class Brewery2Proxy {
  public readonly brewery_id: number;
  public readonly brewery_name: string;
  public readonly brewery_slug: string;
  public readonly brewery_page_url: string;
  public readonly brewery_type: string;
  public readonly brewery_label: string;
  public readonly country_name: string;
  public readonly contact: Contact2Proxy;
  public readonly location: LocationProxy;
  public readonly brewery_active: number;
  public static Parse(d: string): Brewery2Proxy {
    return Brewery2Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): Brewery2Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.brewery_id, false, field + ".brewery_id");
    checkString(d.brewery_name, false, field + ".brewery_name");
    checkString(d.brewery_slug, false, field + ".brewery_slug");
    checkString(d.brewery_page_url, false, field + ".brewery_page_url");
    checkString(d.brewery_type, false, field + ".brewery_type");
    checkString(d.brewery_label, false, field + ".brewery_label");
    checkString(d.country_name, false, field + ".country_name");
    d.contact = Contact2Proxy.Create(d.contact, field + ".contact");
    d.location = LocationProxy.Create(d.location, field + ".location");
    checkNumber(d.brewery_active, false, field + ".brewery_active");
    return new Brewery2Proxy(d);
  }
  private constructor(d: any) {
    this.brewery_id = d.brewery_id;
    this.brewery_name = d.brewery_name;
    this.brewery_slug = d.brewery_slug;
    this.brewery_page_url = d.brewery_page_url;
    this.brewery_type = d.brewery_type;
    this.brewery_label = d.brewery_label;
    this.country_name = d.country_name;
    this.contact = d.contact;
    this.location = d.location;
    this.brewery_active = d.brewery_active;
  }
}

export class Contact2Proxy {
  public readonly twitter: string;
  public readonly facebook: string;
  public readonly instagram: string;
  public readonly url: string;
  public static Parse(d: string): Contact2Proxy {
    return Contact2Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): Contact2Proxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.twitter, false, field + ".twitter");
    checkString(d.facebook, false, field + ".facebook");
    checkString(d.instagram, false, field + ".instagram");
    checkString(d.url, false, field + ".url");
    return new Contact2Proxy(d);
  }
  private constructor(d: any) {
    this.twitter = d.twitter;
    this.facebook = d.facebook;
    this.instagram = d.instagram;
    this.url = d.url;
  }
}

export class BadgesOrMediaOrFriendsOrVintagesOrBrewedByProxy {
  public readonly count: number;
  public readonly items: null[] | null;
  public static Parse(d: string): BadgesOrMediaOrFriendsOrVintagesOrBrewedByProxy {
    return BadgesOrMediaOrFriendsOrVintagesOrBrewedByProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): BadgesOrMediaOrFriendsOrVintagesOrBrewedByProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.count, false, field + ".count");
    checkArray(d.items, field + ".items");
    if (d.items) {
      for (let i = 0; i < d.items.length; i++) {
        checkNull(d.items[i], field + ".items" + "[" + i + "]");
        if (d.items[i] === undefined) {
          d.items[i] = null;
        }
      }
    }
    if (d.items === undefined) {
      d.items = null;
    }
    return new BadgesOrMediaOrFriendsOrVintagesOrBrewedByProxy(d);
  }
  private constructor(d: any) {
    this.count = d.count;
    this.items = d.items;
  }
}

function throwNull2NonNull(field: string, d: any): never {
  return errorHelper(field, d, "non-nullable object", false);
}
function throwNotObject(field: string, d: any, nullable: boolean): never {
  return errorHelper(field, d, "object", nullable);
}
function throwIsArray(field: string, d: any, nullable: boolean): never {
  return errorHelper(field, d, "object", nullable);
}
function checkArray(d: any, field: string): void {
  if (!Array.isArray(d) && d !== null && d !== undefined) {
    errorHelper(field, d, "array", true);
  }
}
function checkNumber(d: any, nullable: boolean, field: string): void {
  if (typeof(d) !== 'number' && (!nullable || (nullable && d !== null && d !== undefined))) {
    errorHelper(field, d, "number", nullable);
  }
}
function checkBoolean(d: any, nullable: boolean, field: string): void {
  if (typeof(d) !== 'boolean' && (!nullable || (nullable && d !== null && d !== undefined))) {
    errorHelper(field, d, "boolean", nullable);
  }
}
function checkString(d: any, nullable: boolean, field: string): void {
  if (typeof(d) !== 'string' && (!nullable || (nullable && d !== null && d !== undefined))) {
    errorHelper(field, d, "string", nullable);
  }
}
function checkNull(d: any, field: string): void {
  if (d !== null && d !== undefined) {
    errorHelper(field, d, "null or undefined", false);
  }
}
function errorHelper(field: string, d: any, type: string, nullable: boolean): never {
  if (nullable) {
    type += ", null, or undefined";
  }
  throw new TypeError('Expected ' + type + " at " + field + " but found:\n" + JSON.stringify(d) + "\n\nFull object:\n" + JSON.stringify(obj));
}
