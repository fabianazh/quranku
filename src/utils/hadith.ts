const hadiths: Hadith[] = [
    {
        name: 'Bukhari',
        contents: {
            number: 6010,
            arab: 'مَنْ دَلَّ عَلَى خَيْرٍ فَلَهُ مِثْلُ أَجْرِ فَاعِلِهِ',
            latin: 'Man dalla `alā khayr fa lahu mithlu ajr fā`ilihi',
            latinIndo:
                'Barangsiapa yang menunjukkan kepada kebaikan maka ia mendapatkan pahala seperti orang yang melakukannya',
        },
    },
    {
        name: 'Muslim',
        contents: {
            number: 2580,
            arab: 'إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ فَأَصْلِحُوا بَيْنَ أَخَوَيْكُمْ',
            latin: 'Innamā al-mu’minūn ikhwat fa aṣliḥū bayn akhawaykum',
            latinIndo:
                'Sesungguhnya orang-orang mukmin itu bersaudara, maka damaikanlah antara dua saudaramu',
        },
    },
    {
        name: 'Tirmidhi',
        contents: {
            number: 1924,
            arab: 'إِنَّ اللَّهَ لَا يَنْظُرُ إِلَى صُوَرِكُمْ وَأَمْوَالِكُمْ وَلَكِنْ يَنْظُرُ إِلَى قُلُوبِكُمْ وَأَعْمَالِكُمْ',
            latin: 'Inna allāh lā yanẓur ilā ṣuvarikum wa amwālikum walākin yanẓur ilā qulūbikum wa a`mālikum',
            latinIndo:
                'Sesungguhnya Allah tidak melihat kepada rupa dan harta kalian, tetapi Dia melihat kepada hati dan amal kalian',
        },
    },
    {
        name: 'Bukhari',
        contents: {
            number: 6018,
            arab: 'مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ',
            latin: 'Man kāna yu`minu billāh wa al-yawm al-ākhir falyaqul khayrā aw liyaṣmut',
            latinIndo:
                'Barangsiapa yang beriman kepada Allah dan hari akhir hendaklah dia berkata baik atau diam',
        },
    },
    {
        name: 'Bukhari',
        contents: {
            number: 2101,
            arab: 'إِنَّمَا مَثَلُ الْجَلِيسِ الصَّالِحِ وَجَلِيسِ السُّوءِ كَحَامِلِ الْمِسْكِ وَنَافِخِ الْكِيرِ',
            latin: 'Innamā mathalul-jalīs aṣ-ṣāliḥ wa jalīs as-sū’ kaḥāmil al-misk wa nāfik al-kīr',
            latinIndo:
                'Sesungguhnya perumpamaan teman yang baik dan teman yang buruk adalah seperti pembawa minyak wangi dan pandai besi',
        },
    },
    {
        name: "Nasa'i",
        contents: {
            number: 2528,
            arab: 'عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: ثَلاَثَةٌ لاَ يُكَلِّمُهُمُ اللَّهُ يَوْمَ الْقِيَامَةِ وَلاَ يُزَكِّيهِمْ وَلَهُمْ عَذَابٌ أَلِيمٌ: شَيْخٌ زَانٍ، وَمَلِكٌ كَذَّابٌ، وَعَائِلٌ مُسْتَكْبِرٌ',
            latin: 'Dari Abu Hurairah radhiyallahu \'anhu, dia berkata, Rasulullah shallallahu \'alaihi wasallam bersabda: "Tiga golongan yang tidak akan diajak bicara oleh Allah pada hari kiamat, yaitu seorang yang sudah tua berzina, orang miskin namun sombong, dan pemimpin yang pendusta."',
            latinIndo:
                'Dari Abu Hurairah radhiyallahu \'anhu, dia berkata, Rasulullah shallallahu \'alaihi wasallam bersabda: "Tiga golongan yang tidak akan diajak bicara oleh Allah pada hari kiamat, yaitu seorang yang sudah tua berzina, orang miskin namun sombong, dan pemimpin yang pendusta."',
        },
    },
    {
        name: 'Muslim',
        contents: {
            number: 53,
            arab: 'مَنْ أَحَبَّ لِلَّهِ وَأَبْغَضَ لِلَّهِ وَأَعْطَى لِلَّهِ وَمَنَعَ لِلَّهِ فَقَدِ اسْتَكْمَلَ الْإِيمَانَ',
            latin: 'Man aḥabba lillāh wa abghaḍa lillāh wa a`ṭā lillāh wa mana`a lillāh faqad istakmala al-īmān',
            latinIndo:
                'Barangsiapa mencintai karena Allah, membenci karena Allah, memberi karena Allah, dan menahan karena Allah, maka dia telah menyempurnakan iman',
        },
    },
    {
        name: 'Nasai',
        contents: {
            number: 5027,
            arab: 'إِنَّ اللَّهَ يُحِبُّ إِذَا عَمِلَ أَحَدُكُمْ عَمَلًا أَنْ يُتْقِنَهُ',
            latin: 'Inna allāh yuḥibb idhā `amila aḥadakum `amalan an yutqinah',
            latinIndo:
                'Sesungguhnya Allah menyukai jika salah seorang dari kalian melakukan pekerjaan, maka dia melakukannya dengan itqan (sungguh-sungguh)',
        },
    },
    {
        name: 'Bukhari',
        contents: {
            number: 6025,
            arab: 'خَيْرُ النَّاسِ أَنْفَعُهُمْ لِلنَّاسِ',
            latin: 'Khayr an-nās anfa`uhum li`n-nās',
            latinIndo:
                'Sebaik-baik manusia adalah yang paling bermanfaat bagi manusia lainnya',
        },
    },
    {
        name: 'Bukhari',
        contents: {
            number: 6014,
            arab: 'إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى',
            latin: 'Innamā al-a`māl bi-n-niyyāt wa innamā likulli imri`i mā nawā',
            latinIndo:
                'Sesungguhnya amal itu tergantung niatnya, dan setiap orang hanya mendapatkan sesuai niatnya',
        },
    },
    {
        name: 'Muslim',
        contents: {
            number: 1907,
            arab: 'الدُّنْيَا سِجْنُ الْمُؤْمِنِ وَجَنَّةُ الْكَافِرِ',
            latin: 'Ad-dunyā sijn al-mu`min wa jannah al-kāfir',
            latinIndo:
                'Dunia adalah penjara bagi orang beriman dan surga bagi orang kafir',
        },
    },
    {
        name: 'Bukhari',
        contents: {
            number: 190,
            arab: 'إِنَّمَا جُعِلَ الإِمَامُ لِيُؤْتَمَّ بِهِ',
            latin: 'Innamā ju`ila al-imām li yu`tam bih',
            latinIndo: 'Sesungguhnya imam itu dijadikan untuk diikuti',
        },
    },
]

export async function getRandomHadith(): Promise<Hadith> {
    const randomIndex = Math.floor(Math.random() * hadiths.length)
    return hadiths[randomIndex]
}
