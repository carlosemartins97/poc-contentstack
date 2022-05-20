export interface ContentstackPage {
  created_at: string;
  updated_at: string;
  locale: string;
  title: string;
  short_description: string;
  url: string;
}

export interface PlansPage extends ContentstackPage {
  description: string;
  modular_blocks: Array<Plans>;
  reference: Array<any>;
}

export interface HomePage extends PlansPage {
  main_content: string;
}

export type PlansReference = {
  uid: string;
  _content_type_uid: string;
}

export type Plans = {
  plan: {
    is_active: string;
    title: string;
    currency: string;
    period: string;
    modular_blocks: Array<Benefits>;
    call_to_action: {
      title: string;
      href: string;
    }
  }
}

export type Benefits = {
  benefits: {
    benefit_title: string;
  }
}