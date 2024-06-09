const hadiths: Hadith[] = [
    {
        name: 'Bukhari',
        contents: {
            number: 1,
            arab: 'مَنْ دَلَّ عَلَى خَيْرٍ فَلَهُ مِثْلُ أَجْرِ فَاعِلِهِ',
            latin: 'Man dalla `alā khayr fa lahu mithlu ajr fā`ilihi',
            latinIndo:
                'Barangsiapa yang menunjukkan kepada kebaikan maka ia mendapatkan pahala seperti orang yang melakukannya',
        },
    },
    {
        name: 'Muslim',
        contents: {
            number: 2,
            arab: 'إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ فَأَصْلِحُوا بَيْنَ أَخَوَيْكُمْ',
            latin: 'Innamā al-mu’minūn ikhwat fa aṣliḥū bayn akhawaykum',
            latinIndo:
                'Sesungguhnya orang-orang mukmin itu bersaudara, maka damaikanlah antara dua saudaramu',
        },
    },
    {
        name: 'Tirmidhi',
        contents: {
            number: 3,
            arab: 'إِنَّ اللَّهَ لَا يَنْظُرُ إِلَى صُوَرِكُمْ وَأَمْوَالِكُمْ وَلَكِنْ يَنْظُرُ إِلَى قُلُوبِكُمْ وَأَعْمَالِكُمْ',
            latin: 'Inna allāh lā yanẓur ilā ṣuvarikum wa amwālikum walākin yanẓur ilā qulūbikum wa a`mālikum',
            latinIndo:
                'Sesungguhnya Allah tidak melihat kepada rupa dan harta kalian, tetapi Dia melihat kepada hati dan amal kalian',
        },
    },
    {
        name: 'Bukhari',
        contents: {
            number: 4,
            arab: 'مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ',
            latin: 'Man kāna yu`minu billāh wa al-yawm al-ākhir falyaqul khayrā aw liyaṣmut',
            latinIndo:
                'Barangsiapa yang beriman kepada Allah dan hari akhir hendaklah dia berkata baik atau diam',
        },
    },
    {
        name: 'Bukhari',
        contents: {
            number: 5,
            arab: 'إِنَّمَا مَثَلُ الْجَلِيسِ الصَّالِحِ وَجَلِيسِ السُّوءِ كَحَامِلِ الْمِسْكِ وَنَافِخِ الْكِيرِ',
            latin: 'Innamā mathalul-jalīs aṣ-ṣāliḥ wa jalīs as-sū’ kaḥāmil al-misk wa nāfik al-kīr',
            latinIndo:
                'Sesungguhnya perumpamaan teman yang baik dan teman yang buruk adalah seperti pembawa minyak wangi dan pandai besi',
        },
    },
    {
        name: 'Tirmidhi',
        contents: {
            number: 6,
            arab: 'إِنَّ الرَّحْمَةَ لَا تَكُونُ إِلَّا فِي الْمُؤْمِنِ',
            latin: 'Inna ar-raḥmah lā takūn illā fī al-mu’min',
            latinIndo: 'Sesungguhnya rahmat hanya ada pada orang mukmin',
        },
    },
    {
        name: 'Ibn Majah',
        contents: {
            number: 7,
            arab: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ رِضَاكَ وَالْجَنَّةَ',
            latin: 'Allāhumma innī as`aluk riḍāk wa al-jannah',
            latinIndo:
                'Ya Allah, sesungguhnya aku memohon keridhaan-Mu dan surga',
        },
    },
    {
        name: "Nasa'i",
        contents: {
            number: 2528,
            arab: '',
            latin: "Dari Abu Hurairah radhiyallahu 'anhu, dia berkata, Rasulullah shallallahu 'alaihi wasallam bersabda: Tiga golongan yang tidak akan diajak bicara oleh Allah pada hari kiamat, yaitu seorang yang sudah tua berzina, orang miskin namun sombong, dan pemimpin yang pendusta.",
            latinIndo:
                'Barangsiapa yang tidak menyayangi maka tidak akan disayangi',
        },
    },
    {
        name: 'Bukhari',
        contents: {
            number: 9,
            arab: 'مَا نَقَصَتْ صَدَقَةٌ مِنْ مَالٍ',
            latin: 'Mā naqṣat ṣadaqah min māl',
            latinIndo: 'Sedekah tidak akan mengurangi harta',
        },
    },
    {
        name: 'Muslim',
        contents: {
            number: 10,
            arab: 'مَنْ أَحَبَّ لِلَّهِ وَأَبْغَضَ لِلَّهِ وَأَعْطَى لِلَّهِ وَمَنَعَ لِلَّهِ فَقَدِ اسْتَكْمَلَ الْإِيمَانَ',
            latin: 'Man aḥabba lillāh wa abghaḍa lillāh wa a`ṭā lillāh wa mana`a lillāh faqad istakmala al-īmān',
            latinIndo:
                'Barangsiapa mencintai karena Allah, membenci karena Allah, memberi karena Allah, dan menahan karena Allah, maka dia telah menyempurnakan iman',
        },
    },
    {
        name: 'Tirmidhi',
        contents: {
            number: 11,
            arab: 'مَنْ صَبَرَ ظَفِرَ',
            latin: 'Man ṣabara ẓafira',
            latinIndo: 'Barangsiapa yang bersabar akan beruntung',
        },
    },
    {
        name: 'Nasai',
        contents: {
            number: 12,
            arab: 'إِنَّ اللَّهَ يُحِبُّ إِذَا عَمِلَ أَحَدُكُمْ عَمَلًا أَنْ يُتْقِنَهُ',
            latin: 'Inna allāh yuḥibb idhā `amila aḥadakum `amalan an yutqinah',
            latinIndo:
                'Sesungguhnya Allah menyukai jika salah seorang dari kalian melakukan pekerjaan, maka dia melakukannya dengan itqan (sungguh-sungguh)',
        },
    },
    {
        name: 'Bukhari',
        contents: {
            number: 13,
            arab: 'خَيْرُ النَّاسِ أَنْفَعُهُمْ لِلنَّاسِ',
            latin: 'Khayr an-nās anfa`uhum li`n-nās',
            latinIndo:
                'Sebaik-baik manusia adalah yang paling bermanfaat bagi manusia lainnya',
        },
    },
]

export async function getRandomHadith(): Promise<Hadith> {
    const randomIndex = Math.floor(Math.random() * hadiths.length)
    return hadiths[randomIndex]
}
