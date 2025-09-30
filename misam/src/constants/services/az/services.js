import {
  A2P,
  API,
  P2A,
  P2P,
  SIP,
  VirtualCall,
  A2PIcon,
  APIIcon,
  P2AIcon,
  P2PIcon,
  SIPIcon,
  VirtualCallIcon,
} from "../../../shared";

const services = [
  {
    title: "A2P SMS",
    description:
      "Tətbiqinizə A2P mesajlaşma əlavə edin! İstifadəçilərə birbaşa yüksək çatdırılma dərəcəsi ilə marketinq, bildirişlər və digər mesajlar göndərin.",
    whatIs: {
      title: "A2P SMS nədir?",
      text: "A2P SMS (Application-to-Person messaging) tətbiqlərdən və ya sistemlərdən birbaşa müştərilərə SMS göndərməyə imkan verən texnologiyadır. Bu üsul müxtəlif məqsədlərlə istifadə olunur:",
      list: [
        "Təsdiqlər və Bildirişlər: Qeydiyyat, alış və ya sifariş statusu dəyişiklikləri üçün ani bildirişlər.",
        "Ani Xəbərdarlıqlar: Bank əməliyyatları, cədvəl dəyişiklikləri və çatdırılma yeniləmələri kimi vacib məlumatlar.",
        "Xatırlatmalar: Görüşlər, tədbirlər və ya ödənişlər üçün vaxtında xatırlatmalar.",
        "Aksiyalar və Təkliflər: Müştərilərə xüsusi endirimlər, kampaniyalar və təkliflər haqqında məlumat vermək.",
      ],
    },
    benefits: [
      "Yüksək Çatdırılma Sürəti: Mesajlar demək olar ki, dərhal çatdırılır.",
      "Yüksək Oxunma Faizi: SMS-lərin 90%-dən çoxu dəqiqələr ərzində oxunur.",
      "Şəxsi Mesajlaşma: Müştəri ilə fərdi əlaqə qurmaq imkanı.",
      "Geniş Əhatə: Müştərilərə yerləşməsindən və cihazından asılı olmayaraq çatmaq.",
      "Sərfəli Həll: Kütləvi və fərdi mesajlaşmalar üçün ideal.",
    ],
    whyChoose: [
      "Etibarlılıq və Təhlükəsizlik: Mesajların zəmanətli çatdırılması və məlumatların qorunması.",
      "Miqyaslana Bilənlik: Az saydan milyonlarla mesaja qədər xidmət keyfiyyətini qorumaq.",
      "Asan İnteqrasiya: Rahat API vasitəsilə mövcud sistemlərinizə birləşdirmək.",
      "Analitika və Hesabatlar: Çatdırılma və oxunma göstəricilərinin detallı analizi.",
    ],
    cta: "A2P SMS gücünü kəşf edin və müştərilərinizlə ünsiyyətinizi artırın!",
    img: A2P,
    icon: A2PIcon,
    link: "/a2p-messaging",
  },
  {
    title: "P2A SMS",
    description:
      "İstifadəçilərlə qarşılıqlı əlaqəni gücləndirin! Sorğular, məlumat əldə etmə və interaktiv xidmətləri təmin edin.",
    whatIs: {
      title: "P2A SMS nədir?",
      text: "P2A SMS (Person-to-Application messaging) texnologiyası müştərilərə biznes tətbiqlərinizə və ya sistemlərinizə birbaşa SMS göndərməyə imkan verir. Bu üsul müxtəlif məqsədlərlə istifadə olunur:",
      list: [
        "Müştəri Dəstəyi: Müştərilər SMS vasitəsilə sorğu və müraciət göndərə bilərlər.",
        "Rəylər və Sorğular: Sadə SMS vasitəsilə rəy toplamaq və sorğular keçirmək.",
        "Rezervasiya və Sifarişlər: Müştərilər SMS ilə rezervasiya edə bilərlər.",
        "Abunəliklər və Opt-in: Müştərilərə xəbər bülletenlərinə və xidmətlərə abunə olmağa imkan verin.",
      ],
    },
    benefits: [
      "Müştəri Əlaqəsinin Güclənməsi: Sadə və birbaşa ünsiyyət imkanı.",
      "Yüksək Rahatlıq: Müştərilər hər yerdən və istənilən vaxt müraciət edə bilər.",
      "Avtomatik Cavablar: Tez-tez verilən suallara avtomatlaşdırılmış cavablar.",
      "Dəyərli Məlumat Toplama: Müştəri rəylərindən faydalı analitik məlumatlar əldə edin.",
      "Sərfəli Həll: Dəstək infrastrukturunu azaltmaq imkanı.",
    ],
    whyChoose: [
      "Etibarlılıq və Təhlükəsizlik: Müştəri mesajlarının etibarlı qəbulu.",
      "Miqyaslana Bilənlik: Artan mesaj həcmini idarə etmək imkanı.",
      "Asan İnteqrasiya: Rahat API vasitəsilə mövcud sistemlərinizə qoşulma.",
      "Analitika və Hesabatlar: Müştəri ünsiyyətinin detallı analizi.",
    ],
    cta: "P2A SMS gücünü kəşf edin və müştərilərinizlə əlaqəni inkişaf etdirin!",
    img: P2A,
    icon: P2AIcon,
    link: "/p2a-messaging",
  },
  {
    title: "P2P SMS",
    description:
      "P2P SMS istifadəçilərə platformanız vasitəsilə bir-birilərinə birbaşa mesaj göndərməyə imkan verir.",
    whatIs: {
      title: "P2P SMS nədir?",
      text: "P2P SMS (Person-to-Person messaging) fərdlərə platformanız vasitəsilə bir-birilərinə mesaj göndərməyə imkan verən texnologiyadır:",
      list: [
        "Sosial Ünsiyyət: İstifadəçilərin bir-biri ilə rahat əlaqə qurması.",
        "Müştəri Xidməti: Müştəri və dəstək nümayəndəsi arasında birbaşa ünsiyyət.",
        "Marketplace Əlaqəsi: Alıcı və satıcı arasında birbaşa danışıq.",
        "Tədbir Koordinasiyası: İstifadəçilərin tədbirləri təşkil etməsi.",
      ],
    },
    benefits: [
      "Yaxşı İstifadəçi Təcrübəsi: Rahat və intuitiv ünsiyyət kanalı.",
      "Ani Bağlantı: Mesajların sürətli və etibarlı çatdırılması.",
      "Yüksək Əlaqə Səviyyəsi: İstifadəçiləri aktiv ünsiyyətə təşviq edir.",
      "Miqyaslana Bilənlik: Artan istifadəçi sayını idarə etmək imkanı.",
      "Sərfəli: Mövcud mobil şəbəkələrdən faydalanmaq.",
    ],
    whyChoose: [
      "Etibarlılıq və Təhlükəsizlik: Mesajların qorunması.",
      "Miqyaslana Bilənlik: Böyük həcmli mesajların idarə olunması.",
      "Asan İnteqrasiya: Sadə API ilə qoşulma.",
      "Analitika: İstifadəçi əlaqələrinin izlənməsi.",
    ],
    cta: "P2P SMS imkanlarını kəşf edin və istifadəçilərinizin ünsiyyətini artırın!",
    img: P2P,
    icon: P2PIcon,
    link: "/p2p-messaging",
  },
  {
    title: "SIP Trunking",
    description:
      "Effektiv səsli ünsiyyət üçün SIP-Trunking! Xərcləri azaldın və elastikliyi artırın.",
    whatIs: {
      title: "SIP Trunking nədir?",
      text: "SIP Trunking bir neçə səs kanalını vahid SIP server və ya şlüzə qoşmağa imkan verən texnologiyadır:",
      list: [
        "VoIP: İnternet üzərindən səsli ünsiyyət.",
        "Telefon Xidməti: Cihazlar və istifadəçilər arasında zəng.",
        "Telekonfranslar: Uzaqdan iclas və görüşlər.",
        "Səsli Mesajlaşma: Səsli mesaj və zənglər.",
      ],
    },
    benefits: [
      "Sərfəli: Xərclərin optimallaşdırılması.",
      "Miqyaslana Bilənlik: Böyük həcmli zəngləri idarə etmək imkanı.",
      "Asan İnteqrasiya: Mövcud sistemlərlə API vasitəsilə birləşmə.",
      "Etibarlılıq və Təhlükəsizlik: Səsli ünsiyyətin qorunması.",
    ],
    whyChoose: [
      "Etibarlılıq və Təhlükəsizlik.",
      "Miqyaslana Bilənlik.",
      "Asan İnteqrasiya.",
      "Sərfəli.",
    ],
    cta: "SIP Trunking gücünü kəşf edin və səsli ünsiyyətinizi inkişaf etdirin!",
    img: SIP,
    icon: SIPIcon,
    link: "/sip-trunking",
  },
  {
    title: "Virtual Calling",
    description:
      "Virtual Calling ilə imkanlarınızı genişləndirin! Dünyanın istənilən yerində yüksək keyfiyyətli görüşlər və vebinarlar təşkil edin.",
    whatIs: {
      title: "Virtual Calling nədir?",
      text: "Virtual Calling uzaqdan iclas və vebinar keçirməyə imkan verən platformadır:",
      list: [
        "Uzaqdan Görüşlər.",
        "Virtual İclaslar.",
        "Vebinarlar.",
        "Onlayn Tədbirlər.",
      ],
    },
    benefits: [
      "Sərfəli həll.",
      "Miqyaslana Bilənlik.",
      "Asan İnteqrasiya.",
      "Etibarlılıq və Təhlükəsizlik.",
    ],
    whyChoose: [
      "Etibarlılıq və Təhlükəsizlik.",
      "Miqyaslana Bilənlik.",
      "Asan İnteqrasiya.",
      "Sərfəli.",
    ],
    cta: "Virtual Calling gücünü kəşf edin və ünsiyyətinizi yeni səviyyəyə qaldırın!",
    img: VirtualCall,
    icon: VirtualCallIcon,
    link: "/virtual-calling",
  },
  {
    title: "Ünsiyyət API-ləri",
    description:
      "API-lərimizlə ünsiyyəti problemsiz inteqrasiya edin! Mesaj, zəng və video xidmətlərini asanlıqla əlavə edin.",
    whatIs: {
      title: "Ünsiyyət API-ləri nədir?",
      text: "Ünsiyyət API-ləri (Application Programming Interfaces) SMS, səs və video xidmətlərini sisteminizə qoşmağa imkan verən proqram interfeysləridir:",
      list: [
        "SMS xidmətləri.",
        "Səsli zənglər.",
        "Video zənglər.",
        "Mesajlaşma.",
      ],
    },
    benefits: [
      "Sərfəli həll.",
      "Miqyaslana Bilənlik.",
      "Asan İnteqrasiya.",
      "Etibarlılıq və Təhlükəsizlik.",
    ],
    whyChoose: [
      "Etibarlılıq və Təhlükəsizlik.",
      "Miqyaslana Bilənlik.",
      "Asan İnteqrasiya.",
      "Sərfəli.",
    ],
    cta: "Ünsiyyət API-lərinin gücünü kəşf edin və xidmətlərinizi inkişaf etdirin!",
    img: API,
    icon: APIIcon,
    link: "/communication-apis",
  },
];

export default services;
