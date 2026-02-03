export type WebinarType = "subsidy" | "case-study";

export interface WebinarHeroData {
  badge: string;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  format: string;
  price: string;
  capacity: string;
  cta: { label: string; href: string };
}

export interface WebinarContentItem {
  icon: string;
  title: string;
  description: string;
}

export interface Speaker {
  name: string;
  role: string;
  organization: string;
  bio: string;
  image: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  result: string;
}

export interface WebinarDetail {
  date: string;
  time: string;
  duration: string;
  format: string;
  tool: string;
  price: string;
  capacity: string;
  timetable: { time: string; content: string }[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

const commonData = {
  site: {
    name: "ホリエモンAI学校 介護校",
    tagline: "介護・在宅医療向けAI研修",
  },

  stats: [
    { value: "200", unit: "社+", label: "導入企業" },
    { value: "2,000", unit: "人+", label: "受講者数" },
    { value: "98", unit: "%", label: "満足度" },
  ],

  problems: [
    {
      icon: "Users",
      title: "人が足りない",
      description:
        "求人を出しても応募が来ない。採用してもすぐ辞める。残った職員に負担が集中する悪循環。",
    },
    {
      icon: "HelpCircle",
      title: "AIの始め方がわからない",
      description:
        "AIが業務改善に使えそうだと感じているが、具体的に何から手をつければいいのか分からない。",
    },
    {
      icon: "DollarSign",
      title: "研修費用が心配",
      description:
        "何十万もかけて研修しても元が取れるのか？限られた予算の中で効果的な投資をしたい。",
    },
    {
      icon: "Monitor",
      title: "うちの職員にできるか不安",
      description:
        "PCが苦手な職員も多い。難しい内容だと誰もついていけないのではないか。",
    },
  ],

  faq: [
    {
      question: "セミナーの録画はもらえますか？",
      answer:
        "はい、参加者全員に録画アーカイブをお送りします。当日参加できなくても、後日視聴いただけます。",
    },
    {
      question: "カメラOFFで参加できますか？",
      answer:
        "はい、カメラOFFでのご参加も可能です。お気軽にご参加ください。質問はチャットからも受け付けております。",
    },
    {
      question: "介護業界以外でも参加できますか？",
      answer:
        "本セミナーは介護・在宅医療業界の方を主な対象としていますが、他業種の方もご参加いただけます。",
    },
    {
      question: "参加費は本当に無料ですか？",
      answer:
        "はい、完全無料です。セミナー後の営業電話なども一切行いませんのでご安心ください。",
    },
    {
      question: "スマートフォンからも参加できますか？",
      answer:
        "はい、Zoomアプリをインストールいただければスマートフォンやタブレットからもご参加いただけます。",
    },
  ],

  footer: {
    company: "ホリエモンAI学校 介護校",
    email: "info@horiemon-ai-kaigo.example.com",
    phone: "03-1234-5678",
    copyright: "© 2025 ホリエモンAI学校 介護校. All rights reserved.",
  },

  seo: {
    keywords: [
      "介護 AI 研修",
      "介護 DX",
      "助成金 AI研修",
      "ホリエモン AI学校",
      "介護 業務効率化",
      "ウェビナー",
    ],
  },
};

const webinars = {
  subsidy: {
    hero: {
      badge: "毎月開催 / 参加無料",
      title: "介護×AI研修、助成金で75%オフ\nその仕組み、60分で全部わかります",
      subtitle:
        "介護施設の経営者・管理者向け｜無料オンラインセミナー",
      date: "2025年3月15日（土）",
      time: "14:00〜15:00",
      format: "オンライン（Zoom）",
      price: "無料",
      capacity: "先着50名",
      cta: { label: "無料で席を確保する", href: "#registration" },
    } as WebinarHeroData,

    contents: [
      {
        icon: "Lightbulb",
        title: "介護現場でのAI活用事例",
        description:
          "議事録作成、報告書、送迎表など、すぐに使える実践的なAI活用法を具体的に解説します。",
      },
      {
        icon: "Wallet",
        title: "助成金で75%OFFの仕組み",
        description:
          "人材開発支援助成金の条件・申請の流れ・必要書類を、社労士が分かりやすく解説します。",
      },
      {
        icon: "GraduationCap",
        title: "ホリエモンAI学校のカリキュラム紹介",
        description:
          "240以上の講座内容、段階的なプログラム、伴走サポートの詳細をご紹介します。",
      },
      {
        icon: "MessageCircle",
        title: "質疑応答（15分）",
        description:
          "助成金のこと、研修内容のこと、何でもご質問いただけます。チャットでの質問もOKです。",
      },
    ] as WebinarContentItem[],

    speakers: [
      {
        name: "講師名",
        role: "ホリエモンAI学校 介護校 講師",
        organization: "ホリエモンAI学校",
        bio: "介護業界でのAI導入支援実績多数。200社以上の介護施設へのAI研修を担当。現場の課題に寄り添った実践的な指導が評判。",
        image: "/images/speaker1.jpg",
      },
      {
        name: "社労士名",
        role: "社会保険労務士",
        organization: "提携社労士事務所",
        bio: "助成金申請のスペシャリスト。介護事業者向けの人材開発支援助成金の申請サポート実績100件以上。",
        image: "/images/speaker2.jpg",
      },
    ] as Speaker[],

    details: {
      date: "2025年3月15日（土）",
      time: "14:00〜15:00",
      duration: "60分",
      format: "オンライン",
      tool: "Zoom（お申込み後にURLをお送りします）",
      price: "無料",
      capacity: "先着50名",
      timetable: [
        { time: "14:00〜14:10", content: "オープニング・ホリエモンAI学校の紹介" },
        { time: "14:10〜14:25", content: "介護現場でのAI活用事例" },
        { time: "14:25〜14:40", content: "助成金で75%OFFの仕組みと申請の流れ" },
        { time: "14:40〜14:45", content: "カリキュラム・料金のご案内" },
        { time: "14:45〜15:00", content: "質疑応答" },
      ],
    } as WebinarDetail,

    testimonials: [
      {
        name: "A施設 理事長",
        role: "社会福祉法人 理事長",
        company: "社会福祉法人A",
        quote:
          "助成金の仕組みがよく分かりました。75%OFFなら試す価値があると確信し、セミナー後すぐに相談を申し込みました。",
        result: "セミナー参加後、2週間で導入決定",
      },
      {
        name: "B施設 事務長",
        role: "事務長",
        company: "介護施設B",
        quote:
          "AIの具体的な活用例が聞けて、うちの施設でもできそうだと感じました。職員に説明する材料もたくさん得られました。",
        result: "職員5名での受講を開始",
      },
      {
        name: "C法人 代表",
        role: "代表取締役",
        company: "株式会社C",
        quote:
          "他のセミナーと違い、介護業界に特化した内容だったので非常に参考になりました。社労士の話も具体的でわかりやすかった。",
        result: "助成金を活用し10名で導入",
      },
    ] as Testimonial[],
  },

  "case-study": {
    hero: {
      badge: "四半期開催 / 参加無料",
      title:
        "「報告書作成が半分の時間に」\n導入施設が語る、AI研修のリアル",
      subtitle:
        "介護施設の経営者・管理者向け｜導入企業が本音で語るウェビナー",
      date: "2025年3月22日（土）",
      time: "14:00〜15:00",
      format: "オンライン（Zoom）",
      price: "無料",
      capacity: "先着50名",
      cta: { label: "無料で席を確保する", href: "#registration" },
    } as WebinarHeroData,

    contents: [
      {
        icon: "Building2",
        title: "導入施設の生の声",
        description:
          "実際にAI研修を導入した介護施設の経営者・管理者が、導入の経緯や成果を本音で語ります。",
      },
      {
        icon: "BarChart3",
        title: "具体的な業務改善の数値",
        description:
          "報告書作成、議事録、送迎管理など、どの業務がどれだけ効率化されたか、具体的な数字で共有します。",
      },
      {
        icon: "AlertCircle",
        title: "導入時の失敗談と乗り越え方",
        description:
          "現場の抵抗、学習時間の確保、ITリテラシーの差など、リアルな課題とその解決策をお伝えします。",
      },
      {
        icon: "MessageCircle",
        title: "パネルディスカッション＆質疑応答",
        description:
          "導入施設の担当者に直接質問できる貴重な機会です。「うちでもできる？」の疑問を解消します。",
      },
    ] as WebinarContentItem[],

    speakers: [
      {
        name: "導入企業A 施設長",
        role: "特別養護老人ホーム 施設長",
        organization: "社会福祉法人A",
        bio: "2024年にAI研修を導入。職員10名が受講し、事務作業時間を30%削減。現場のAI活用推進のリーダー的存在。",
        image: "/images/speaker1.jpg",
      },
      {
        name: "導入企業B 代表",
        role: "代表取締役",
        organization: "訪問介護B社",
        bio: "小規模事業所でのAI導入事例として注目される。2名から始めた研修が、現在は全社員に拡大。",
        image: "/images/speaker2.jpg",
      },
    ] as Speaker[],

    details: {
      date: "2025年3月22日（土）",
      time: "14:00〜15:00",
      duration: "60分",
      format: "オンライン",
      tool: "Zoom（お申込み後にURLをお送りします）",
      price: "無料",
      capacity: "先着50名",
      timetable: [
        { time: "14:00〜14:05", content: "オープニング" },
        { time: "14:05〜14:20", content: "導入施設A｜AI研修で事務作業30%削減の軌跡" },
        { time: "14:20〜14:35", content: "導入施設B｜小規模事業所でも始められた理由" },
        { time: "14:35〜14:50", content: "パネルディスカッション" },
        { time: "14:50〜15:00", content: "質疑応答・クロージング" },
      ],
    } as WebinarDetail,

    testimonials: [
      {
        name: "D施設 管理者",
        role: "管理者",
        company: "介護施設D",
        quote:
          "実際に導入した施設の話を聞けたのが一番参考になりました。同じ悩みを持つ方のリアルな体験談は、営業資料の100倍説得力がありました。",
        result: "ウェビナー参加後、無料相談を申込み",
      },
      {
        name: "E法人 理事長",
        role: "理事長",
        company: "社会福祉法人E",
        quote:
          "『うちの職員でもできるか？』という不安が解消されました。PC苦手な職員でも大丈夫という話に安心しました。",
        result: "3施設合同での導入を決定",
      },
      {
        name: "F事業所 所長",
        role: "事業所長",
        company: "訪問介護F",
        quote:
          "失敗談も正直に話してくれたのが信頼できました。導入のハードルが思っていたよりずっと低いことがわかりました。",
        result: "助成金活用で4名での受講を開始",
      },
    ] as Testimonial[],
  },
};

export function getWebinarData(type: WebinarType) {
  return {
    ...commonData,
    ...webinars[type],
  };
}

export { commonData, webinars };
