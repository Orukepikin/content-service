// Nigerian States, LGAs and Wards data
// Total: 37 States, 774 LGAs, 8,813 Wards
// Source: https://github.com/afeibukun/nigerian-state-lgas-wards-polling-units

export type Ward = string;

export type LGA = {
    name: string;
    wards: Ward[];
};

export type State = {
    state: string;
    lgas: LGA[];
};

export const nigeriaWardsData: State[] = [
    {
        "state": "Abia",
        "lgas": [
            {
                "name": "Aba North",
                "wards": [
                    "Ariaria Market",
                    "Eziama",
                    "Industrial Area",
                    "Ogbor I",
                    "Ogbor Ii",
                    "Old Aba Gra",
                    "Osusu I",
                    "Osusu Ii",
                    "St Eugenes By Okigwe Rd",
                    "Umuogor",
                    "Umuola",
                    "Uratta"
                ]
            },
            {
                "name": "Aba South",
                "wards": [
                    "Aba River",
                    "Aba Town Hall",
                    "Asa",
                    "Ekeoha",
                    "Enyimba",
                    "Eziukwu",
                    "Gloucester",
                    "Igwebuike",
                    "Mosque",
                    "Ngwa",
                    "Ohazu I",
                    "Ohazu Ii"
                ]
            },
            {
                "name": "Arochukwu",
                "wards": [
                    "Arochukwu I",
                    "Arochukwu Ii",
                    "Arochukwu Iii",
                    "Eleoha Ihechiowa",
                    "Ikwun Ihechiowa",
                    "Isu",
                    "Ohaeke",
                    "Ohafor I",
                    "Ohafor Ii",
                    "Ovukwu",
                    "Ututu"
                ]
            },
            {
                "name": "Bende",
                "wards": [
                    "Amankalu Akoliufu",
                    "Bende",
                    "Igbere A",
                    "Igbere B",
                    "Item A",
                    "Item B",
                    "Item C",
                    "Itumbauzo",
                    "Ozuitem",
                    "Ugwueke Ezeukwu",
                    "Umu Imenyi",
                    "Umuhu Ezechi",
                    "Uzuakoli"
                ]
            },
            {
                "name": "Ikwuano",
                "wards": [
                    "Ariam",
                    "Ibere I",
                    "Ibere Ii",
                    "Oboro I",
                    "Oboro Ii",
                    "Oboro Iii",
                    "Oboro Iv",
                    "Oloko I",
                    "Oloko Ii",
                    "Usaka"
                ]
            },
            {
                "name": "Isiala Ngwa North",
                "wards": [
                    "Amapu Ntigha",
                    "Amasaa Nsulu",
                    "Amasaa Ntigha",
                    "Ihie",
                    "Isiala Nsulu",
                    "Mbawsi Umuomainta",
                    "Ngwa Ukwu I",
                    "Ngwa Ukwu Ii",
                    "Umunna Nsulu",
                    "Umuoha"
                ]
            },
            {
                "name": "Isiala Ngwa South",
                "wards": [
                    "Akunekpu Eziama Na Obuba",
                    "Amaise Amaise Anaba",
                    "Ehina Guru Osokwa",
                    "Mbutu Ngwa",
                    "Mbutu Ukwu",
                    "Ngwaobi",
                    "Okporo Ahaba",
                    "Omoba",
                    "Ovungwu",
                    "Ovuokwu"
                ]
            },
            {
                "name": "Isuikwuato",
                "wards": [
                    "Achara Mgbugwu",
                    "Ezere",
                    "Ikeagha I",
                    "Ikeagha Ii",
                    "Imenyi",
                    "Isiala Amawu",
                    "Isu Amawu",
                    "Ogunduasa",
                    "Umuanyi Absu",
                    "Umunnekwu"
                ]
            },
            {
                "name": "Obingwa",
                "wards": [
                    "Abayi I",
                    "Abayi Ii",
                    "Ahiaba",
                    "Akumaimo",
                    "Alaukwu Ohanze",
                    "Ibeme",
                    "Maboko Amairi",
                    "Mgboko Itungwa",
                    "Mgboko Umuanunu",
                    "Ndiarata Amairinabua",
                    "Ntighauzo Amairi"
                ]
            },
            {
                "name": "Ohafia",
                "wards": [
                    "Agboji Abiriba",
                    "Amaeke Abiriba",
                    "Amaogudu Abiriba",
                    "Ania Ohoafia",
                    "Ebem Ohafia",
                    "Isiama Ohafia",
                    "Ndi Agbo Nkporo",
                    "Ndi Elu Nkporo",
                    "Ndi Etiti Nkporo",
                    "Ohafor Ohoafia",
                    "Okanu Ohoafia"
                ]
            },
            {
                "name": "Osisioma",
                "wards": [
                    "Ama Asaa",
                    "Amaitolu Mbutu Umuojima",
                    "Amasator",
                    "Amator",
                    "Amavo",
                    "Aro Ngwa",
                    "Okpor Umuobo",
                    "Oso Okwa",
                    "Umunneise",
                    "Urtta"
                ]
            },
            {
                "name": "Ugwunagbo",
                "wards": [
                    "Ward Eight",
                    "Ward Five",
                    "Ward Four",
                    "Ward Nine",
                    "Ward One",
                    "Ward Seven",
                    "Ward Six",
                    "Ward Ten",
                    "Ward Three",
                    "Ward Two"
                ]
            },
            {
                "name": "Ukwa West",
                "wards": [
                    "Asa North",
                    "Asa South",
                    "Ipu South",
                    "Ipu East",
                    "Ipu West",
                    "Obokwe",
                    "Obuzor",
                    "Ogwe",
                    "Ozaa West",
                    "Ozaa Ukwu"
                ]
            },
            {
                "name": "Ukwa East",
                "wards": [
                    "Akwete",
                    "Azumini",
                    "Ikwueke West",
                    "Ikwueke East",
                    "Ikwuorie",
                    "Ikwuriator East",
                    "Ikwuriator West",
                    "Nkporobe Ohuru",
                    "Obohia",
                    "Umuigube Achara"
                ]
            },
            {
                "name": "Umu Nneochi",
                "wards": [
                    "Amuda",
                    "Eziama Agbo",
                    "Eziama Ugwu",
                    "Ezingodo",
                    "Mbala Achara",
                    "Ndiawa Umuelem I",
                    "Obinolu Obiagu La",
                    "Ubahu Akawa Arokpa",
                    "Umuaku",
                    "Umuchieze I",
                    "Umuchieze Ii",
                    "Umuchieze Iii"
                ]
            },
            {
                "name": "Umuahia South",
                "wards": [
                    "Ahiaukwu I",
                    "Ahiaukwu Ii",
                    "Amakama",
                    "Ezeleke Ogbodiukwu",
                    "Nsirimo",
                    "Ohiaocha",
                    "Old Umuahia",
                    "Omaegwu",
                    "Ubakala A",
                    "Ubakala B"
                ]
            },
            {
                "name": "Umuahia North",
                "wards": [
                    "Afugiri",
                    "Ibeku East I",
                    "Ibeku East Ii",
                    "Ibeku West",
                    "Isingwu",
                    "Ndume",
                    "Nkwoachara",
                    "Nkwoegwu",
                    "Umuahia Urban I",
                    "Umuahia Urban Ii",
                    "Umuahia Urban Iii",
                    "Umuhu"
                ]
            }
        ]
    },
    {
        "state": "Adamawa",
        "lgas": [
            {
                "name": "Demsa",
                "wards": [
                    "Bille",
                    "Borrong",
                    "Demsa",
                    "Dilli",
                    "Dong",
                    "Dwam",
                    "Gwamba",
                    "Kpasham",
                    "Mbula Kuli",
                    "Nassarawo Demsa"
                ]
            },
            {
                "name": "Fufore",
                "wards": [
                    "Beti",
                    "Farang",
                    "Fufore",
                    "Gurin",
                    "Karlahi",
                    "Mayo Ine",
                    "Pariya",
                    "Ribadu",
                    "Uki Tuki",
                    "Wuro Bokki",
                    "Yadim"
                ]
            },
            {
                "name": "Ganye",
                "wards": [
                    "Bakari Guso",
                    "Gamu",
                    "Ganye I",
                    "Ganye Ii",
                    "Gurum",
                    "Jaggu",
                    "Sangasumi",
                    "Sugu",
                    "Timdore",
                    "Yebbi"
                ]
            },
            {
                "name": "Girei",
                "wards": [
                    "Dakri",
                    "Damare",
                    "Gerei I",
                    "Gereng",
                    "Girei Ii",
                    "Jera Bakari",
                    "Jera Bonyo",
                    "Modire Vinikilang",
                    "Tambo",
                    "Wuro Dole"
                ]
            },
            {
                "name": "Gombi",
                "wards": [
                    "Boga Dingai",
                    "Duwa",
                    "Ga Anda",
                    "Gabun",
                    "Garkida",
                    "Gombi North",
                    "Gombi South",
                    "Guyaku",
                    "Tawa",
                    "Yang"
                ]
            },
            {
                "name": "Guyuk",
                "wards": [
                    "Banjiram",
                    "Bobini",
                    "Bodeno",
                    "Chikila",
                    "Dukul",
                    "Dumna",
                    "Guyuk",
                    "Kola",
                    "Lokoro",
                    "Purokayo"
                ]
            },
            {
                "name": "Hong",
                "wards": [
                    "Bangshika",
                    "Daksiri",
                    "Garaha",
                    "Gaya",
                    "Hildi",
                    "Hong",
                    "Hushere Zum",
                    "Kwarhi",
                    "Mayo Lope",
                    "Shangui",
                    "Thilbang",
                    "Uba"
                ]
            },
            {
                "name": "Jada",
                "wards": [
                    "Danaba",
                    "Jada I",
                    "Jada Ii",
                    "Koma I",
                    "Koma Ii",
                    "Leko",
                    "Mapeo",
                    "Mayokalaye",
                    "Mbulo",
                    "Nyibango",
                    "Yelli"
                ]
            },
            {
                "name": "Lamurde",
                "wards": [
                    "Dubwangun",
                    "Gyawana",
                    "Lafiya",
                    "Lamurde",
                    "Mgbebongun",
                    "Ngbakowo",
                    "Opalo",
                    "Rigange",
                    "Suwa",
                    "Waduku"
                ]
            },
            {
                "name": "Madagali",
                "wards": [
                    "Babel",
                    "Duhu Shuwa",
                    "Gulak",
                    "Hyambula",
                    "K Wuro Ngayandi",
                    "Madagali",
                    "Pallam",
                    "Shelmi Sukur Vapura",
                    "Wagga",
                    "Wula"
                ]
            },
            {
                "name": "Maiha",
                "wards": [
                    "Belel",
                    "Humbutudi",
                    "Konkol",
                    "Maiha Gari",
                    "Manjekin",
                    "Mayonguli",
                    "Pakka",
                    "Sorau A",
                    "Sorau B",
                    "Tambajam"
                ]
            },
            {
                "name": "Mayo Belwa",
                "wards": [
                    "Bajama",
                    "Binyeri",
                    "Gangfada",
                    "Gengle",
                    "Gorobi",
                    "Mayo Farang",
                    "Mayo Belwa",
                    "Nassarawo Jereng",
                    "Ndikong",
                    "Ribadu",
                    "Tola",
                    "Yoffo"
                ]
            },
            {
                "name": "Michika",
                "wards": [
                    "Bazza Margi",
                    "Futudou Futules",
                    "Garta Ghunchi",
                    "Jigalambu",
                    "Madzi",
                    "Michika I",
                    "Michika Ii",
                    "Minkisi Wuro Ngiki",
                    "Moda Dlaka Ghenjuwa",
                    "Munkavicita",
                    "Sina Kamale Kwande",
                    "Sukumu Tillijo",
                    "Thukudou Sufuku Zah",
                    "Tumbara Ngabili",
                    "Vi Boka",
                    "Wamblimi Tilli"
                ]
            },
            {
                "name": "Mubi North",
                "wards": [
                    "Bahuli",
                    "Betso",
                    "Digil",
                    "Kolere",
                    "Lokuwa",
                    "Mayo Bani",
                    "Mijilu",
                    "Muchalla",
                    "Sabon Layi",
                    "Vimtim",
                    "Yelwa"
                ]
            },
            {
                "name": "Mubi South",
                "wards": [
                    "Dirbishi Gandira",
                    "Duvu Chaba Girburum",
                    "Gella",
                    "Gude",
                    "Kwaja",
                    "Lamorde",
                    "Mugulbu Yadafa",
                    "Mujara",
                    "Nassarawo",
                    "Nduku"
                ]
            },
            {
                "name": "Numan",
                "wards": [
                    "Bare",
                    "Bolki",
                    "Gamadio",
                    "Imburu",
                    "Kodomti",
                    "Numan I",
                    "Numan Ii",
                    "Numan Iii",
                    "Sabon Pegi",
                    "Vulpi"
                ]
            },
            {
                "name": "Shelleng",
                "wards": [
                    "Bakta",
                    "Bodwai",
                    "Gundo",
                    "Gwapopolok",
                    "Jumbul",
                    "Ketembere",
                    "Kiri",
                    "Libbo",
                    "Shelleng",
                    "Tallum"
                ]
            },
            {
                "name": "Song",
                "wards": [
                    "Dirma",
                    "Dumne",
                    "Gudu Mboi",
                    "Kilange Funa",
                    "Kilange Hirna",
                    "Sigire",
                    "Song Gari",
                    "Song Waje",
                    "Suktu",
                    "Waltandi",
                    "Zumo"
                ]
            },
            {
                "name": "Toungo",
                "wards": [
                    "Dawo I",
                    "Dawo Ii",
                    "Gumti",
                    "Kiri I",
                    "Kiri Ii",
                    "Kongin Baba I",
                    "Kongin Baba Ii",
                    "Toungo I",
                    "Toungo Ii",
                    "Toungo Iii"
                ]
            },
            {
                "name": "Yola North",
                "wards": [
                    "Ajiya",
                    "Alkalawa",
                    "Doubeli",
                    "Gwadabawa",
                    "Jambutu",
                    "Karena",
                    "Limawa",
                    "Luggere",
                    "Nassarawo",
                    "Rumde",
                    "Yelwa"
                ]
            },
            {
                "name": "Yola South",
                "wards": [
                    "Adarawo",
                    "Bako",
                    "Bole Yolde Pate",
                    "Makama A",
                    "Makama B",
                    "Mbamba",
                    "Mbamoi",
                    "Namtari",
                    "Ngurore",
                    "Toungo",
                    "Yolde Kohi"
                ]
            }
        ]
    },
    {
        "state": "Akwa Ibom",
        "lgas": [
            {
                "name": "Abak",
                "wards": [
                    "Abak Urban 1",
                    "Abak Urban 11",
                    "Abak Urban 111",
                    "Abak Urban 1v",
                    "Afaha Obong 1",
                    "Afaha Obong 11",
                    "Midim 1",
                    "Midim 11",
                    "Otoro 1",
                    "Otoro 11",
                    "Otoro 111"
                ]
            },
            {
                "name": "Eastern Obolo",
                "wards": [
                    "Eastern Obolo 1",
                    "Eastern Obolo 11",
                    "Eastern Obolo 111",
                    "Eastern Obolo 1v",
                    "Eastern Obolo Ix",
                    "Eastern Obolo V",
                    "Eastern Obolo V1",
                    "Eastern Obolo V11",
                    "Eastern Obolo V111",
                    "Eastern Obolo X"
                ]
            },
            {
                "name": "Eket",
                "wards": [
                    "Central 1",
                    "Central 11",
                    "Central 111",
                    "Central 1v",
                    "Central V",
                    "Okon 1",
                    "Okon 11",
                    "Urban 1",
                    "Urban 11",
                    "Urban 111",
                    "Urban 1v"
                ]
            },
            {
                "name": "Esit Eket",
                "wards": [
                    "Akpautong",
                    "Ebe Ekpi",
                    "Ebighi Okpono",
                    "Edor",
                    "Ekpene Obo",
                    "Etebi Akwata",
                    "Etebi Idung Assan",
                    "Ikpa",
                    "Ntak Inyang",
                    "Uquo"
                ]
            },
            {
                "name": "Essien Udim",
                "wards": [
                    "Adiasim",
                    "Afaha",
                    "Ekpeyong 1",
                    "Ekpeyong 11",
                    "Ikpe Annang",
                    "Odoro Ikot 1",
                    "Odoro Ikot 11",
                    "Okon",
                    "Ukana East",
                    "Ukana West 1",
                    "Ukana West 11"
                ]
            },
            {
                "name": "Etim Ekpo",
                "wards": [
                    "Etim Ekpo 1",
                    "Etim Ekpo 11",
                    "Etim Ekpo 111",
                    "Etim Ekpo 1v",
                    "Etim Ekpo Ix",
                    "Etim Ekpo V",
                    "Etim Ekpo V1",
                    "Etim Ekpo V11",
                    "Etim Ekpo V111",
                    "Etim Ekpo X"
                ]
            },
            {
                "name": "Etinan",
                "wards": [
                    "Etinan Urban 1",
                    "Etinan Urban 11",
                    "Etinan Urban 111",
                    "Etinan Urban 1v",
                    "Etinan Urban V",
                    "Northern Iman 1",
                    "Northern Iman 11",
                    "Southern Iman 1",
                    "Southern Iman 11",
                    "Southern Iman 111",
                    "Southern Iman 1v"
                ]
            },
            {
                "name": "Ibeno",
                "wards": [
                    "Ibeno 1",
                    "Ibeno 11",
                    "Ibeno 111",
                    "Ibeno 1v",
                    "Ibeno Ix",
                    "Ibeno V",
                    "Ibeno V11",
                    "Ibeno V111",
                    "Ibeno Vi",
                    "Ibeno X"
                ]
            },
            {
                "name": "Ibesikpo Asutan",
                "wards": [
                    "Asutan 1",
                    "Asutan 11",
                    "Asutan 111",
                    "Asutan 1v",
                    "Asutan V",
                    "Ibesikpo 1",
                    "Ibesikpo 11",
                    "Ibesikpo 111",
                    "Ibesikpo 1v",
                    "Ibesikpo V"
                ]
            },
            {
                "name": "Ibiono Ibom",
                "wards": [
                    "Ibiono Central 1",
                    "Ibiono Central 11",
                    "Ibiono Eastern 1",
                    "Ibiono Eastern 11",
                    "Ibiono Northern 1",
                    "Ibiono Northern 11",
                    "Ibiono Southern 1",
                    "Ibiono Southern 11",
                    "Ibiono Western 1",
                    "Ibiono Western 11",
                    "Ikpanya"
                ]
            },
            {
                "name": "Ika",
                "wards": [
                    "Achan 11",
                    "Achan 111",
                    "Achan Ika",
                    "Ito 1",
                    "Ito 11",
                    "Ito 111",
                    "Odoro 1",
                    "Odoro 11",
                    "Urban 1",
                    "Urban 11"
                ]
            },
            {
                "name": "Ikono",
                "wards": [
                    "1tak",
                    "Ediene 1",
                    "Ediene 11",
                    "Ikono Middle 1",
                    "Ikono Middle 11",
                    "Ikono Middle 111",
                    "Ikono Middle 1v",
                    "Ikono South",
                    "Ndiya Ikot Idana",
                    "Nkwot 1",
                    "Nkwot 11"
                ]
            },
            {
                "name": "Ikot Abasi",
                "wards": [
                    "Edemaya 1",
                    "Edemaya 11",
                    "Edemaya 111",
                    "Ikpa Ibekwe 1",
                    "Ikpa Ibekwe 11",
                    "Ikpa Nung Asang 1",
                    "Ikpa Nung Asang 11",
                    "Ukpum Ete 1",
                    "Ukpum Ete 11",
                    "Ukpum Okon"
                ]
            },
            {
                "name": "Ikot Ekpene",
                "wards": [
                    "Ikot Ekpene 1",
                    "Ikot Ekpene 11",
                    "Ikot Ekpene 111",
                    "Ikot Ekpene 1v",
                    "Ikot Ekpene Ix",
                    "Ikot Ekpene V",
                    "Ikot Ekpene V1",
                    "Ikot Ekpene V11",
                    "Ikot Ekpene V111",
                    "Ikot Ekpene X",
                    "Ikot Ekpene X1"
                ]
            },
            {
                "name": "Ini",
                "wards": [
                    "Ikono North 1",
                    "Ikono North 11",
                    "Ikono North 111",
                    "Ikpe 1",
                    "Ikpe 11",
                    "Itu Mbonuso",
                    "Iwerre",
                    "Nkari",
                    "Odoro Ukwok",
                    "Usuk Ukwok"
                ]
            },
            {
                "name": "Itu",
                "wards": [
                    "East Itam 1",
                    "East Itam 11",
                    "East Itam 111",
                    "East Itam 1v",
                    "East Itam V",
                    "Mbiase Ayadehe",
                    "Oku Iboku",
                    "West Itam 1",
                    "West Itam 11",
                    "West Itam 111"
                ]
            },
            {
                "name": "Mbo",
                "wards": [
                    "Ebughu 1",
                    "Ebughu 11",
                    "Efiat 1",
                    "Efiat 11",
                    "Enwang 1",
                    "Enwang 11",
                    "Ibaka",
                    "Uda 1",
                    "Uda 11",
                    "Udesi"
                ]
            },
            {
                "name": "Mkpat Enin",
                "wards": [
                    "Ibiaku 1",
                    "Ibiaku 11",
                    "Ibiaku 111",
                    "Ikpa Ibom 1",
                    "Ikpa Ibom 11",
                    "Ikpa Ibom 111",
                    "Ikpa Ibom 1v",
                    "Ikpa Ikono 1",
                    "Ikpa Ikono 11",
                    "Ikpa Ikono 111",
                    "Ukpum Minya 1",
                    "Ukpum Minya 11",
                    "Ukpum Minya 111",
                    "Ukpum Minya 1v"
                ]
            },
            {
                "name": "Nsit Atai",
                "wards": [
                    "Eastern Nsit 1",
                    "Eastern Nsit 11",
                    "Eastern Nsit 111",
                    "Eastern Nsit 1v",
                    "Eastern Nsit Ix",
                    "Eastern Nsit V",
                    "Eastern Nsit V1",
                    "Eastern Nsit V11",
                    "Eastern Nsit V111",
                    "Eastern Nsit X"
                ]
            },
            {
                "name": "Nsit Ibom",
                "wards": [
                    "Asang 1",
                    "Asang 11",
                    "Asang 111",
                    "Asang 1v",
                    "Asang V",
                    "Mbaiso 1",
                    "Mbaiso 11",
                    "Mbaiso 111",
                    "Mbaiso 1v",
                    "Mbaiso V"
                ]
            },
            {
                "name": "Nsit Ubium",
                "wards": [
                    "Ibiakpan Obotim 1",
                    "Ibiakpan Obotim 11",
                    "Itreto",
                    "Ndiya",
                    "Ubium North 1",
                    "Ubium North 11",
                    "Ubium North 111",
                    "Ubium South 1",
                    "Ubium South 11",
                    "Ubium South 111"
                ]
            },
            {
                "name": "Obot Akara",
                "wards": [
                    "Ikot Abia 1",
                    "Ikot Abia 11",
                    "Ikot Abia 111",
                    "Nto Edino 1",
                    "Nto Edino 11",
                    "Nto Edino 111",
                    "Nto Edino 1v",
                    "Obot Akara 1",
                    "Obot Akara 11",
                    "Obot Akara 111"
                ]
            },
            {
                "name": "Okobo",
                "wards": [
                    "Akai Mbukpo Udung",
                    "Ekeya",
                    "Eweme 1",
                    "Eweme 11",
                    "Nung Atai Ube 1",
                    "Nung Atai Ube 11",
                    "Offi 1",
                    "Offi 11",
                    "Okopedi 1",
                    "Okopedi 11"
                ]
            },
            {
                "name": "Onna",
                "wards": [
                    "Awa 1",
                    "Awa 11",
                    "Awa 111",
                    "Awa 1v",
                    "Nung Idem 1",
                    "Nung Idem 11",
                    "Oniong East 1",
                    "Oniong East 11",
                    "Oniong East 111",
                    "Oniong West 1",
                    "Oniong West 11",
                    "Oniong West 111"
                ]
            },
            {
                "name": "Oron",
                "wards": [
                    "Oron Urban Ix",
                    "Oron Urban X",
                    "Oron Urban 1",
                    "Oron Urban 11",
                    "Oron Urban 111",
                    "Oron Urban 1v",
                    "Oron Urban V",
                    "Oron Urban V1",
                    "Oron Urban V11",
                    "Oron Urban V111"
                ]
            },
            {
                "name": "Oruk Anam",
                "wards": [
                    "Abak Midim 1",
                    "Abak Midim 11",
                    "Abak Midim 111",
                    "Abak Midim 1v",
                    "Ekparakwa",
                    "Ibesit Nung Ikot 1",
                    "Ibesit Nung Ikot 11",
                    "Ikot Ibritam 1",
                    "Ikot Ibritam 11",
                    "Ndot Ikot Okoro 1",
                    "Ndot Ikot Okoro 11",
                    "Ndot Ikot Okoro 111",
                    "Ndot Ikot Okoro V1"
                ]
            },
            {
                "name": "Udung Uko",
                "wards": [
                    "Udung Uko 1",
                    "Udung Uko 11",
                    "Udung Uko 111",
                    "Udung Uko 1v",
                    "Udung Uko Ix",
                    "Udung Uko V",
                    "Udung Uko V1",
                    "Udung Uko V11",
                    "Udung Uko V111",
                    "Udung Uko X"
                ]
            },
            {
                "name": "Ukanafun",
                "wards": [
                    "Northern Afaha 1",
                    "Northern Afaha 11",
                    "Northern Ukanafun 1",
                    "Northern Ukanafun 11",
                    "Southern Afaha Adat Ifang 1",
                    "Southern Afaha Adat Ifang 11",
                    "Southern Afaha Adat Ifang 111",
                    "Southern Afaha Adat Ifang 1v",
                    "Southern Ukanafun 1",
                    "Southern Ukanafun 11",
                    "Ukanafun Urban"
                ]
            },
            {
                "name": "Uruan",
                "wards": [
                    "Central Uruan 11",
                    "Centyral Uruan 1",
                    "Centyral Uruan 111",
                    "Northern Uruan 1",
                    "Northern Uruan 11",
                    "Southern Uruan 1",
                    "Southern Uruan 11",
                    "Southern Uruan 111",
                    "Southern Uruan Iv",
                    "Southern Uruan V",
                    "Southern Uruan V1"
                ]
            },
            {
                "name": "Urue Offong Oruko",
                "wards": [
                    "Oruko 1",
                    "Oruko 11",
                    "Oruko 111",
                    "Oruko 1v",
                    "Oruko V",
                    "Urue Offong 1",
                    "Urue Offong 11",
                    "Urue Offong 111",
                    "Urue Offong 1v",
                    "Urue Offong V"
                ]
            },
            {
                "name": "Uyo",
                "wards": [
                    "Etoi 1",
                    "Etoi 11",
                    "Ikono 1",
                    "Ikono 11",
                    "Offot 1",
                    "Offot 11",
                    "Oku 1",
                    "Oku 11",
                    "Uyo Urban 1",
                    "Uyo Urban 11",
                    "Uyo Urban 111"
                ]
            }
        ]
    },
    {
        "state": "Anambra",
        "lgas": [
            {
                "name": "Aguata",
                "wards": [
                    "Achina I",
                    "Achina Ii",
                    "Agulueze Chukwu",
                    "Akpo",
                    "Amesi",
                    "Ekwulobia I",
                    "Ekwulobia Ii",
                    "Ezinifite I",
                    "Ezinifite Ii",
                    "Igbo Ukwu Ii",
                    "Igbo Ukwu I",
                    "Ikenga",
                    "Isuofia",
                    "Nkpologwu",
                    "Oreri",
                    "Uga I",
                    "Uga Ii",
                    "Umuchu I",
                    "Umuchu Ii",
                    "Umuona"
                ]
            },
            {
                "name": "Anambra East",
                "wards": [
                    "Aguleri",
                    "Aguleri Ii",
                    "Enugwu Otu",
                    "Eziagulu Otu",
                    "Igbariam",
                    "Nando I",
                    "Nando Ii",
                    "Nando Iii",
                    "Nsugbe I",
                    "Nsugbe Ii",
                    "Otuocha I",
                    "Otuocha Ii",
                    "Umuleri Ii",
                    "Umuoba Anam",
                    "Umureli I"
                ]
            },
            {
                "name": "Anambra West",
                "wards": [
                    "Ezi Anam",
                    "Ifite Anam",
                    "Nzam",
                    "Olumbanasa Ode",
                    "Olumbanasa Inoma",
                    "Oroma Etiti Anam",
                    "Umuenwelum Anam",
                    "Umueze Anam I",
                    "Umueze Anam Ii",
                    "Umuoba Anam"
                ]
            },
            {
                "name": "Anaocha",
                "wards": [
                    "Adazi Ani I",
                    "Adazi Ani Ii",
                    "Adazi Enu I",
                    "Adazi Enu Ii",
                    "Adazi Nnukwu I",
                    "Adazi Nnukwu Ii",
                    "Agulu Iv",
                    "Agulu I",
                    "Agulu Ii",
                    "Agulu Iii",
                    "Agulu Uzoigbo",
                    "Akwaeze",
                    "Ichida I",
                    "Ichida Ii",
                    "Neni I",
                    "Neni Ii",
                    "Nri I",
                    "Nri Ii",
                    "Obeledu"
                ]
            },
            {
                "name": "Awka North",
                "wards": [
                    "Achalla I",
                    "Achalla I1",
                    "Achalla I1i",
                    "Amansea",
                    "Amanuke",
                    "Awba Ofemmili",
                    "Ebenebe I",
                    "Ebenebe Ii",
                    "Ebenebe Iii",
                    "Isu Aniocha",
                    "Mabakwu I Anezike",
                    "Ugbene",
                    "Ugbenu",
                    "Urum"
                ]
            },
            {
                "name": "Awka South",
                "wards": [
                    "Agu Oka",
                    "Amawbia I",
                    "Amawbia Ii",
                    "Amawbia Iii",
                    "Awka I",
                    "Awka Ii",
                    "Awka Iii",
                    "Awka Iv",
                    "Awka V",
                    "Awka Vi",
                    "Awka Vii",
                    "Ezinato Isiagu",
                    "Mba Ukwu",
                    "Nibo I",
                    "Nibo Ii",
                    "Nibo Iii",
                    "Nise I",
                    "Nise Ii",
                    "Okpuno",
                    "Umuawulu"
                ]
            },
            {
                "name": "Ayamelum",
                "wards": [
                    "Anaku",
                    "Ifite Ogwari I",
                    "Ifite Ogwari Ii",
                    "Igbakwu",
                    "Omasi",
                    "Omor I",
                    "Omor Ii",
                    "Omor Iii",
                    "Ume Rum",
                    "Umueje Umueje",
                    "Umumbo"
                ]
            },
            {
                "name": "Dunukofia",
                "wards": [
                    "Akwa",
                    "Ifitedunu I",
                    "Ifitedunu Ii",
                    "Nawgu I",
                    "Nawgu Ii",
                    "Ukpo I",
                    "Ukpo Ii",
                    "Ukpo Iii",
                    "Ukwulu I",
                    "Ukwulu Ii",
                    "Umudioka I",
                    "Umudioka Ii",
                    "Umunnachi I",
                    "Umunnachi Ii"
                ]
            },
            {
                "name": "Ekwusigo",
                "wards": [
                    "Amakwa Ii",
                    "Ichi",
                    "Ihembosi Anaubahu",
                    "Ihiteoha",
                    "Oraifite I",
                    "Oraifite Ii",
                    "Oraifite Iii",
                    "Ozubulu I",
                    "Ozubulu Ii",
                    "Ozubulu Iii",
                    "Ozubulu Iv",
                    "Ozubulu V"
                ]
            },
            {
                "name": "Idemili North",
                "wards": [
                    "Abacha",
                    "Abatete",
                    "Eziowele",
                    "Ideani",
                    "Nkpor I",
                    "Nkpor Ii",
                    "Obosi",
                    "Ogidi I",
                    "Ogidi Ii",
                    "Oraukwu",
                    "Uke",
                    "Umuoji"
                ]
            },
            {
                "name": "Idemili South",
                "wards": [
                    "Akwukwu",
                    "Alor I",
                    "Alor Ii",
                    "Awka Etiti I",
                    "Awka Etiti Ii",
                    "Nnobi Iii",
                    "Nnobi I",
                    "Nnobi Ii",
                    "Nnokwa",
                    "Oba I",
                    "Oba Ii",
                    "Ojoto"
                ]
            },
            {
                "name": "Ihiala",
                "wards": [
                    "Amamu I",
                    "Amamu Ii",
                    "Amorka",
                    "Azia",
                    "Ihite",
                    "Isseke",
                    "Lilu",
                    "Mbosi",
                    "Ogbolo",
                    "Okija I",
                    "Okija Ii",
                    "Okija Iii",
                    "Okija Iv",
                    "Okija V",
                    "Orsumoghu",
                    "Ubuluisiuzo",
                    "Uli I",
                    "Uli Ii",
                    "Uli Iii",
                    "Uzoakwa"
                ]
            },
            {
                "name": "Njikoka",
                "wards": [
                    "Abagana I",
                    "Abagana Ii",
                    "Abagana Iii",
                    "Abagana Iv",
                    "Abba I",
                    "Abba Ii",
                    "Enugwu Ukwu I",
                    "Enugwu Ukwu Ii",
                    "Enugwu Ukwu Iii",
                    "Enugwu Ukwu Iv",
                    "Enugwu Agidi I",
                    "Enugwu Agidi Ii",
                    "Nawfia I",
                    "Nawfia Ii",
                    "Nimo I",
                    "Nimo Ii",
                    "Nimo Iii",
                    "Nimo Iv"
                ]
            },
            {
                "name": "Nnewi North",
                "wards": [
                    "Nnewi Ichi I",
                    "Nnewi Ichi Ii",
                    "Otolo I",
                    "Otolo Iii",
                    "Otolo Ii",
                    "Umudim I",
                    "Umudim Ii",
                    "Uruagu I",
                    "Uruagu Ii",
                    "Uruagu Iii"
                ]
            },
            {
                "name": "Nnewi South",
                "wards": [
                    "Akwa Ihedi",
                    "Amichi I",
                    "Amichi Ii",
                    "Amichi Iii",
                    "Azuigbo",
                    "Ebenator",
                    "Ekwulumili",
                    "Ezinifite",
                    "Ezinifite I",
                    "Ezinifite Ii",
                    "Ezinifite Iii",
                    "Osumenyi I",
                    "Osumenyi Ii",
                    "Ukpor I",
                    "Ukpor Ii",
                    "Ukpor Iii",
                    "Ukpor Iv",
                    "Ukpor V",
                    "Ukpor Vi",
                    "Unubi",
                    "Utuh"
                ]
            },
            {
                "name": "Ogbaru",
                "wards": [
                    "Akili Ozizor",
                    "Akili Ogidi Obeagwe",
                    "Atani I",
                    "Atani Ii",
                    "Iyiowa Odekpe Ohita",
                    "Ochuche Umuodu Ogbakuba Amiyi",
                    "Ogwu Ikpele",
                    "Ogwuaniocha",
                    "Okpoko I",
                    "Okpoko Ii",
                    "Okpoko Iii",
                    "Okpoko Iv",
                    "Okpoko V",
                    "Okpoko Vi",
                    "Ossomala",
                    "Umunankwo Mputu"
                ]
            },
            {
                "name": "Onitsha North",
                "wards": [
                    "American Quarters",
                    "G R A",
                    "Inland Town I",
                    "Inland Town Ii",
                    "Inland Town Iii",
                    "Inland Town Iv",
                    "Inland Town V",
                    "Inland Town Vi",
                    "Inland Town Vii",
                    "Inland Town Viii",
                    "Ogbe Umuonicha",
                    "Trans Nkisi",
                    "Water Side Central 1",
                    "Water Side Central Ii",
                    "Woluwo Layout"
                ]
            },
            {
                "name": "Onitsha South",
                "wards": [
                    "Bridge Head I",
                    "Bridge Head Ii",
                    "Bridge Head Iii",
                    "Fegge 1",
                    "Fegge 1v",
                    "Fegge Ii",
                    "Fegge Iii",
                    "Fegge V",
                    "Fegge Vi",
                    "Fegge Vii",
                    "Odoakpu I",
                    "Odoakpu Ii",
                    "Odoakpu Iii",
                    "Odoakpu Iv",
                    "Odoakpu V",
                    "Odoakpu Vi",
                    "Odoakpu Vii"
                ]
            },
            {
                "name": "Orumba South",
                "wards": [
                    "Agbudu",
                    "Akpu",
                    "Enugu Umonyia",
                    "Eziagu",
                    "Ezira",
                    "Ihite",
                    "Isulo",
                    "Nawfija",
                    "Nkerehi",
                    "Ogboji",
                    "Ogbunka I",
                    "Ogbunka Ii",
                    "Owerre Ezukala I",
                    "Owerre Ezukala Ii",
                    "Umunze I",
                    "Umunze Ii",
                    "Umunze Iii",
                    "Umuomaku"
                ]
            },
            {
                "name": "Orumba North",
                "wards": [
                    "Ajalli I Obinikpa And Umueve",
                    "Ajalli Ii Umuabiama And Amaga",
                    "Amaetiti",
                    "Amaokpala Omogho",
                    "Awa",
                    "Awgbu I",
                    "Awgbu Ii",
                    "Nanka I",
                    "Nanka Ii",
                    "Ndi Okpalaeze",
                    "Ndikelionwu",
                    "Ndiokolo Ndiokpaleke",
                    "Ndiowu",
                    "Ndiukwuenu Okpeze",
                    "Oko Ii",
                    "Oko I",
                    "Ufuma I",
                    "Ufuma Ii"
                ]
            },
            {
                "name": "Oyi",
                "wards": [
                    "Awkuzu I",
                    "Awkuzu Ii",
                    "Awkuzu Iii",
                    "Awkuzu Iv",
                    "Nkwelle Ezunaka I",
                    "Nkwelle Ezunaka Ii",
                    "Nteje I",
                    "Nteje Ii",
                    "Nteje Iii",
                    "Nteje Iv",
                    "Nteje V",
                    "Ogbunike I",
                    "Ogbunike Ii",
                    "Umunya I",
                    "Umunya Ii"
                ]
            }
        ]
    },
    {
        "state": "Abuja",
        "lgas": [
            {
                "name": "Abaji",
                "wards": [
                    "Abaji Central",
                    "Abaji North East",
                    "Abaji South East",
                    "Agyana Pandagi",
                    "Alu Mamagi",
                    "Gawu",
                    "Gurdi",
                    "Nuku",
                    "Rimba Ebagi",
                    "Yaba"
                ]
            },
            {
                "name": "Abuja Municipal",
                "wards": [
                    "City Centre",
                    "Garki",
                    "Gui",
                    "Gwagwa",
                    "Gwarinpa",
                    "Jiwa",
                    "Kabusa",
                    "Karshi",
                    "Karu",
                    "Nyanya",
                    "Orozo",
                    "Wuse"
                ]
            },
            {
                "name": "Bwari",
                "wards": [
                    "Bwari Central",
                    "Byazhin",
                    "Dutse Alhaji",
                    "Igu",
                    "Kawu",
                    "Kubwa",
                    "Kuduru",
                    "Shere",
                    "Ushafa",
                    "Usuma"
                ]
            },
            {
                "name": "Gwagwalada",
                "wards": [
                    "Dobi",
                    "Gwagwalada Centre",
                    "Gwako",
                    "Ibwa",
                    "Ikwa",
                    "Kutunku",
                    "Paiko",
                    "Staff Quarters",
                    "Tungan Maje",
                    "Zuba"
                ]
            },
            {
                "name": "Kuje",
                "wards": [
                    "Chibiri",
                    "Gaube",
                    "Gudun Karya",
                    "Gwargwada",
                    "Kabi",
                    "Kuje",
                    "Kujekwa",
                    "Kwaku",
                    "Rubochi",
                    "Yenche"
                ]
            },
            {
                "name": "Kwali",
                "wards": [
                    "Ashara",
                    "Dafa",
                    "Gumbo",
                    "Kilankwa",
                    "Kundu",
                    "Kwali Ward",
                    "Pai",
                    "Wako",
                    "Yangoji",
                    "Yebu"
                ]
            }
        ]
    },
    {
        "state": "Bauchi",
        "lgas": [
            {
                "name": "Alkaleri",
                "wards": [
                    "Alkaleri",
                    "Birin Gigara Yankari",
                    "Dan Kungibar",
                    "Futuk",
                    "Gar",
                    "Gwana Mansur",
                    "Gwaram",
                    "Maimadi",
                    "Pali",
                    "Yalo",
                    "Yuli Lim"
                ]
            },
            {
                "name": "Bauchi",
                "wards": [
                    "Birshi Miri",
                    "Dan Iya Hardo",
                    "Dandango Yamrat",
                    "Dawaki",
                    "Galambi Gwaskwaram",
                    "Kangyare Turwun",
                    "Kundum Durum",
                    "Majidadi A",
                    "Majidadi B",
                    "Makama Sarki Baki",
                    "Mun Munsal",
                    "Zungur Liman Katagum"
                ]
            },
            {
                "name": "Bogoro",
                "wards": [
                    "B O I A",
                    "B O I B",
                    "B O I C",
                    "Bogoro A",
                    "Bogoro B",
                    "Bogoro C",
                    "Bogoro D",
                    "Lusa A",
                    "Lusa B",
                    "Lusa C"
                ]
            },
            {
                "name": "Dambam",
                "wards": [
                    "Dagauda",
                    "Dambam",
                    "Gargawa",
                    "Garuza",
                    "Gurbana",
                    "Jalam Central",
                    "Jalam East",
                    "Yame",
                    "Yanda",
                    "Zaura"
                ]
            },
            {
                "name": "Darazo",
                "wards": [
                    "Darazo",
                    "Gabarin",
                    "Gabciyari",
                    "Konkiyal",
                    "Lago",
                    "Lanzai",
                    "Papa",
                    "Sade",
                    "Tauya",
                    "Wahu",
                    "Yautare"
                ]
            },
            {
                "name": "Dass",
                "wards": [
                    "Bagel Bajar",
                    "Baraza",
                    "Bundot",
                    "Bununu Central",
                    "Bununu South",
                    "Dott",
                    "Durr",
                    "Polchi",
                    "Wandi",
                    "Zumbul Lukshi"
                ]
            },
            {
                "name": "Gamawa",
                "wards": [
                    "Alagarno Jadori",
                    "Gadiya",
                    "Gamawa",
                    "Gololo",
                    "Kafin Romi",
                    "Kubdiya",
                    "Raga",
                    "Tarmasuwa",
                    "Tumbi",
                    "Udubo",
                    "Zindi"
                ]
            },
            {
                "name": "Ganjuwa",
                "wards": [
                    "Ganjuwa",
                    "Gungura",
                    "Kafin Madaki",
                    "Kariya",
                    "Kubi East",
                    "Kubi West",
                    "Miya East",
                    "Miya West",
                    "Nasarawa South",
                    "Nasarawa North",
                    "Yali"
                ]
            },
            {
                "name": "Giade",
                "wards": [
                    "Chinkani",
                    "Doguwa South",
                    "Doguwa Central",
                    "Giade",
                    "Isawa",
                    "Sabon Sara",
                    "U Zum A",
                    "Uzum B",
                    "Zabi",
                    "Zirrami"
                ]
            },
            {
                "name": "Itas Gadau",
                "wards": [
                    "Abdallawa Magarya",
                    "Bambal",
                    "Bilkicheri",
                    "Buzawa",
                    "Gadau",
                    "Gwarai",
                    "Itas",
                    "Kashuri",
                    "Mashema",
                    "Zubuki"
                ]
            },
            {
                "name": "Jama'are",
                "wards": [
                    "Dogon Jeji A",
                    "Dogon Jeji B",
                    "Dogon Jeji C",
                    "Galdimari",
                    "Hanafari",
                    "Jama Are A",
                    "Jama Are B",
                    "Jama Are C",
                    "Jama Are D",
                    "Jurara"
                ]
            },
            {
                "name": "Katagum",
                "wards": [
                    "Bulkachuwa Dagaro",
                    "Buskuri",
                    "Chinade",
                    "Gambaki Bidir",
                    "Madachi Gangai",
                    "Madangala",
                    "Madara",
                    "Nasarawa Bakin Kasuwa",
                    "Ragwam Magonshi",
                    "Tsakuwa Kofar Gabas Kofar Kuka",
                    "Yayu"
                ]
            },
            {
                "name": "Kirfi",
                "wards": [
                    "Badara",
                    "Bara",
                    "Beni A",
                    "Beni B",
                    "Dewu Central",
                    "Dewu East",
                    "Kirfi",
                    "Shango",
                    "Tubule",
                    "Wanka"
                ]
            },
            {
                "name": "Misau",
                "wards": [
                    "Ajilin Gugulin",
                    "Beti",
                    "Gwaram",
                    "Hardawa",
                    "Jarkasa",
                    "Kukadi Gundari",
                    "Sarma Akuyam",
                    "Sirko",
                    "Tofu",
                    "Zadawa"
                ]
            },
            {
                "name": "Ningi",
                "wards": [
                    "Balma",
                    "Bashe",
                    "Burra Kyata",
                    "Dingis",
                    "Jangu",
                    "Kudu Yamma",
                    "Kurmi",
                    "Nasaru",
                    "Ningi",
                    "Sama",
                    "Tiffi Guda"
                ]
            },
            {
                "name": "Shira",
                "wards": [
                    "Andubun",
                    "Beli Gagidaba",
                    "Bukul Bangire",
                    "Disina",
                    "Faggo",
                    "Kilbori",
                    "Sambuwal",
                    "Shira",
                    "Tsafi",
                    "Tumfafi",
                    "Zubo"
                ]
            },
            {
                "name": "Tafawa Balewa",
                "wards": [
                    "Ball",
                    "Bula",
                    "Bununu",
                    "Dajin",
                    "Dull",
                    "Kardam A",
                    "Kardam B",
                    "Lere South",
                    "Lere North",
                    "Tapshin",
                    "Wai"
                ]
            },
            {
                "name": "Toro",
                "wards": [
                    "Jama A Zaranda",
                    "Lame",
                    "Mara Palama",
                    "Rahama",
                    "Rauta Geji",
                    "Ribina",
                    "Tama",
                    "Tilden Fulani",
                    "Toro Tulai",
                    "Wonu",
                    "Zalau Rishi"
                ]
            },
            {
                "name": "Warji",
                "wards": [
                    "Baima South East",
                    "Baima North West",
                    "Dagu East",
                    "Dagu West",
                    "Gabanga",
                    "Katanga",
                    "Kilbori",
                    "Rangan",
                    "Tiyin",
                    "Tudun Wada West"
                ]
            },
            {
                "name": "Zaki",
                "wards": [
                    "Alangawari Kafin Larabawa",
                    "Bursali",
                    "Gumai",
                    "Katagum",
                    "Mainako",
                    "Maiwa",
                    "Makawa",
                    "Murmur South",
                    "Murmur North",
                    "Sakwa",
                    "Tashena Gadai"
                ]
            }
        ]
    },
    {
        "state": "Bayelsa",
        "lgas": [
            {
                "name": "Brass",
                "wards": [
                    "Brass 1",
                    "Brass Ward Ii",
                    "Cape Farmosa",
                    "Ewoama Fantuo",
                    "Konsho",
                    "Minibie",
                    "Odioma Diema",
                    "Okpoama",
                    "Os Inibiri",
                    "Sangana"
                ]
            },
            {
                "name": "Ekeremor",
                "wards": [
                    "Eduwini I",
                    "Eduwini Ii",
                    "Oporomor I",
                    "Oporomor Ii",
                    "Oporomor Iii",
                    "Oporomor Iv",
                    "Oporomor V",
                    "Oyiakiri I",
                    "Oyiakiri Ii",
                    "Oyiakiri Iii",
                    "Oyiakiri Iv",
                    "Tarakiri"
                ]
            },
            {
                "name": "Kolokuma Opokuma",
                "wards": [
                    "Igbedi",
                    "Kaiama",
                    "Kaiama Olobiri",
                    "Odi Central Ii",
                    "Odi North I",
                    "Odi South Iii",
                    "Okoloba Sabagreia Ii",
                    "Opokuma North",
                    "Opokumasouth",
                    "Sampou Kalama",
                    "Seibokorogha Sabagreia 1"
                ]
            },
            {
                "name": "Nembe",
                "wards": [
                    "Bassambiri 1",
                    "Bassambiri 11",
                    "Bassambiri 111",
                    "Bassambiri 1v",
                    "Igbeta Ewoama Fantuo",
                    "Ikensi",
                    "Mini",
                    "Ogbolomabiri 1",
                    "Ogbolomabiri 11",
                    "Ogbolomabiri 111",
                    "Okoroma 1",
                    "Okoroma 11",
                    "Oluasiri"
                ]
            },
            {
                "name": "Ogbia",
                "wards": [
                    "Anyama",
                    "Emeyal",
                    "Imiringi",
                    "Kolo",
                    "Ogbia",
                    "Okodi",
                    "Ologi",
                    "Oloibiri",
                    "Opume",
                    "Otakeme",
                    "Otuabula",
                    "Otuasega",
                    "Otuokpoti"
                ]
            },
            {
                "name": "Sagbama",
                "wards": [
                    "Adagbabiri",
                    "Adoni",
                    "Agbere",
                    "Agoro",
                    "Angalabiri",
                    "Asamabiri",
                    "Ebedebiri",
                    "Ofoni I",
                    "Ofoni Ii",
                    "Osekwenike",
                    "Ossiama",
                    "Sagbama",
                    "Toru Ebeni",
                    "Trofani"
                ]
            },
            {
                "name": "Southern Ijaw",
                "wards": [
                    "Amassoma I",
                    "Amassoma Ii",
                    "Amassoma Iii",
                    "Apoi",
                    "Central Boma I",
                    "Central Boma Ii",
                    "East Boma I",
                    "East Boma Ii",
                    "Foropa",
                    "Koluama",
                    "Olodiama I",
                    "Olodiama Ii",
                    "Oporoma Ii",
                    "Oporoma 1",
                    "Otuan",
                    "Ukubie",
                    "West Boma"
                ]
            },
            {
                "name": "Yenagoa",
                "wards": [
                    "Attissa I",
                    "Attissa Ii",
                    "Attissa Iii",
                    "Biseni 1",
                    "Biseni 11",
                    "Ekpetiama 11",
                    "Ekpetiama I",
                    "Epie 11",
                    "Epie I",
                    "Epie Iii",
                    "Gbarain I",
                    "Gbarain Ii",
                    "Gbarain Iii",
                    "Okordia",
                    "Zarama"
                ]
            }
        ]
    },
    {
        "state": "Benue",
        "lgas": [
            {
                "name": "Ado",
                "wards": [
                    "Akoge Ogbilolo",
                    "Apa",
                    "Ekile",
                    "Igumale I",
                    "Igumale Ii",
                    "Ijigban",
                    "Ogege",
                    "Royongo",
                    "Ukwonyo",
                    "Ulayi"
                ]
            },
            {
                "name": "Agatu",
                "wards": [
                    "Egba",
                    "Enungba",
                    "Obagaji",
                    "Odugbeho",
                    "Ogbaulu",
                    "Ogwule Ogbaulu",
                    "Ogwule Kaduna",
                    "Okokolo",
                    "Oshigbudu",
                    "Usha"
                ]
            },
            {
                "name": "Apa",
                "wards": [
                    "Akpete Ojantelle",
                    "Auke",
                    "Edikwu I",
                    "Edikwu Ii",
                    "Igah Okpaya",
                    "Igoro",
                    "Ikobi",
                    "Oba",
                    "Ofoke",
                    "Oiji",
                    "Ugbokpo"
                ]
            },
            {
                "name": "Buruku",
                "wards": [
                    "Binev",
                    "Etulo",
                    "Mbaade",
                    "Mbaakura",
                    "Mbaapen",
                    "Mbaatirkyaa",
                    "Mbaazagee",
                    "Mbaikyongo Nyifon",
                    "Mbaityough",
                    "Mbakyaan",
                    "Mbaya",
                    "Mbayaka",
                    "Shorov"
                ]
            },
            {
                "name": "Gboko",
                "wards": [
                    "Gbk Central Market",
                    "Gboko East",
                    "Gboko North West",
                    "Gboko South",
                    "Igyorov",
                    "Mbaa Varakaa",
                    "Mbaanku",
                    "Mbadam",
                    "Mbadim",
                    "Mbakper",
                    "Mbakwen",
                    "Mbatan",
                    "Mbatser",
                    "Mbatyu",
                    "Ukpekpe",
                    "Yandev North",
                    "Yandev South"
                ]
            },
            {
                "name": "Guma",
                "wards": [
                    "Abinsi",
                    "Kaambe",
                    "Mbabai",
                    "Mbadwem",
                    "Mbawa",
                    "Mbayer Yandev",
                    "Nyiev",
                    "Nzorov",
                    "Saghev",
                    "Uvir"
                ]
            },
            {
                "name": "Gwer East",
                "wards": [
                    "Akpach Ayi",
                    "Aliade Town",
                    "Gbemacha",
                    "Ikyogbajir",
                    "Ikyonov",
                    "Mbabur",
                    "Mbaiase",
                    "Mbaikyaan",
                    "Mbaikyu",
                    "Mbalom",
                    "Mbasombo",
                    "Mbayom",
                    "Shough",
                    "Ugee"
                ]
            },
            {
                "name": "Gwer West",
                "wards": [
                    "Avihijime",
                    "Gaambe Ushin",
                    "Gbaange Tongov",
                    "Ikyaghev",
                    "Isambe Mbasev",
                    "Ityoughatee Injaha",
                    "Mbabuande",
                    "Mbachohon",
                    "Mbanyamshi",
                    "Mbapa",
                    "Merkyen",
                    "Sagher Ukusu",
                    "Sengev",
                    "Sengev Yengev",
                    "Tijime"
                ]
            },
            {
                "name": "Katsina Ala",
                "wards": [
                    "Ikurav Tiev I",
                    "Ikurav Tiev Ii",
                    "Iwar Tongov I",
                    "Katsina Ala Town",
                    "Mbacher",
                    "Mbajir",
                    "Mbatula Mberev",
                    "Mbayongo",
                    "Michihe",
                    "Tiir Tongov Ii",
                    "Utange",
                    "Yooyo"
                ]
            },
            {
                "name": "Konshisha",
                "wards": [
                    "Ikyurav Mbatwer",
                    "Mbagusa Mbatser",
                    "Mbaikyase",
                    "Mbaiwarnyam",
                    "Mbake",
                    "Mbanor",
                    "Mbatsen",
                    "Mbavoa",
                    "Mbawar",
                    "Mbayegh Mbaikyer",
                    "Tse Agberagba"
                ]
            },
            {
                "name": "Kwande",
                "wards": [
                    "Adikpo Metropolis",
                    "Kumakwagh",
                    "Liev I",
                    "Liev Ii",
                    "Mbadura",
                    "Mbagba Mbaikyan",
                    "Mbaikyor",
                    "Mbaketsa",
                    "Mbayoo",
                    "Menev",
                    "Moon",
                    "Tondov I",
                    "Tondov Ii",
                    "Usar",
                    "Yaav"
                ]
            },
            {
                "name": "Logo",
                "wards": [
                    "Mbadyul",
                    "Mbagber",
                    "Mbater",
                    "Mbavuur",
                    "Mbayam",
                    "Nenzev",
                    "Tombo",
                    "Turan",
                    "Ukembergya Iswarev",
                    "Yonov"
                ]
            },
            {
                "name": "Makurdi",
                "wards": [
                    "Agan",
                    "Ankpa Wadata",
                    "Bar",
                    "Central South Mission",
                    "Clerks Market",
                    "Fildi",
                    "Mbalagh",
                    "Modern Market",
                    "North Bank I",
                    "North Bank Ii",
                    "Wailomayo"
                ]
            },
            {
                "name": "Obi",
                "wards": [
                    "Adiko",
                    "Adum West",
                    "Ikwokwu",
                    "Irabi",
                    "Itogo",
                    "Obarike",
                    "Obeko",
                    "Odiapa",
                    "Ogore",
                    "Okpokwu",
                    "Okwutungbe",
                    "Orihi"
                ]
            },
            {
                "name": "Ogbadibo",
                "wards": [
                    "Ai Oodo I",
                    "Ai Oodo Ii",
                    "Ai Oono I",
                    "Ai Oono Ii",
                    "Ai Oono Iii",
                    "Ehaje I",
                    "Ehaje Ii",
                    "Itabono I",
                    "Itabono Ii",
                    "Olachagbaha",
                    "Orokam I",
                    "Orokam Ii",
                    "Orokam Iii"
                ]
            },
            {
                "name": "Ohimini",
                "wards": [
                    "Agadagba",
                    "Awume Ehaje",
                    "Awume Icho",
                    "Ehatokpe",
                    "Idekpa",
                    "Ochobo",
                    "Oglewu Ehaje",
                    "Oglewu Icho",
                    "Onyagede Icho Ogoli",
                    "Onyagede Ehaje Alle"
                ]
            },
            {
                "name": "Oju",
                "wards": [
                    "Adokpa",
                    "Ainu",
                    "Ibilla",
                    "Idelle",
                    "Iyeche",
                    "Oboru Oye",
                    "Oju",
                    "Okpokpo",
                    "Okwudu",
                    "Owo",
                    "Ukpa Ainu Ette"
                ]
            },
            {
                "name": "Okpokwu",
                "wards": [
                    "Amejo",
                    "Eke",
                    "Ichama Ii",
                    "Ojigo",
                    "Ojoga",
                    "Okonobo",
                    "Okpaile Ingle",
                    "Okpoga Central",
                    "Okpoga North",
                    "Okpoga South",
                    "Okpoga West",
                    "Ugbokolo"
                ]
            },
            {
                "name": "Otukpo",
                "wards": [
                    "Adoka Haje",
                    "Adoka Icho",
                    "Allan",
                    "Entekpa",
                    "Ewulo",
                    "Okete",
                    "Otobi",
                    "Otukpo Town Central",
                    "Otukpo Town East",
                    "Otukpo Town West",
                    "Ugboju Ehaje",
                    "Ugboju Icho",
                    "Ugboju Otahe"
                ]
            },
            {
                "name": "Tarka",
                "wards": [
                    "Mbaajir Akaa",
                    "Mbaayo",
                    "Mbachaver Ikyondo",
                    "Mbaigba",
                    "Mbaikyaa",
                    "Mbaikyo Mbayia",
                    "Mbakwakem",
                    "Mbanyagber",
                    "Shitile",
                    "Tongov"
                ]
            },
            {
                "name": "Ukum",
                "wards": [
                    "Aterayange",
                    "Azendeshi",
                    "Borikyo",
                    "Ityuluv",
                    "Kendev",
                    "Kundav",
                    "Lumbuv",
                    "Mbatian",
                    "Mbayenge",
                    "Mbazun",
                    "Tsaav",
                    "Ugbaam",
                    "Uyam"
                ]
            },
            {
                "name": "Ushongo",
                "wards": [
                    "Atikyese",
                    "Ikyov",
                    "Lessel",
                    "Mbaaka",
                    "Mbaanyam",
                    "Mbagba",
                    "Mbagwaza",
                    "Mbagwe",
                    "Mbakuha",
                    "Mbayegh",
                    "Utange"
                ]
            },
            {
                "name": "Vandeikya",
                "wards": [
                    "Mbadede",
                    "Mbagbam",
                    "Mbagbera",
                    "Mbajor",
                    "Mbakaange",
                    "Mbakyaha",
                    "Mbanyumangbagh",
                    "Mbatyough",
                    "Mbayongo",
                    "Ningev",
                    "Tsambe",
                    "Vandeikya Township"
                ]
            }
        ]
    },
    {
        "state": "Borno",
        "lgas": [
            {
                "name": "Abadam",
                "wards": [
                    "Arege",
                    "Banowa",
                    "Fuguwa",
                    "Jabullam",
                    "Kudokurgu",
                    "Malam Kaunari",
                    "Mallamfatori Kessa",
                    "Yau",
                    "Yawa Kura",
                    "Yituwa"
                ]
            },
            {
                "name": "Askira Uba",
                "wards": [
                    "Askira East",
                    "Chul Rumirgo",
                    "Dille Huyum",
                    "Husara Tampul",
                    "Kopa Multhafu",
                    "Lassa",
                    "Mussa",
                    "Ngohi",
                    "Ngulde",
                    "Uba",
                    "Uda Uvu",
                    "Wamdeo Giwi",
                    "Zadawa Hausari"
                ]
            },
            {
                "name": "Bama",
                "wards": [
                    "Andara Ajiri Wulba",
                    "Buduwa Bula Chirabe",
                    "Dipchari Jere Dar Jamal Kotembe",
                    "Gulumba Jukkuri Batra",
                    "Kasugula",
                    "Kumshe Nduguno",
                    "Lawanti Malam Mastari Abbaram",
                    "Marka Malge Amchaka",
                    "Mbuliya Goniri Siraja",
                    "Sabsabwa Soye Bulongu",
                    "Shehuri Hausari Mairi",
                    "Wulbari Ndine Chachile",
                    "Yabiri Kura Yabiri Gana Chongolo",
                    "Zangeri Kash Kash"
                ]
            },
            {
                "name": "Bayo",
                "wards": [
                    "Balbaya",
                    "Briyel",
                    "Fikayel",
                    "Gamadadi",
                    "Jara Dali",
                    "Jara Gol",
                    "Limanti",
                    "Teli",
                    "Wuyo",
                    "Zara"
                ]
            },
            {
                "name": "Biu",
                "wards": [
                    "Buratai",
                    "Dadin Kowa",
                    "Dugja",
                    "Garubula",
                    "Gur",
                    "Kenken",
                    "Mandara Girau",
                    "Miringa",
                    "Sulumthla",
                    "Yawi",
                    "Zarawuyaku"
                ]
            },
            {
                "name": "Chibok",
                "wards": [
                    "Chibok Garu",
                    "Chibok Likama",
                    "Chibok Wuntaku",
                    "Gatamarwa",
                    "Kautikari",
                    "Korongilim",
                    "Kuburmbula",
                    "Mbalala",
                    "Mboa Kura",
                    "Pemi",
                    "Shikarkir"
                ]
            },
            {
                "name": "Damboa",
                "wards": [
                    "Ajign A",
                    "Ajign B",
                    "Azur Multe Forfor",
                    "Bego Yerwa Ngurna",
                    "Damboa",
                    "Gumsuri Misakurbudu",
                    "Kafa Mafi",
                    "Mulgwai Kopchi",
                    "Nguda Wuyaram",
                    "Wawa Korede"
                ]
            },
            {
                "name": "Dikwa",
                "wards": [
                    "Boboshe",
                    "Dikwa",
                    "Gajibo",
                    "Magarta Sheffri",
                    "Mallam Maja",
                    "Mudu Kaza",
                    "Muliye Jemuri",
                    "Ngudoram",
                    "Sogoma Afuye",
                    "Ufaye Gujile"
                ]
            },
            {
                "name": "Gubio",
                "wards": [
                    "Ardimini",
                    "Dabira",
                    "Felo",
                    "Gamowo",
                    "Gazabure",
                    "Gubio Town I",
                    "Gubio Town Ii",
                    "Kingowa",
                    "Ngetra",
                    "Zowo"
                ]
            },
            {
                "name": "Guzamala",
                "wards": [
                    "Aduwa",
                    "Gudumbali East",
                    "Gudumbali West",
                    "Guworam",
                    "Guzamala East",
                    "Guzamala West",
                    "Kingarwa",
                    "Mairari",
                    "Moduri",
                    "Wamiri"
                ]
            },
            {
                "name": "Gwoza",
                "wards": [
                    "Ashigashiya",
                    "Bita Izge",
                    "Dure Wala Warabe",
                    "Gavva Agapalwa",
                    "Guduf Nagadiyo",
                    "Gwoza Town Gadamayo",
                    "Gwoza Wakane Bulabulin",
                    "Hambagda Liman Kara New Settlement",
                    "Johode Chikide Kughum",
                    "Kirawa Jimini",
                    "Kurana Bassa Ngoshe Sama A",
                    "Ngoshe",
                    "Pulka Bokko"
                ]
            },
            {
                "name": "Hawul",
                "wards": [
                    "Bilingwi",
                    "Dzar Vinadum Birni Dlandi",
                    "Gwanzang Pusda",
                    "Hizhi",
                    "Kida",
                    "Kwajaffa Hang",
                    "Kwaya Bur Tanga Rumta",
                    "Marama Kidang",
                    "Pama Whitambaya",
                    "Puba Vidau Lokoja",
                    "Sakwa Hema",
                    "Shaffa"
                ]
            },
            {
                "name": "Jere",
                "wards": [
                    "Alau",
                    "Bale Galtimari",
                    "Dala Lawanti",
                    "Dusuman",
                    "Gomari",
                    "Gongulong",
                    "Maimusari",
                    "Mairi",
                    "Mashamari",
                    "Ngudaa Addamari",
                    "Old Maiduguri",
                    "Tuba"
                ]
            },
            {
                "name": "Kaga",
                "wards": [
                    "Afa Dig Maudori",
                    "Benisheikh",
                    "Borgozo",
                    "Dogoma Jalori",
                    "Dongo",
                    "Galangi",
                    "Guwo",
                    "Karagawaru",
                    "Mainok",
                    "Marguba",
                    "Ngamdu",
                    "Shettimari",
                    "Tobolo",
                    "Wajiro Burgumma",
                    "Wassaram"
                ]
            },
            {
                "name": "Kala Balge",
                "wards": [
                    "Jarawa Sangaya",
                    "Jilbe A",
                    "Jilbe B Koma Kaudi",
                    "Kala",
                    "Kumaga",
                    "Mada",
                    "Moholo",
                    "Rann A",
                    "Rann B Daima",
                    "Sigal Karche"
                ]
            },
            {
                "name": "Konduga",
                "wards": [
                    "Auno Chabbol",
                    "Dalori Wanori",
                    "Dawa East Malari Kangamari",
                    "Jewu Lamboa",
                    "Kawuri",
                    "Kelumiri Ngalbi Amari Yale",
                    "Konduga",
                    "Mairamri Yeleri Bazamri",
                    "Masba Dalwa West",
                    "Nyaleri Sandia Yejiwa",
                    "Sojiri Nguro Nguro"
                ]
            },
            {
                "name": "Kukawa",
                "wards": [
                    "Alagarno",
                    "Baga",
                    "Bundur",
                    "Dogoshi",
                    "Doro Duguri",
                    "Kauwa",
                    "Kekeno",
                    "Kukawa",
                    "Moduari Barwari",
                    "Yoyo"
                ]
            },
            {
                "name": "Kwaya Kusar",
                "wards": [
                    "Gondi",
                    "Gusi Billa",
                    "Guwal",
                    "Kubuku",
                    "Kurba",
                    "Kwaya Kusar",
                    "Peta",
                    "Wada",
                    "Wawa",
                    "Yimirthalang"
                ]
            },
            {
                "name": "Mafa",
                "wards": [
                    "Abbari",
                    "Anadua",
                    "Gawa",
                    "Koshebe",
                    "Laje",
                    "Limanti",
                    "Loskuri",
                    "Ma Afa",
                    "Mafa",
                    "Masu",
                    "Mujigine",
                    "Tamsu Ngamdua"
                ]
            },
            {
                "name": "Magumeri",
                "wards": [
                    "Ardo Ram",
                    "Ayi Yasku",
                    "Borno Yesu",
                    "Furram",
                    "Gaji Ganna I",
                    "Gaji Ganna Ii",
                    "Hoyo Chin Gowa",
                    "Kalizoram Banoram",
                    "Kareram",
                    "Kubti",
                    "Magumeri",
                    "Ngamma",
                    "Ngubala"
                ]
            },
            {
                "name": "Maiduguri",
                "wards": [
                    "Bolori I",
                    "Bolori Ii",
                    "Bulablin",
                    "Fezzan",
                    "Gamboru Liberty",
                    "Gwange I",
                    "Gwange Ii",
                    "Gwange Iii",
                    "Hausari Zango",
                    "Lamisula Jabba Mari",
                    "Limanti",
                    "Mafoni",
                    "Maisandari",
                    "Shehuri North",
                    "Shehuri South"
                ]
            },
            {
                "name": "Marte",
                "wards": [
                    "Ala",
                    "Alla Lawanti",
                    "Borsori",
                    "Gumna",
                    "Kabulawa",
                    "Kirenowa",
                    "Kulli",
                    "Marte",
                    "Mawulli",
                    "Musune",
                    "Ngeleiwa",
                    "Njine",
                    "Zaga"
                ]
            },
            {
                "name": "Mobbar",
                "wards": [
                    "Asaga",
                    "Bogum",
                    "Chamba",
                    "Damasak",
                    "Duji",
                    "Gashagar",
                    "Kareto",
                    "Layi",
                    "Zanna Umorti",
                    "Zari"
                ]
            },
            {
                "name": "Monguno",
                "wards": [
                    "Damakuli",
                    "Kaguram",
                    "Kumalia",
                    "Mandala",
                    "Mintar",
                    "Mofio",
                    "Monguno",
                    "Ngurno",
                    "Sure",
                    "Wulo",
                    "Yele",
                    "Zulum"
                ]
            },
            {
                "name": "Ngala",
                "wards": [
                    "Fuye",
                    "Gamboru B",
                    "Gamboru C",
                    "Logumane",
                    "Ndufu",
                    "Ngala Ward",
                    "Old Gamboru A",
                    "Sagir",
                    "Tunokalia",
                    "Warshele",
                    "Wulgo",
                    "Wurge"
                ]
            },
            {
                "name": "Nganzai",
                "wards": [
                    "Alarge",
                    "Badu",
                    "Damaram",
                    "Gadai",
                    "Gajiram",
                    "Jigalta",
                    "Kuda",
                    "Kurnawa",
                    "Maiwa",
                    "Miye",
                    "Sabsabuwa",
                    "Sugundure"
                ]
            },
            {
                "name": "Shani",
                "wards": [
                    "Bargu Burashika",
                    "Buma",
                    "Gasi Salifawa",
                    "Gora",
                    "Gwalasho",
                    "Gwaskara",
                    "Kombo",
                    "Kubo",
                    "Kwaba",
                    "Shani",
                    "Walama"
                ]
            }
        ]
    },
    {
        "state": "Cross River",
        "lgas": [
            {
                "name": "Abi",
                "wards": [
                    "Adadama",
                    "Afafanyi Igonigoni",
                    "Ebom",
                    "Ediba",
                    "Ekureku I",
                    "Ekureku Ii",
                    "Imabana I",
                    "Imabana Ii",
                    "Itigidi",
                    "Usumutong"
                ]
            },
            {
                "name": "Akamkpa",
                "wards": [
                    "Akamkpa Urban",
                    "Awi",
                    "Eku",
                    "Iko",
                    "Ikpai",
                    "Mbarakom",
                    "Oban",
                    "Ojuk North",
                    "Ojuk South",
                    "Uyanga"
                ]
            },
            {
                "name": "Akpabuyo",
                "wards": [
                    "Atimbo East",
                    "Atimbo West",
                    "Eneyo",
                    "Idundu Anyanganse",
                    "Ikang Central",
                    "Ikang North",
                    "Ikang South",
                    "Ikot Edem Odo",
                    "Ikot Eyo",
                    "Ikot Nakanda"
                ]
            },
            {
                "name": "Bakassi",
                "wards": [
                    "Abana",
                    "Akpankanya",
                    "Akwa",
                    "Ambai Ekpa",
                    "Amoto",
                    "Archibong",
                    "Atai Ema",
                    "Efut Inwang",
                    "Ekpot Abia",
                    "Odiong"
                ]
            },
            {
                "name": "Bekwarra",
                "wards": [
                    "Abuochiche",
                    "Afrike Ochagbe",
                    "Afrike Okpeche",
                    "Beten",
                    "Gakem",
                    "Ibiaragidi",
                    "Nyanya",
                    "Otukpuru",
                    "Ugboro",
                    "Ukpah"
                ]
            },
            {
                "name": "Biase",
                "wards": [
                    "Abayong",
                    "Adim",
                    "Agwagune Okurike",
                    "Akpet Abini",
                    "Biakpan",
                    "Ehom",
                    "Erei North",
                    "Erei South",
                    "Ikun Etono",
                    "Umon North",
                    "Umon South"
                ]
            },
            {
                "name": "Boki",
                "wards": [
                    "Abo",
                    "Alankwe",
                    "Beebo Bumaji",
                    "Boje",
                    "Buda",
                    "Buentsebe",
                    "Bunyia Okubuchi",
                    "Ekpashi",
                    "Kakwagom Bawop",
                    "Ogep Osokom",
                    "Oku Borum Njua"
                ]
            },
            {
                "name": "Calabar Municipality",
                "wards": [
                    "I",
                    "Ii",
                    "Iii",
                    "Iv",
                    "Ix",
                    "V",
                    "Vi",
                    "Vii",
                    "Viii",
                    "X"
                ]
            },
            {
                "name": "Calabar South",
                "wards": [
                    "Eight 8",
                    "Eleven 11",
                    "Five 5",
                    "Four 4",
                    "Nine 9",
                    "One 1",
                    "Seven 7",
                    "Six 6",
                    "Ten 10",
                    "Three 3",
                    "Twelve 12",
                    "Two 2"
                ]
            },
            {
                "name": "Etung",
                "wards": [
                    "Abia",
                    "Abijang",
                    "Agbokim",
                    "Ajassor",
                    "Bendeghe Ekiem",
                    "Effraya",
                    "Etomi",
                    "Itaka",
                    "Mkpot Ayuk Aba",
                    "Nsofang"
                ]
            },
            {
                "name": "Ikom",
                "wards": [
                    "Abanyum",
                    "Akparabong",
                    "Ikom Urban I",
                    "Ikom Urban Ii",
                    "Nde",
                    "Nnam",
                    "Nta Nselle",
                    "Ofutop I",
                    "Ofutop Ii",
                    "Olulumo",
                    "Yala Nkum"
                ]
            },
            {
                "name": "Obanliku",
                "wards": [
                    "Basang",
                    "Bebi",
                    "Becheve",
                    "Bendi I",
                    "Bendi Ii",
                    "Bishiri North",
                    "Bishiri South",
                    "Bisu",
                    "Busi",
                    "Utanga"
                ]
            },
            {
                "name": "Obubra",
                "wards": [
                    "Ababene",
                    "Apiapum",
                    "Iyamoyong",
                    "Obubra Urban",
                    "Ochon",
                    "Ofat",
                    "Ofodua",
                    "Ofumbongha Yala",
                    "Osopong I",
                    "Osopong Ii",
                    "Ovonum"
                ]
            },
            {
                "name": "Obudu",
                "wards": [
                    "Alege Ubang",
                    "Angiaba Begiaka",
                    "Begiading",
                    "Ipong",
                    "Obudu Urban I",
                    "Obudu Urban Ii",
                    "Ukpe",
                    "Utugwang Central",
                    "Utugwang North",
                    "Utugwang South"
                ]
            },
            {
                "name": "Odukpani",
                "wards": [
                    "Adiabo Efut",
                    "Akamkpa",
                    "Creek Town I",
                    "Creek Town Ii",
                    "Eki",
                    "Ekori Anaku",
                    "Eniong",
                    "Ikoneto",
                    "Ito Idere Ukwa",
                    "Obomitiat Mbiabo Ediong",
                    "Odot",
                    "Odukpani Central",
                    "Oniman Kiong"
                ]
            },
            {
                "name": "Ogoja",
                "wards": [
                    "Ekajuk I",
                    "Ekajuk Ii",
                    "Mbube East I",
                    "Mbube East Ii",
                    "Mbube West I",
                    "Mbube West Ii",
                    "Nkum Iborr",
                    "Nkum Irede",
                    "Ogoja Urban I",
                    "Ogoja Urban Ii"
                ]
            },
            {
                "name": "Yakurr",
                "wards": [
                    "Abanakpai",
                    "Afrekpe Ekpenti",
                    "Ajere",
                    "Assiga",
                    "Biko Biko",
                    "Idomi",
                    "Ijiman",
                    "Ijom",
                    "Ikpakapit",
                    "Inyima",
                    "Mkpani Agoi",
                    "Nkpolo Ukpawen",
                    "Ntan"
                ]
            },
            {
                "name": "Yala",
                "wards": [
                    "Echumofana",
                    "Gabu",
                    "Ijiraga",
                    "Njrigom Mfuma",
                    "Okpoma",
                    "Okuku",
                    "Wanakom",
                    "Wanihem",
                    "Wanikade",
                    "Yache",
                    "Yahe"
                ]
            }
        ]
    },
    {
        "state": "Delta",
        "lgas": [
            {
                "name": "Aniocha North",
                "wards": [
                    "Ezi",
                    "Idumuje Unor",
                    "Issele Azagba",
                    "Issele Uku I",
                    "Issele Uku Ii",
                    "Obior",
                    "Obomkpa",
                    "Onicha Olona",
                    "Onicha Ugbo",
                    "Ukwu Nzu"
                ]
            },
            {
                "name": "Aniocha South",
                "wards": [
                    "Aba Unor",
                    "Ejeme",
                    "Isheagu Ewulu",
                    "Nsukwa",
                    "Ogwashi Uku I",
                    "Ogwashi Uku Ii",
                    "Ogwashi Uku Village",
                    "Ubulu Uku I",
                    "Ubulu Uku Ii",
                    "Ubulu Unor",
                    "Ubulu Okiti"
                ]
            },
            {
                "name": "Bomadi",
                "wards": [
                    "Akugbene I",
                    "Akugbene Ii",
                    "Akugbene Iii",
                    "Bomadi",
                    "Kolafiogbene Ekametagbene",
                    "Kpakiama",
                    "Ogbeinama Okoloba",
                    "Ogo Eze",
                    "Ogriagbene",
                    "Syama"
                ]
            },
            {
                "name": "Burutu",
                "wards": [
                    "Bulou Ndoro",
                    "Ngbilebiri I",
                    "Ngbilebiri Ii",
                    "Obotebe",
                    "Ogbolubiri",
                    "Ogulagha",
                    "Ojobo",
                    "Seimbiri",
                    "Tamigbe",
                    "Torugbene",
                    "Tuomo"
                ]
            },
            {
                "name": "Ethiope West",
                "wards": [
                    "Jesse I",
                    "Jesse Ii",
                    "Jesse Iii",
                    "Jesse Iv",
                    "Mosogar I",
                    "Mosogar Ii",
                    "Oghara I",
                    "Oghara Ii",
                    "Oghara Iii",
                    "Oghara Iv",
                    "Oghara V"
                ]
            },
            {
                "name": "Ethiope East",
                "wards": [
                    "Abraka I",
                    "Abraka Ii",
                    "Abraka Iii",
                    "Agbon I",
                    "Agbon Ii",
                    "Agbon Iii",
                    "Agbon Iv",
                    "Agbon V",
                    "Agbon Vi",
                    "Agbon Vii",
                    "Agbon Viii"
                ]
            },
            {
                "name": "Ika North East",
                "wards": [
                    "Akumazi",
                    "Idumuesah",
                    "Igbodo",
                    "Mbiri",
                    "Otolokpo",
                    "Owa V",
                    "Owa Vi",
                    "Owa I",
                    "Owa Ii",
                    "Owa Iii",
                    "Owa Iv",
                    "Umunede",
                    "Ute Ogbeje",
                    "Ute Okpu"
                ]
            },
            {
                "name": "Ika South",
                "wards": [
                    "Abavo I",
                    "Abavo Ii",
                    "Abavo Iii",
                    "Agbor Town I",
                    "Agbor Town Ii",
                    "Boji Boji I",
                    "Boji Boji Ii",
                    "Boji Boji Iii",
                    "Ekuku Agbor",
                    "Ihiuiyase I",
                    "Ihuiyase Ii",
                    "Ihuozomor Ozanogogo Alisimie"
                ]
            },
            {
                "name": "Isoko North",
                "wards": [
                    "Ellu",
                    "Emevor",
                    "Iluelogbo",
                    "Iyede I",
                    "Iyede Ii",
                    "Okpe Isoko",
                    "Otibio",
                    "Ovrode",
                    "Owhe Akiehwe",
                    "Oyede",
                    "Ozoro I",
                    "Ozoro Ii",
                    "Ozoro Iii"
                ]
            },
            {
                "name": "Isoko South",
                "wards": [
                    "Aviara",
                    "Emede",
                    "Enhwe Okpolo",
                    "Erowa Umeh",
                    "Igbide",
                    "Irri Ii",
                    "Irri I",
                    "Oleh I",
                    "Oleh Ii",
                    "Olomoro",
                    "Uzere"
                ]
            },
            {
                "name": "Ndokwa East",
                "wards": [
                    "Abarra Inyi Onuaboh",
                    "Aboh Akarrai",
                    "Afor Obikwele",
                    "Ase",
                    "Ashaka",
                    "Ibedeni",
                    "Ibrede Igbuku Onogbokor",
                    "Okpai Utchi Beneku",
                    "Onyia Adiai Otuoku Umuolu",
                    "Ossissa"
                ]
            },
            {
                "name": "Ndokwa West",
                "wards": [
                    "Abbi Ii",
                    "Abbi I",
                    "Emu",
                    "Ogume I",
                    "Ogume Ii",
                    "Onicha Ukwani",
                    "Utagba Ogbe",
                    "Utagba Uno I",
                    "Utagba Uno Ii",
                    "Utagba Uno Iii"
                ]
            },
            {
                "name": "Okpe",
                "wards": [
                    "Aghalokpe",
                    "Aragba Town",
                    "Mereje I",
                    "Mereje Ii",
                    "Mereje Iii",
                    "Oha I",
                    "Oha Ii",
                    "Orerokpe",
                    "Oviri Okpe",
                    "Ughoton"
                ]
            },
            {
                "name": "Oshimili North",
                "wards": [
                    "Akwukwu",
                    "Ebu",
                    "Ibusa I",
                    "Ibusa Ii",
                    "Ibusa Iii",
                    "Ibusa Iv",
                    "Ibusa V",
                    "Illah",
                    "Okpanam",
                    "Ukala"
                ]
            },
            {
                "name": "Oshimili South",
                "wards": [
                    "Agu",
                    "Anala Amakom",
                    "Cable Point I",
                    "Cable Point Ii",
                    "Ogbele Akpako",
                    "Okwe",
                    "Ugbomanta Quarters",
                    "Umuaji",
                    "Umuezei",
                    "Umuonaje",
                    "West End"
                ]
            },
            {
                "name": "Patani",
                "wards": [
                    "Abari",
                    "Agoloma",
                    "Bolou Angiama",
                    "Odorubu Adobu Bolou Apelebri",
                    "Patani Ii",
                    "Patani Iii",
                    "Patani I",
                    "Taware Kolowara Aven",
                    "Toru Angiama",
                    "Uduophori"
                ]
            },
            {
                "name": "Sapele",
                "wards": [
                    "Amuokpe",
                    "Elume",
                    "Okokporo Ugborhen",
                    "Sapele Urban Iii",
                    "Sapele Urban Iv",
                    "Sapele Urban V",
                    "Sapele Urban Vi",
                    "Sapele Urban Vii",
                    "Sapele Urban Viii",
                    "Sapele Urban I",
                    "Sapele Urban Ii"
                ]
            },
            {
                "name": "Udu",
                "wards": [
                    "Aladja",
                    "Ekete",
                    "Opete Assagba Edjophe",
                    "Orhuwerun",
                    "Ovwian I",
                    "Ovwian Ii",
                    "Udu I",
                    "Udu Ii",
                    "Udu Iii",
                    "Udu Iv"
                ]
            },
            {
                "name": "Ughelli North",
                "wards": [
                    "Agbarha",
                    "Agbarho I",
                    "Agbarho Ii",
                    "Evwreni",
                    "Ogor",
                    "Orogun I",
                    "Orogun Ii",
                    "Ughelli I",
                    "Ughelli Ii",
                    "Ughelli Iii",
                    "Uwheru"
                ]
            },
            {
                "name": "Ughelli South",
                "wards": [
                    "Effurun Otor",
                    "Ekakpamre",
                    "Ewu I",
                    "Ewu Ii",
                    "Ewu Iii",
                    "Jeremi I",
                    "Jeremi Ii",
                    "Jeremi Iii",
                    "Jeremi Iv",
                    "Olomu I",
                    "Olomu Ii"
                ]
            },
            {
                "name": "Ukwuani",
                "wards": [
                    "Akoku",
                    "Amai",
                    "Ebedei",
                    "Eziokpor",
                    "Ezionum",
                    "Obiaruku I",
                    "Obiaruku Ii",
                    "Umuebu",
                    "Umukwata",
                    "Umutu"
                ]
            },
            {
                "name": "Uvwie",
                "wards": [
                    "Army Barracks Area",
                    "Effurun I",
                    "Effurun Ii",
                    "Ekpan I",
                    "Ekpan Ii",
                    "Enerhen I",
                    "Enerhen Ii",
                    "Ugbomro Ugbolokposo",
                    "Ugborikoko",
                    "Ugboroke"
                ]
            },
            {
                "name": "Warri North",
                "wards": [
                    "Ebrohimi",
                    "Eghoro",
                    "Gbokoda",
                    "Isekelewu Egbema Ii",
                    "Koko I",
                    "Koko Ii",
                    "Ogbinbiri Egbema Iii",
                    "Ogbudugbudu Egbema Iv",
                    "Ogheye",
                    "Opuama Egbema I"
                ]
            },
            {
                "name": "Warri South",
                "wards": [
                    "Bowen",
                    "Edjeba",
                    "G R A",
                    "Igbudu",
                    "Obodo Omadino",
                    "Ode Itsekiri",
                    "Ogunu Ekurede Urhobo",
                    "Okere",
                    "Okumagba I",
                    "Okumagba Ii",
                    "Pessu",
                    "Ugbuwangue Ekurede Itsekiri"
                ]
            },
            {
                "name": "Warri South West",
                "wards": [
                    "Aja Udaibo",
                    "Akpikpa",
                    "Gbaramatu",
                    "Isaba",
                    "Madangho",
                    "Ogbe Ijoh",
                    "Ogidigben",
                    "Oporoza",
                    "Orere",
                    "Ugborodo"
                ]
            }
        ]
    },
    {
        "state": "Ebonyi",
        "lgas": [
            {
                "name": "Abakaliki",
                "wards": [
                    "Abakpa",
                    "Amachi Ndebo",
                    "Amachi Ndegu",
                    "Amagu Enyieba",
                    "Amagu Unuhu",
                    "Azuii Udene",
                    "Azuiyiokwu Layout",
                    "Azumili Azugwu",
                    "Edda",
                    "Izzi Unuhu",
                    "Ndiagu",
                    "Okpoitumo Ndebor",
                    "Okpoitumo Ndiegu",
                    "Timber Shed"
                ]
            },
            {
                "name": "Afikpo South",
                "wards": [
                    "Amaeke",
                    "Amangwu Edda",
                    "Amaoso",
                    "Amato",
                    "Amigbo Etiti Edda",
                    "Amiri",
                    "Ebunwana",
                    "Ndioke Ekoli Edda",
                    "Nguzu",
                    "Oso",
                    "Owutu"
                ]
            },
            {
                "name": "Afikpo North",
                "wards": [
                    "Amata Akpoha",
                    "Amogu Akpoha",
                    "Ezeke Amasiri",
                    "Ibii Oziza Afikpo",
                    "Itim Afikpo",
                    "Nkpoghoro Afikpo",
                    "Ohaisu Afikpo A",
                    "Ohaisu Afikpo B",
                    "Poperi Amasiri",
                    "Ugwuegu Afikpo",
                    "Uwana Afikpo 1",
                    "Uwana Afikpo Ii"
                ]
            },
            {
                "name": "Ebonyi",
                "wards": [
                    "Abakpa",
                    "Abofia",
                    "Agalegu",
                    "Echiaba",
                    "Egwudinagu",
                    "Enyibichiri I",
                    "Enyibichiri Ii",
                    "Kpirikpiri",
                    "Mbeke",
                    "Ndiebo",
                    "Ndiegu",
                    "Onuenyim",
                    "Urban New Layout"
                ]
            },
            {
                "name": "Ezza North",
                "wards": [
                    "Amuda Ama Wula",
                    "Ekka",
                    "Inyere",
                    "Ndieguazu Umuoghara",
                    "Nkomoro",
                    "Ogboji",
                    "Okposi Umuoghara",
                    "Omege Umuezeokoha",
                    "Oriuzor",
                    "Oshiegbe Umuez Eokoha",
                    "Umuezeoka"
                ]
            },
            {
                "name": "Ezza South",
                "wards": [
                    "Amaeka",
                    "Amaezekwe",
                    "Amagu Nsokara",
                    "Amana",
                    "Amudo Okoffia",
                    "Amuzu",
                    "Echare",
                    "Ezzama",
                    "Ikwuator Idembia",
                    "Onueke",
                    "Umunwagu Idembia"
                ]
            },
            {
                "name": "Ikwo",
                "wards": [
                    "Ama Inyima",
                    "Echialike",
                    "Eka Awoke",
                    "Ekpanwudele",
                    "Ekpelu",
                    "Enyibichiri",
                    "Etam",
                    "Igbudu I",
                    "Igbudu Ii",
                    "Inyimagu I",
                    "Inyimagu Ii",
                    "Ndiagu Amagu I",
                    "Ndiagu Amagu Ii",
                    "Ndiagu Echara I",
                    "Ndiagu Echara Ii",
                    "Ndufu Amagu",
                    "Ndufu Amagu I",
                    "Ndufu Awke",
                    "Ndufu Echara",
                    "Noye Alike"
                ]
            },
            {
                "name": "Ishielu",
                "wards": [
                    "Agba",
                    "Amaezu",
                    "Azuinyaba A",
                    "Azuinyaba B",
                    "Ezillo I",
                    "Ezillo Ii",
                    "Ezzagu Nkomor",
                    "Ezzagu Ogboji",
                    "Iyionu",
                    "Nkalagu",
                    "Nkalaha",
                    "Ntezi",
                    "Obeagu",
                    "Ohofia",
                    "Okpoto",
                    "Umuhuali"
                ]
            },
            {
                "name": "Ivo",
                "wards": [
                    "Akaeze Ishiagu",
                    "Akaeze Ukwu",
                    "Amagu",
                    "Amonye",
                    "Ihenta Ogidi",
                    "Iyioji Akaeze",
                    "Ndiokoro Ukwu",
                    "Ngwogwo",
                    "Obinagu",
                    "Okue",
                    "Umobo"
                ]
            },
            {
                "name": "Izzi",
                "wards": [
                    "Agbaja Anyanwuigwe",
                    "Agbaja Offia Onwe",
                    "Agbaja Mgbo",
                    "Ezza Inyimagu Igweled Oha",
                    "Ezza Inyimagu Iziogo",
                    "Ezza Inyimagu Igbuhu",
                    "Ezza Inyimagu Ndiagu",
                    "Igbeagu Iii",
                    "Igbeagu Ndi Ettah",
                    "Igbeagu Nduogbu",
                    "Mgbalaku Inyimagu I",
                    "Mgbalaku Inyimagu Ii",
                    "Ndieze Inyimagu 11 Ndiabor Ishiagu",
                    "Ndieze Inyimagu Mgbabeluzor"
                ]
            },
            {
                "name": "Ohaozara",
                "wards": [
                    "Amaechi Okposi",
                    "Enena Ezeraku",
                    "Mgbom Okposi",
                    "Obiozara",
                    "Okposi Achara",
                    "Okposi Okwu",
                    "Ugbogologo Ugwulangwu",
                    "Uhuo Taru Ugwu Langwu",
                    "Umic Hima",
                    "Umunaga",
                    "Umuobuna"
                ]
            },
            {
                "name": "Ohaukwu",
                "wards": [
                    "Effium Ii",
                    "Effium I",
                    "Ezzamgbo",
                    "Ishi Ngbo I",
                    "Ishi Ngbo Ii",
                    "Ngbo",
                    "Okposhi I",
                    "Okposhi Ii",
                    "Umu Ogudu Akpu I",
                    "Umu Ogudu Akpu Ii",
                    "Umu Ogudu Oshia",
                    "Umuagara Amechi",
                    "Wigbeke I",
                    "Wigbeke Ii",
                    "Wigbeke Iii"
                ]
            },
            {
                "name": "Onicha",
                "wards": [
                    "Abaomege",
                    "Agbabor Isu",
                    "Amanator Isu",
                    "Ebia Oshiri",
                    "Enuagu Onicha",
                    "Isi Onicha",
                    "Isinkwo Ukamu",
                    "Obeagu Isu",
                    "Oguduukwor Oshiri",
                    "Okuzu Ukawu",
                    "Ugwu Oshiri",
                    "Umudomi Onicha"
                ]
            }
        ]
    },
    {
        "state": "Edo",
        "lgas": [
            {
                "name": "Akoko Edo",
                "wards": [
                    "Enwan Atte Ikpeshi Egbigele",
                    "Ibillo Ekpesa Ekor Ikiran Ile Oke",
                    "Igarra I",
                    "Igarra Ii",
                    "Imoga Lampese Bekuma Ekpe",
                    "Makeke Ojah Dangbala Ojirami Anyawoza",
                    "Oloma Okpe Ijaja Kakuma Anyara",
                    "Ososo",
                    "Somorika Ogbe Sasaro Onumu Eshawa Ogugu Igboshi Afe Igboshi Ele Aiyegunle",
                    "Uneme Nekhua Akpama Aiyetoro Ekpedo Erhurun Uneme Osu"
                ]
            },
            {
                "name": "Egor",
                "wards": [
                    "Egor",
                    "Evbareke",
                    "Ogida Use",
                    "Okhoro",
                    "Oliha",
                    "Otubu",
                    "Ugbowo",
                    "Uselu I",
                    "Uselu Ii",
                    "Uwelu"
                ]
            },
            {
                "name": "Esan Central",
                "wards": [
                    "Ewu I",
                    "Ewu Ii",
                    "Ikekato",
                    "Opoji",
                    "Otoruwo I",
                    "Otoruwo Ii",
                    "Ugbegun",
                    "Uneah",
                    "Uwessan I",
                    "Uwessan Ii"
                ]
            },
            {
                "name": "Esan North East",
                "wards": [
                    "Amedokhian",
                    "Arue",
                    "Efandion",
                    "Egbele",
                    "Ewoyi",
                    "Idumu Okojie",
                    "Obeidu",
                    "Ubierumu",
                    "Uelen Okugbe",
                    "Uwalor",
                    "Uzea"
                ]
            },
            {
                "name": "Esan South East",
                "wards": [
                    "Emu",
                    "Ewatto",
                    "Ewohimi I",
                    "Ewohimi Ii",
                    "Illushi I",
                    "Illushi Ii",
                    "Ohordua",
                    "Ubiaja I",
                    "Ubiaja Ii",
                    "Ugboha"
                ]
            },
            {
                "name": "Esan West",
                "wards": [
                    "Egoro Idoa Ukhun",
                    "Emaudo Eguare Ekpoma",
                    "Emuhi Ukpenu Ujoelen",
                    "Ihunmudumu Idumebo Uke Ujemen",
                    "Illeh Eko Ine",
                    "Iruekpen",
                    "Ogwa",
                    "Uhiele",
                    "Ujiogba",
                    "Urohi"
                ]
            },
            {
                "name": "Etsako West",
                "wards": [
                    "Anwain",
                    "Auchi",
                    "Auchi Iii",
                    "Auchi I",
                    "Auchi Ii",
                    "Aviele",
                    "Jagbe",
                    "South Ibie",
                    "Uzairue North East",
                    "Uzairue North West",
                    "Uzairue South East",
                    "Uzairue South West"
                ]
            },
            {
                "name": "Etsako Central",
                "wards": [
                    "Ekperi I",
                    "Ekperi Ii",
                    "Ekperi Iii",
                    "Fugar I",
                    "Fugar Ii",
                    "Fugar Iii",
                    "Iraokhor",
                    "Ogbona",
                    "South Uneme I",
                    "South Uneme Ii"
                ]
            },
            {
                "name": "Etsako East",
                "wards": [
                    "Agenebode",
                    "Okpekpe",
                    "Okpella I",
                    "Okpella Ii",
                    "Okpella Iii",
                    "Okpella Iv",
                    "Three Ibies",
                    "Wanno I",
                    "Wanno Ii",
                    "Weppa"
                ]
            },
            {
                "name": "Igueben",
                "wards": [
                    "Afuda Idumuoka",
                    "Amahor Ugun",
                    "Ekekhen Idumu Ogo Egbike",
                    "Ekpon",
                    "Ewossa",
                    "Idigun Idumedo",
                    "Okalo Okpujie",
                    "Owu Okuta Eguare Ebelle",
                    "Udo",
                    "Uhe Idumuogbo Idumueke"
                ]
            },
            {
                "name": "Ikpoba Okha",
                "wards": [
                    "Aduwawa Evbo Modu",
                    "Gorretti",
                    "Idogbo",
                    "Iwogban Uteh",
                    "Obayantor",
                    "Ogbeson",
                    "Ologbo",
                    "Oregbeni",
                    "St Saviour",
                    "Ugbekun"
                ]
            },
            {
                "name": "Oredo",
                "wards": [
                    "Gra Etete",
                    "Ibiwe Iwegie Ugbague",
                    "Ihogbe Isekhere Oreoghene Ibiwe Ice Road",
                    "Ikpema Eguadase",
                    "New Benin I",
                    "New Benin Ii",
                    "Ogbe",
                    "Ogbelaka Nekpenekpen",
                    "Oredo",
                    "Unueru Ogboka",
                    "Urubi Evbiemwen Iwehen",
                    "Uzebu"
                ]
            },
            {
                "name": "Orhionmwon",
                "wards": [
                    "Aibiokula I",
                    "Aibiokula I",
                    "Aibiokula Ii",
                    "Evboesi",
                    "Igbanke East",
                    "Igbanke West",
                    "Iyoba",
                    "Ugbeka",
                    "Ugboko",
                    "Ugu",
                    "Ukpato",
                    "Urhonigbe North",
                    "Urhonigbe South"
                ]
            },
            {
                "name": "Ovia North East",
                "wards": [
                    "Adolor",
                    "Iguoshodin",
                    "Isiuwa",
                    "Oduna",
                    "Ofunmwegbe",
                    "Oghede",
                    "Okada East",
                    "Okada West",
                    "Okokhuo",
                    "Oluku",
                    "Uhen",
                    "Uhiere",
                    "Utoka"
                ]
            },
            {
                "name": "Ovia South West",
                "wards": [
                    "Iguobazuwa East",
                    "Iguobazuwa West",
                    "Nikorogha",
                    "Ofunama",
                    "Ora",
                    "Siluko",
                    "Udo",
                    "Ugbogui",
                    "Umaza",
                    "Usen"
                ]
            },
            {
                "name": "Owan East",
                "wards": [
                    "Emai I",
                    "Emai Ii",
                    "Igue Ikao",
                    "Ihievbe I",
                    "Ihievbe Ii",
                    "Ivbiadaobi",
                    "Ivbianion",
                    "Otuo I",
                    "Otuo Ii",
                    "Uokha Ake",
                    "Warrake"
                ]
            },
            {
                "name": "Owan West",
                "wards": [
                    "Avbiosi",
                    "Eme Ora Oke",
                    "Eruere",
                    "Okpuje",
                    "Ozalla",
                    "Sabongida Ora Ogbeturu",
                    "Sobe",
                    "Uhonmora",
                    "Ukhuse Osi",
                    "Uzebba I",
                    "Uzebba Ii"
                ]
            },
            {
                "name": "Uhunmwode",
                "wards": [
                    "Egbede",
                    "Ehor",
                    "Igieduma",
                    "Irhue",
                    "Isi North",
                    "Isi South",
                    "Ohuan",
                    "Uhi",
                    "Umagbae North",
                    "Umagbae South"
                ]
            }
        ]
    },
    {
        "state": "Ekiti",
        "lgas": [
            {
                "name": "Ado Ekiti",
                "wards": [
                    "Ado A Idofin",
                    "Ado B Inisa",
                    "Ado C Idolofin",
                    "Ado D Ijigbo",
                    "Ado E Ijoka Orereowu",
                    "Ado F Okeyinmi",
                    "Ado G Oke Ila",
                    "Ado H Ereguru",
                    "Ado I Dallimore",
                    "Ado J Okesa",
                    "Ado K Irona",
                    "Ado L Igbehin",
                    "Ado M Farm Settlement"
                ]
            },
            {
                "name": "Efon",
                "wards": [
                    "Efon Iii",
                    "Efon I",
                    "Efon Ii",
                    "Efon V",
                    "Efon Vi",
                    "Efon Vii",
                    "Efon Viii",
                    "Efon X",
                    "Efon Iv",
                    "Efon Ix"
                ]
            },
            {
                "name": "Ekiti East",
                "wards": [
                    "Araromi",
                    "Ilasa I",
                    "Ilasa Ii Ikun Araromi Eda Ile",
                    "Isinbode",
                    "Kota I",
                    "Kota Ii",
                    "Obadore I",
                    "Obadore Ii",
                    "Obadore Iii",
                    "Obadore Iv",
                    "Omuo Oke I",
                    "Omuo Oke Ii"
                ]
            },
            {
                "name": "Ekiti South West",
                "wards": [
                    "Igbara Odo I",
                    "Igbara Odo Ii",
                    "Ilawe Iii",
                    "Ilawe Iv",
                    "Ilawe V",
                    "Ilawe I",
                    "Ilawe Ii",
                    "Ilawe Vi",
                    "Ilawe Vii",
                    "Ogotun I",
                    "Ogotun Ii"
                ]
            },
            {
                "name": "Ekiti West",
                "wards": [
                    "Aramoko I",
                    "Aramoko Ii",
                    "Aramoko Iii Erio",
                    "Erijiyan I",
                    "Erijiyan Ii",
                    "Ido Ajinare",
                    "Ikogosi",
                    "Ipole Iloro",
                    "Okemesi I",
                    "Okemesi Ii",
                    "Okemesi Iii"
                ]
            },
            {
                "name": "Emure",
                "wards": [
                    "Ida Mudu Ii",
                    "Idamudu I",
                    "Odo Emure I",
                    "Odo Emure Ii",
                    "Odo Emure Iii",
                    "Odo Emure Iv",
                    "Ogbontioro I",
                    "Ogbontioro Ii",
                    "Oke Emure I",
                    "Oke Emure Ii"
                ]
            },
            {
                "name": "Gbonyin",
                "wards": [
                    "Adegba I",
                    "Adegba Ii",
                    "Agbado",
                    "Egbe Iro",
                    "Ijan",
                    "Iluomoba",
                    "Imesi",
                    "Ode I",
                    "Ode Ii",
                    "Ode Iii"
                ]
            },
            {
                "name": "Ido Osi",
                "wards": [
                    "Ayetoro I",
                    "Ayetoro Ii",
                    "Ido I",
                    "Ido Ii",
                    "Ifaki I",
                    "Ifaki Ii",
                    "Igbole Ifisin Aaye",
                    "Ilogbo",
                    "Orin Ora",
                    "Osi",
                    "Usi"
                ]
            },
            {
                "name": "Ijero",
                "wards": [
                    "Ekamarun Ward A",
                    "Ekamarun Ward B",
                    "Ijero Ward A",
                    "Ijero Ward B",
                    "Ijero Ward C",
                    "Ijero Ward D",
                    "Ikoro Ward A",
                    "Iloro Ijunrin Ward B",
                    "Iloro Ward A",
                    "Ipoti Odo Owa Ward C",
                    "Ipoti Ward A",
                    "Ipoti Ward B"
                ]
            },
            {
                "name": "Ikere",
                "wards": [
                    "Afao Kajola Ayetoro",
                    "Agbado Oyo",
                    "Are Araromi",
                    "Atiba Aafin",
                    "Idemo",
                    "Ilapetu Ijao",
                    "Odose",
                    "Ogbonjana",
                    "Oke Osun",
                    "Okeruku",
                    "Ugele Aroku"
                ]
            },
            {
                "name": "Ikole",
                "wards": [
                    "Araromi Bolorunduro",
                    "Ijesa Isu",
                    "Ikole East",
                    "Ikole North",
                    "Ikole South",
                    "Ikole West I",
                    "Ikole West Ii",
                    "Ipao Oke Ako Irele",
                    "Itapaji Iyemero",
                    "Odo Ayedun I",
                    "Odo Ayedun Ayebode",
                    "Oke Ayedun"
                ]
            },
            {
                "name": "Ilejemeje",
                "wards": [
                    "Eda Oniyo",
                    "Ewu",
                    "Ijesamodu",
                    "Iludun I",
                    "Iludun Ii",
                    "Ipere",
                    "Iye I",
                    "Iye Ii",
                    "Iye Iii",
                    "Obada"
                ]
            },
            {
                "name": "Irepodun Ifelodun",
                "wards": [
                    "Afao",
                    "Are",
                    "Awo",
                    "Igbemo",
                    "Igede I",
                    "Igede Ii",
                    "Igede Iii",
                    "Iropora Esure Eyio",
                    "Iworoko",
                    "Iyin I",
                    "Iyin Ii"
                ]
            },
            {
                "name": "Ise Orun",
                "wards": [
                    "Erinwa I",
                    "Erinwa Ii",
                    "Odo Ise I",
                    "Odo Ise Ii",
                    "Odo Ise Iii",
                    "Oraye Iii",
                    "Oraye I",
                    "Oraye Ii",
                    "Orun I",
                    "Orun Ii"
                ]
            },
            {
                "name": "Moba",
                "wards": [
                    "Erinmope I",
                    "Erinmope Ii",
                    "Igogo I",
                    "Igogo Ii",
                    "Ikun I",
                    "Ikun Ii",
                    "Osan",
                    "Osun",
                    "Otun I",
                    "Otun Ii",
                    "Otun Iii"
                ]
            },
            {
                "name": "Oye",
                "wards": [
                    "Ayede North",
                    "Ayede South Itaji",
                    "Ayegbaju",
                    "Ilupeju I",
                    "Ilupeju Ii",
                    "Ire I",
                    "Ire Ii",
                    "Isan Ilafon Ilemeso",
                    "Itapa Osin",
                    "Omu Oke Omu Odo Ijelu",
                    "Oye I",
                    "Oye Ii"
                ]
            }
        ]
    },
    {
        "state": "Enugu",
        "lgas": [
            {
                "name": "Aninri",
                "wards": [
                    "Mpu",
                    "Ndeabo",
                    "Nnenwe I",
                    "Nnenwe Ii",
                    "Nnenwe Iii",
                    "Oduma I",
                    "Oduma Ii",
                    "Oduma Iii",
                    "Oduma Iv",
                    "Okpanku"
                ]
            },
            {
                "name": "Awgu",
                "wards": [
                    "Agbogugu",
                    "Anikenano Ugwueme",
                    "Awgu I",
                    "Awgu Ii",
                    "Ihe",
                    "Isu Awa Ogugu Agbudu Ituku",
                    "Mgbidi Mmaku",
                    "Mgbowo",
                    "Obeagu",
                    "Ogbaku",
                    "Owelli Amoli Ugbo Ogugu"
                ]
            },
            {
                "name": "Enugu East",
                "wards": [
                    "Abakpa I",
                    "Abakpa Ii",
                    "Amorji",
                    "Ibagwa Nike Edem",
                    "Mbulu Njodo East",
                    "Mbulu Njodo West",
                    "Mbuluiyiukwu",
                    "Mbuluowehe",
                    "Trans Ekulu",
                    "Ugwugo Nike",
                    "Umuchigbo",
                    "Umuenwene"
                ]
            },
            {
                "name": "Enugu North",
                "wards": [
                    "Asata Township",
                    "China Town",
                    "G R A",
                    "Gui Newlayout",
                    "Ihewuzi",
                    "Independence Layout",
                    "New Haven",
                    "Ogbette East",
                    "Ogbette West",
                    "Ogui Township",
                    "Onu Asata",
                    "Udi Siding Iva Valley",
                    "Umunevo"
                ]
            },
            {
                "name": "Enugu South",
                "wards": [
                    "Achara Layout East",
                    "Achara Layout West",
                    "Akwuke",
                    "Amechi I",
                    "Amechi Ii",
                    "Awkunanaw East",
                    "Awkunanaw West",
                    "Maryland",
                    "Obeagu I",
                    "Obeagu Ii",
                    "Ugwuaji",
                    "Uwani East",
                    "Uwani West"
                ]
            },
            {
                "name": "Ezeagu",
                "wards": [
                    "Agba Umana",
                    "Aguobu Umumba",
                    "Aguobu Owa 1",
                    "Aguobu Owa 11",
                    "Awha",
                    "Imezi Owa I",
                    "Imezi Owa Ii",
                    "Iwollo",
                    "Mgbagbu Owa I",
                    "Mgbagbu Owa Iii",
                    "Mgbagbu Owa Ii",
                    "Obe Agu Umana",
                    "Obinofia",
                    "Oghe I",
                    "Oghe Ii",
                    "Okpogho",
                    "Olo Amagu Umulokpa I",
                    "Ulo Amagu Umulokpa Ii",
                    "Umana Ndiagu",
                    "Umumba Ndiumo"
                ]
            },
            {
                "name": "Igbo Etiti",
                "wards": [
                    "Aku I",
                    "Aku Ii",
                    "Aku Iii",
                    "Aku Iv",
                    "Aku V Idueme",
                    "Diogbe Umunko",
                    "Ejuoha Udeme",
                    "Ekwegbe I",
                    "Ekwegbe Ii",
                    "Ikolo Ohebe",
                    "Ohaodo I",
                    "Ohaodo Ii",
                    "Onyohor Ochima Idoha",
                    "Ozalla I",
                    "Ozalla Ii",
                    "Ukehe I",
                    "Ukehe Ii",
                    "Ukehe Iii",
                    "Ukehe Iv",
                    "Ukehe V"
                ]
            },
            {
                "name": "Igbo Eze North",
                "wards": [
                    "Essodo 1",
                    "Essodo 11",
                    "Essodo 111",
                    "Ette 1",
                    "Ette 11",
                    "Ette Central",
                    "Ezzodo",
                    "Umuitodo I",
                    "Umuitodo Ii",
                    "Umuitodo Iii",
                    "Umuozzi I",
                    "Umuozzi Ii",
                    "Umuozzi Iii",
                    "Umuozzi Iv",
                    "Umuozzi Ix",
                    "Umuozzi V",
                    "Umuozzi Vi",
                    "Umuozzi Vii",
                    "Umuozzi Viii",
                    "Umuozzi X"
                ]
            },
            {
                "name": "Igbo Eze South",
                "wards": [
                    "Alor Agu",
                    "Amabo Hausa Yoruba",
                    "Echara",
                    "Ezema Ward",
                    "Iheaka Likki Akutara Ward",
                    "Iheaka Ugo Akohi Ward",
                    "Iheakpu Ajuona Ogbagu Ward",
                    "Iheakpu Ezzi Ngwu Ward",
                    "Itchi Uwani I",
                    "Itchi Uwani Ii",
                    "Nkalagu Obukpa",
                    "Ovoko Ajuona Ward",
                    "Ovoko Umuelo Ovoko Agu Ward",
                    "Ovoko Umulolo Ward",
                    "Uhunowerre",
                    "Unadu"
                ]
            },
            {
                "name": "Isi Uzo",
                "wards": [
                    "Ehamufu I",
                    "Ehamufu Ii",
                    "Ehamufu Iii",
                    "Ehamufu Iv",
                    "Ikem I",
                    "Ikem Ii",
                    "Mbu I",
                    "Mbu Ii",
                    "Neke I",
                    "Neke Ii",
                    "Umualor"
                ]
            },
            {
                "name": "Nkanu East",
                "wards": [
                    "Akpawfu Isienu Amangunze",
                    "Amagunze",
                    "Amankanu Ogbahu",
                    "Amechi Idodo Oruku",
                    "Ihuokpara",
                    "Mburubu",
                    "Nara I",
                    "Nara Ii",
                    "Nkerefi I",
                    "Nkerefi Ii",
                    "Nomeh",
                    "Owo",
                    "Ugbawka I",
                    "Ugbawka Ii"
                ]
            },
            {
                "name": "Nkanu West",
                "wards": [
                    "Agbani",
                    "Akegbe Ugwu Okwuo",
                    "Akpugo Ii",
                    "Akpugo Iii",
                    "Akpugo Iv",
                    "Akugbo Iv",
                    "Amodu",
                    "Amurri",
                    "Ibite Akegbe Ugwu",
                    "Ndiuno Uwani Akpugo I",
                    "Obe",
                    "Obinagu Uwani Akpugo I",
                    "Obuoffia",
                    "Ozalla",
                    "Umueze"
                ]
            },
            {
                "name": "Nsukka",
                "wards": [
                    "Agbemebe Umabor",
                    "Akalite",
                    "Akpa Ozzi",
                    "Alor Uno",
                    "Ede Nta",
                    "Ede Ukwu",
                    "Edem Ani",
                    "Eha Ndiagu",
                    "Eha Uno",
                    "Ejuona Uwani",
                    "Ibagwani Ibagwaga Okpaligbo",
                    "Ibeku",
                    "Ihe",
                    "Mkpunano",
                    "Nnu",
                    "Obimo Ikwoka",
                    "Obukpa",
                    "Ogbozalla Idi",
                    "Okpuje Okutu Anuka",
                    "Owerre Umuoyo"
                ]
            },
            {
                "name": "Oji River",
                "wards": [
                    "Achiagu I",
                    "Achiagu Ii",
                    "Achiagu Iii",
                    "Achiuno I",
                    "Achiuno Ii",
                    "Achiuno Iii",
                    "Achiuno Iv",
                    "Akpugoeze",
                    "Awlaw",
                    "Inyi I",
                    "Inyi Ii",
                    "Inyi Iii",
                    "Inyi Iv",
                    "Oji River I",
                    "Oji River Ii",
                    "Oji River Iii",
                    "Oji River Iv",
                    "Ugwuoba I",
                    "Ugwuoba Ii",
                    "Ugwuoba Iii"
                ]
            },
            {
                "name": "Udenu",
                "wards": [
                    "Amala",
                    "Ezimo",
                    "Imilike",
                    "Obollo Afor",
                    "Obollo Eke",
                    "Obollo Etiti",
                    "Ogbodu Aba",
                    "Orba I",
                    "Orba Ii",
                    "Udunedem"
                ]
            },
            {
                "name": "Udi",
                "wards": [
                    "Abia",
                    "Abor",
                    "Affa Oghu Ikono",
                    "Akpa Kwume Nze",
                    "Amokwe",
                    "Awhum Ukana",
                    "Ebe",
                    "Egede Umuoka",
                    "Eke",
                    "Nachi",
                    "Ngwo Asa",
                    "Ngwo Uno",
                    "Nsude",
                    "Obinagu",
                    "Obioma",
                    "Okpatu",
                    "Udi Agbudu",
                    "Umuabi",
                    "Umuaga",
                    "Umulumgbe"
                ]
            },
            {
                "name": "Uzo Uwani",
                "wards": [
                    "Abbi",
                    "Adaba Nkume",
                    "Adani",
                    "Akpogu",
                    "Igga Asaba",
                    "Nimbo I",
                    "Nimbo Ii",
                    "Nkpologu",
                    "Nrobo",
                    "Ogurugu",
                    "Ojo",
                    "Ugbene I",
                    "Ugbene Ii",
                    "Ukpata",
                    "Umulokpa",
                    "Uvuru"
                ]
            }
        ]
    },
    {
        "state": "Gombe",
        "lgas": [
            {
                "name": "Akko",
                "wards": [
                    "Akko",
                    "Garko",
                    "Kalshingi",
                    "Kashere",
                    "Kumo Central",
                    "Kumo East",
                    "Kumo North",
                    "Kumo West",
                    "Pindiga",
                    "Tukulma",
                    "Tumu"
                ]
            },
            {
                "name": "Balanga",
                "wards": [
                    "Bambam",
                    "Bangu",
                    "Dadiya",
                    "Gelengu Balanga",
                    "Kindiyo",
                    "Kulani Degre Sikkam",
                    "Mwona",
                    "Nyuwar Jessu",
                    "Swa Ref W Waja",
                    "Talasse Dong Reme"
                ]
            },
            {
                "name": "Billiri",
                "wards": [
                    "Baganje North",
                    "Baganje South",
                    "Bare",
                    "Billiri North",
                    "Billiri South",
                    "Kalmai",
                    "Tal",
                    "Tanglang",
                    "Todi",
                    "Tudu Kwaya"
                ]
            },
            {
                "name": "Dukku",
                "wards": [
                    "Gombe Abba",
                    "Hashidu",
                    "Jamari",
                    "Kunde",
                    "Lafiya",
                    "Malala",
                    "Waziri North",
                    "Waziri South Central",
                    "Wuro Tale",
                    "Zange",
                    "Zaune"
                ]
            },
            {
                "name": "Funakaye",
                "wards": [
                    "Ashaka Magaba",
                    "Bage",
                    "Bajoga West",
                    "Bajoga East",
                    "Bodor Tilde",
                    "Jillahi",
                    "Kupto",
                    "Ribadu",
                    "Tongo",
                    "Wawa Wakkulutu"
                ]
            },
            {
                "name": "Gombe",
                "wards": [
                    "Ajiya",
                    "Bajoga",
                    "Bolari East",
                    "Bolari West",
                    "Dawaki",
                    "Herwagana",
                    "Jeka Dafari",
                    "Kumbiya Kumbiya",
                    "Nasarawa",
                    "Pantami",
                    "Shamaki"
                ]
            },
            {
                "name": "Kaltungo",
                "wards": [
                    "Awak",
                    "Bule Kaltin",
                    "Kaltungo East",
                    "Kaltungo West",
                    "Kamo",
                    "Tula Yiri",
                    "Tula Baule",
                    "Tula Wange",
                    "Tungo",
                    "Ture"
                ]
            },
            {
                "name": "Kwami",
                "wards": [
                    "Bojude",
                    "Daban Fulani",
                    "Doho",
                    "Dukul",
                    "Gadam",
                    "Jurara",
                    "Komfulata",
                    "Kwami",
                    "Malam Sidi",
                    "Malleri"
                ]
            },
            {
                "name": "Nafada",
                "wards": [
                    "Barwo Nasarawo",
                    "Barwo Winde",
                    "Birin Bolewa",
                    "Birin Fulani East",
                    "Birin Fulani West",
                    "Gudukku",
                    "Jigawa",
                    "Nafada Central",
                    "Nafada East",
                    "Nafada West"
                ]
            },
            {
                "name": "Shongom",
                "wards": [
                    "Bangunji",
                    "Boh",
                    "Burak",
                    "Filiya",
                    "Gundale",
                    "Gwandum",
                    "Kulishin",
                    "Kushi",
                    "Lalaipido",
                    "Lapan"
                ]
            },
            {
                "name": "Yalmaltu Deba",
                "wards": [
                    "Deba",
                    "Difa Lubo Kinafa",
                    "Gwani Shinga Wade",
                    "Hinna",
                    "Jagali North",
                    "Jagali South",
                    "Kanawa Wajari",
                    "Kuri Lano Lambam",
                    "Kwadon Liji Kurba",
                    "Nono Kunwal W Birdeka",
                    "Zambul Kwali"
                ]
            }
        ]
    },
    {
        "state": "Imo",
        "lgas": [
            {
                "name": "Aboh Mbaise",
                "wards": [
                    "Amuzu",
                    "Enyiogugu",
                    "Ibeku",
                    "Lagwa",
                    "Lorji",
                    "Mbutu",
                    "Nguru Ahiato",
                    "Nguru Nweke",
                    "Nguru Nwenkwo",
                    "Umuhu",
                    "Uvuru 1",
                    "Uvuru Ii"
                ]
            },
            {
                "name": "Ahiazu Mbaise",
                "wards": [
                    "Amuzi Ihenworie",
                    "Mpam",
                    "Nnarambia",
                    "Obohia Ekwereazu",
                    "Ogbe",
                    "Ogbor Umueze",
                    "Okirika Nweke",
                    "Okirika Nwenkwo",
                    "Oparanadim",
                    "Oru Na Lude",
                    "Otulu Aguneze",
                    "Umunumo Umuchieze"
                ]
            },
            {
                "name": "Ehime Mbano",
                "wards": [
                    "Agbaja",
                    "Nsu A Ikpe",
                    "Nsu B Ihitte",
                    "Nzerem Ikpem",
                    "Umualumaku Umuihim",
                    "Umueze I",
                    "Umueze Ii Umueleke",
                    "Umuezeala",
                    "Umukabia",
                    "Umunakanu",
                    "Umunumo"
                ]
            },
            {
                "name": "Ezinihitte Mbaise",
                "wards": [
                    "Amumara",
                    "Chokoneze Akpodim Ife",
                    "Eziudo",
                    "Ihitte",
                    "Itu",
                    "Oboama Umunama",
                    "Okpofe Ezeagbogu",
                    "Onicha I",
                    "Onicha Ii",
                    "Onicha Iii",
                    "Onicha Iv",
                    "Udo Na Obizi"
                ]
            },
            {
                "name": "Ideato North",
                "wards": [
                    "Akpulu",
                    "Akwu Owerre",
                    "Ezemazu Ozu",
                    "Isiokpo",
                    "Izuogu I",
                    "Izuogu Ii",
                    "Ndi Iheme Arondizuogu",
                    "Ndimoko",
                    "Obodoukwu",
                    "Osina",
                    "Ozuakoki Umuago",
                    "Umuokwara Umuezeaga",
                    "Umuopia Umukegwu",
                    "Uzii Umualoma"
                ]
            },
            {
                "name": "Ideato South",
                "wards": [
                    "Amanator Umueshi",
                    "Dikenafai",
                    "Isiekenesi I",
                    "Isiekenesi Ii",
                    "Ntueke",
                    "Obiohia",
                    "Ogboko I",
                    "Ogboko Ii",
                    "Ugbelle",
                    "Umuakam Umuago",
                    "Umuchima",
                    "Umuma Isiaku",
                    "Umuobom"
                ]
            },
            {
                "name": "Ihitte Uboma",
                "wards": [
                    "Abueke",
                    "Amainyi",
                    "Amakohia",
                    "Atonerim",
                    "Awuchinumo",
                    "Dimneze",
                    "Ikperejere",
                    "Okata",
                    "Umuezegwu",
                    "Umuihi"
                ]
            },
            {
                "name": "Ikeduru",
                "wards": [
                    "Akabo",
                    "Amaimo",
                    "Amakohia",
                    "Amatta",
                    "Atta I",
                    "Atta Ii",
                    "Avuvu",
                    "Iho",
                    "Inyishi Umudim",
                    "Ngugo Ikembara",
                    "Ugirike Okwu Eziama",
                    "Uzoagba"
                ]
            },
            {
                "name": "Isiala Mbano",
                "wards": [
                    "Amaraku",
                    "Amauzari",
                    "Ibeme",
                    "Obollo",
                    "Ogbor",
                    "Osu Achara",
                    "Osu Owerre I",
                    "Osu Owerre Ii",
                    "Osuama Anara",
                    "Ugiri Oka",
                    "Umunkwo",
                    "Umuozu"
                ]
            },
            {
                "name": "Isu",
                "wards": [
                    "Amandugba I",
                    "Amandugba Ii",
                    "Amurie Omanze I",
                    "Amurie Omanze Ii",
                    "Ekwe I",
                    "Ekwe Ii",
                    "Isu Njaba Iii",
                    "Isu Njaba I",
                    "Isu Njaba Ii",
                    "Umundugba I",
                    "Umundugba Ii"
                ]
            },
            {
                "name": "Mbaitoli",
                "wards": [
                    "Afara Eziama",
                    "Amaike Mbieri",
                    "Ezinihitie Mbieri",
                    "Ifakala",
                    "Ogbaku",
                    "Ogwa I",
                    "Ogwa Ii",
                    "Orodo A",
                    "Orodo B",
                    "Ubomiri",
                    "Umunoha Azara",
                    "Umunwoha Mbieri Umuawu"
                ]
            },
            {
                "name": "Ngor Okpala",
                "wards": [
                    "Amala Alulu Oburu Obokwe Ntu",
                    "Elelem Obike",
                    "Eziama Okpala",
                    "Imerienwe",
                    "Logara Umuohiagu",
                    "Ngor Ihitte Umukabia",
                    "Nguru Umuowa",
                    "Obiangwu",
                    "Ohekelem Nnorie",
                    "Ozuzu",
                    "Umuhu"
                ]
            },
            {
                "name": "Njaba",
                "wards": [
                    "Amucha I",
                    "Amucha Ii",
                    "Atta I",
                    "Atta Ii",
                    "Atta Iii",
                    "Nkume",
                    "Okwudor",
                    "Umuaka I",
                    "Umuaka Ii",
                    "Umuaka Iii",
                    "Umuaka Iv"
                ]
            },
            {
                "name": "Nkwerre",
                "wards": [
                    "Amaokpara",
                    "Eziama Obaire",
                    "Nkwerre Iv Umunubo Umunachi",
                    "Nkwerre V",
                    "Nnanano Nkwerre Ii",
                    "Onusa",
                    "Owerre Nkworji I",
                    "Owerre Nkworji Ii",
                    "Umudi Umuwala",
                    "Umukor Nkwerre Iii"
                ]
            },
            {
                "name": "Nwangele",
                "wards": [
                    "Abajah Ward I",
                    "Abajah Ward Ii",
                    "Abba Ward",
                    "Amaju Community Ward Amaigbo Iii",
                    "Amamnaisi Amaigbo Iv",
                    "Amano Umudurumba Ward Amaigbo I",
                    "Dim Na Nume",
                    "Ezeobolo Ofeahia Duruoha Umukabia Amaigbo Ward V",
                    "Kara Na Orlu",
                    "Umuanu Community Ward Amaigbo Ii",
                    "Umuozu Ward"
                ]
            },
            {
                "name": "Obowo",
                "wards": [
                    "Alike",
                    "Amanze Umungwa",
                    "Amuzi",
                    "Avutu",
                    "Ehume",
                    "Odenkume Umuosochie",
                    "Okenalogho",
                    "Okwuohia",
                    "Umuariam Achara",
                    "Umunachi"
                ]
            },
            {
                "name": "Oguta",
                "wards": [
                    "Awa",
                    "Egwe Egbuoma",
                    "Izombe",
                    "Mbala Uba",
                    "Ndeuloukwu Umuowere",
                    "Obudi Aro",
                    "Oguta A",
                    "Oguta B",
                    "Oru",
                    "Ossemotor Enuigbo",
                    "Uwaorie"
                ]
            },
            {
                "name": "Ohaji Egbema",
                "wards": [
                    "Assa Obile",
                    "Awara Ikwerede",
                    "Egbema A",
                    "Egbema B",
                    "Egbema C",
                    "Egbema D",
                    "Egbema E",
                    "Ekwuato",
                    "Obitti Mgbishi",
                    "Ohoba",
                    "Umuagwo",
                    "Umuapu"
                ]
            },
            {
                "name": "Okigwe",
                "wards": [
                    "Agbobu",
                    "Aku",
                    "Amuro",
                    "Ezinachi",
                    "Ihube",
                    "Ndimoko Ofeimo Ibinta Okanachi Umuowa Ibu",
                    "Ogii",
                    "Okigwe I",
                    "Okigwe Ii",
                    "Umualumuoke",
                    "Umulolo"
                ]
            },
            {
                "name": "Onuimo",
                "wards": [
                    "Aboh Okohia",
                    "Ezelu",
                    "Eziama",
                    "Ofeahia Umuanumeze",
                    "Okwelle I",
                    "Okwelle Ii",
                    "Owerre Okwe",
                    "Ozimo Umuneze",
                    "Umucheke",
                    "Umuna"
                ]
            },
            {
                "name": "Orlu",
                "wards": [
                    "Amaifeke",
                    "Ebenese Umueze Nnachi Ihioma",
                    "Eziachi Amike",
                    "Ihite Owerre",
                    "Ogberuru Obibi",
                    "Ohafor Okporo Umutanze",
                    "Okaeke Okporo",
                    "Okwua Bala Ihioma",
                    "Orlu Mgbee Orlu Govt Station",
                    "Owerri Ebeiri",
                    "Umudioka",
                    "Umuna",
                    "Umuzike Umuowa"
                ]
            },
            {
                "name": "Orsu",
                "wards": [
                    "Amaruru",
                    "Assah Ubiri Elem",
                    "Ebenator",
                    "Eziawa",
                    "Ihitenansa",
                    "Okwuamaraihie I",
                    "Okwuamaraihie Ii",
                    "Okwuetiti",
                    "Okwufuruaku",
                    "Orsu Ihiteukwa",
                    "Umuhu Okabia"
                ]
            },
            {
                "name": "Oru East",
                "wards": [
                    "Akata",
                    "Akuma",
                    "Amagu",
                    "Amiri I",
                    "Amiri Ii",
                    "Awo Omamma I",
                    "Awo Omamma Ii",
                    "Awo Omamma Iii",
                    "Awo Omamma Iv",
                    "Omuma"
                ]
            },
            {
                "name": "Oru West",
                "wards": [
                    "Aji",
                    "Amafuo",
                    "Ibiaso Egbe",
                    "Mgbidi I",
                    "Mgbidi Ii",
                    "Nempi Elem",
                    "Ohakpu",
                    "Otulu",
                    "Ozara",
                    "Ubulu"
                ]
            },
            {
                "name": "Owerri North",
                "wards": [
                    "Agbala Obube Ulakwo",
                    "Awaka Ihitte Ogada",
                    "Egbu",
                    "Emekuku I",
                    "Emekuku Ii",
                    "Emii",
                    "Ihitta Oha",
                    "Naze",
                    "Obibi Uratta I",
                    "Obibi Uratta Ii",
                    "Obibiezena",
                    "Orji"
                ]
            },
            {
                "name": "Owerri Urban",
                "wards": [
                    "Aladinma I",
                    "Aladinma Ii",
                    "Azuzi I",
                    "Azuzi Ii",
                    "Azuzi Iii",
                    "Azuzi Iv",
                    "Gra",
                    "Ikenegbu I",
                    "Ikenegbu Ii",
                    "New Owerri I",
                    "New Owerri Ii"
                ]
            },
            {
                "name": "Owerri West",
                "wards": [
                    "Amakohia Ubi Ndegwu Ohii",
                    "Avu Oforola",
                    "Emeabiam Okolochi",
                    "Eziobodo",
                    "Ihiagwa",
                    "Irete Orogwe",
                    "Nekede",
                    "Obinze",
                    "Okuku",
                    "Umuguma"
                ]
            }
        ]
    },
    {
        "state": "Jigawa",
        "lgas": [
            {
                "name": "Auyo",
                "wards": [
                    "Auyakayi",
                    "Auyo",
                    "Ayama",
                    "Ayan",
                    "Gamafoi",
                    "Gamsarka",
                    "Gatafa",
                    "Kafur",
                    "Tsidir",
                    "Unik"
                ]
            },
            {
                "name": "Babura",
                "wards": [
                    "Babura",
                    "Batali",
                    "Dorawa",
                    "Garu",
                    "Gasakoli",
                    "Insharuwa",
                    "Jigawa",
                    "Kanya",
                    "Kuzunzumi",
                    "Kyambo",
                    "Takwasa"
                ]
            },
            {
                "name": "Birnin Kudu",
                "wards": [
                    "Birnin Kudu",
                    "Kangire",
                    "Kantoga",
                    "Kiyako",
                    "Kwangwara",
                    "Lafiya",
                    "Sundimina",
                    "Surko",
                    "Unguwar Ya",
                    "Wurno",
                    "Yalwan Damai"
                ]
            },
            {
                "name": "Birniwa",
                "wards": [
                    "Batu",
                    "Birniwa",
                    "Dangwaleri",
                    "Diginsa",
                    "Fagi",
                    "Kachallari",
                    "Karanka",
                    "Kazura",
                    "Machinamari",
                    "Matamu",
                    "Nguwa"
                ]
            },
            {
                "name": "Buji",
                "wards": [
                    "Ahoto",
                    "Buji",
                    "Churbun",
                    "Falageri",
                    "Gantsa",
                    "K Lelen Kudu",
                    "Kawaya",
                    "Kukuma",
                    "Madabe",
                    "Y Tukur"
                ]
            },
            {
                "name": "Dutse",
                "wards": [
                    "Abaya",
                    "Chamo",
                    "Dundubus",
                    "Duru",
                    "Jigawar Tsada",
                    "Kachi",
                    "Karnaya",
                    "Kudai",
                    "Limawa",
                    "Madobi",
                    "Sakwaya"
                ]
            },
            {
                "name": "Gagarawa",
                "wards": [
                    "Gagarawa Gari",
                    "Gagarawa Tasha",
                    "Garin Chiroma",
                    "Kore Balatu",
                    "Madaka",
                    "Maiaduwa",
                    "Maikilili",
                    "Medu",
                    "Yalawa",
                    "Zarada"
                ]
            },
            {
                "name": "Garki",
                "wards": [
                    "Buduru",
                    "Doko",
                    "Garki",
                    "Gwarzon Garki",
                    "Jirma",
                    "Kanya",
                    "Kargo",
                    "Kore",
                    "Muku",
                    "Rafin Marke",
                    "Siyori"
                ]
            },
            {
                "name": "Gumel",
                "wards": [
                    "Baikarya",
                    "Danama",
                    "Dantanoma",
                    "Galagamma",
                    "Garin Alhaji Barka",
                    "Garin Gambo",
                    "Gusau",
                    "Hammado",
                    "Kofar Arewa",
                    "Kofar Yamma",
                    "Zango"
                ]
            },
            {
                "name": "Guri",
                "wards": [
                    "Abunabo",
                    "Adiyani",
                    "Dawa",
                    "Garbagal",
                    "Guri",
                    "Kadira",
                    "Lafiya",
                    "Margadu",
                    "Matara Baba",
                    "Musari"
                ]
            },
            {
                "name": "Gwaram",
                "wards": [
                    "Basirka",
                    "Dingaya",
                    "Fagam",
                    "Farin Dutse",
                    "Gwaram Tsohuwa",
                    "Kila",
                    "Kwandiko",
                    "Maruta",
                    "Sara",
                    "Tsangarwa",
                    "Zandan Nagogo"
                ]
            },
            {
                "name": "Gwiwa",
                "wards": [
                    "Buntusu",
                    "Dabi",
                    "Darina",
                    "F Yamma",
                    "Guntai",
                    "Gwiwa",
                    "Korayel",
                    "Rorau",
                    "Shafe",
                    "Yola",
                    "Zaumar Sainawa"
                ]
            },
            {
                "name": "Hadejia",
                "wards": [
                    "Atafi",
                    "Dubantu",
                    "Gagulmari",
                    "Kasuwar Kofa",
                    "Kasuwar Kuda",
                    "Majema",
                    "Matsaro",
                    "Rumfa",
                    "Sabon Garu",
                    "Yankoli",
                    "Yayari"
                ]
            },
            {
                "name": "Jahun",
                "wards": [
                    "Aujara",
                    "Gangawa",
                    "Gauza Tazara",
                    "Gunka",
                    "Harbo Sabuwa",
                    "Harbo Tsohuwa",
                    "Idanuna",
                    "Jabarna",
                    "Jahun",
                    "Kale",
                    "Kanwa"
                ]
            },
            {
                "name": "Kafin Hausa",
                "wards": [
                    "Balangu",
                    "Dumadumin Toka",
                    "Gafaya",
                    "Jabo",
                    "Kafin Hausa",
                    "Kazalewa",
                    "Majawa",
                    "Mezan",
                    "Ruba",
                    "Sarawa",
                    "Zago"
                ]
            },
            {
                "name": "Kaugama",
                "wards": [
                    "Arbus",
                    "Askandu",
                    "Dabuwaran",
                    "Dakaiyawa",
                    "Hadin",
                    "Ja E",
                    "Jarkasa",
                    "Kaugama",
                    "Marke",
                    "Unguwar Jibrin",
                    "Yalo"
                ]
            },
            {
                "name": "Kazaure",
                "wards": [
                    "Ba Auzini",
                    "Daba",
                    "Dabaza",
                    "Dandi",
                    "Gada",
                    "Kanti",
                    "Maradawa",
                    "Sabaru",
                    "Unguwar Arewa",
                    "Unguwar Gabas",
                    "Unguwar Yamma"
                ]
            },
            {
                "name": "Kirika Samma",
                "wards": [
                    "Baturiya",
                    "Bulunchai",
                    "Doleri",
                    "Fandum",
                    "Gayin",
                    "Kirika Samma",
                    "Madachi",
                    "Marma",
                    "Tarabu",
                    "Tsheguwa"
                ]
            },
            {
                "name": "Kiyawa",
                "wards": [
                    "Abalago",
                    "Andaza",
                    "Fake",
                    "Garko",
                    "Guruduba",
                    "Katanga",
                    "Katuka",
                    "Kiyawa",
                    "Kwanda",
                    "Maje",
                    "Tsurma"
                ]
            },
            {
                "name": "Maigatari",
                "wards": [
                    "Balarabe",
                    "Dankumbo",
                    "Fulata",
                    "Galadi",
                    "Jajeri",
                    "Kukayasku",
                    "Madana",
                    "Maigatari Arewa",
                    "Maigatari Kudu",
                    "Matoya",
                    "Turbus"
                ]
            },
            {
                "name": "Malam Madori",
                "wards": [
                    "Arki",
                    "Dunari",
                    "Fateka Akurya",
                    "Garin Gabas",
                    "Maira Kumi Bara Musa",
                    "Maka Ddari",
                    "Malam Madori",
                    "Shaiya",
                    "Tagwaro",
                    "Tashena",
                    "Tonikutara"
                ]
            },
            {
                "name": "Miga",
                "wards": [
                    "Dangyatin",
                    "Hantsu",
                    "Harbo",
                    "Koya",
                    "Miga",
                    "Sabon Gari Takanebu",
                    "Sansani",
                    "Tsakuwawa",
                    "Yanduna",
                    "Zareku"
                ]
            },
            {
                "name": "Ringim",
                "wards": [
                    "Chai Chai",
                    "Dabi",
                    "Kafin Babushe",
                    "Karshi",
                    "Kyarama",
                    "Ringim",
                    "Sankara",
                    "Sintilmawa",
                    "Tofa",
                    "Yandutse"
                ]
            },
            {
                "name": "Roni",
                "wards": [
                    "Amaryawa",
                    "Baragumi",
                    "Dansure",
                    "Fara",
                    "Gora",
                    "Kwaita",
                    "Roni",
                    "Sankau",
                    "Tunas",
                    "Yanzaki",
                    "Zugai"
                ]
            },
            {
                "name": "Sule Tankarkar",
                "wards": [
                    "Albasu",
                    "Amanga",
                    "Dangwanki",
                    "Danladi",
                    "Danzomo",
                    "Jeke",
                    "Shabaru",
                    "Sule Tankarkar",
                    "Takatsaba",
                    "Yandamo"
                ]
            },
            {
                "name": "Taura",
                "wards": [
                    "Ajaura",
                    "Chakwaikwaiwa",
                    "Chukuto",
                    "Gujungu",
                    "Kiri",
                    "Kwalam",
                    "Maje",
                    "Majiya",
                    "S Garin Yaya",
                    "Taura"
                ]
            },
            {
                "name": "Yankwashi",
                "wards": [
                    "Achilafiya",
                    "Belas",
                    "Dawan Gawo",
                    "Gurjiya",
                    "Gwarta",
                    "Karkarna",
                    "Kuda",
                    "Ringim",
                    "Yankwashi",
                    "Zunbumba"
                ]
            }
        ]
    },
    {
        "state": "Kaduna",
        "lgas": [
            {
                "name": "Birnin Gwari",
                "wards": [
                    "Dogon Dawa",
                    "Gayam",
                    "Kakangi",
                    "Kazage",
                    "Kutemesi",
                    "Kuyelo",
                    "Magajin Gari I",
                    "Magajin Gari Ii",
                    "Magajin Gari Iii",
                    "Randagi",
                    "Tabanni"
                ]
            },
            {
                "name": "Chikun",
                "wards": [
                    "Chikun",
                    "Gwagwada",
                    "Kakau",
                    "Kujama",
                    "Kunai",
                    "Kuriga",
                    "Narayi",
                    "Nasarawa",
                    "Rido",
                    "S Ggarin Arewa Tirkaniya",
                    "Sabon Tasha",
                    "Ung Yelwa"
                ]
            },
            {
                "name": "Giwa",
                "wards": [
                    "Danmahawayi",
                    "Galadimawa",
                    "Gangara",
                    "Giwa",
                    "Idasu",
                    "Kadage",
                    "Kakangi",
                    "Kidandan",
                    "Pan Hauya",
                    "Shika",
                    "Yakawada"
                ]
            },
            {
                "name": "Igabi",
                "wards": [
                    "Afaka",
                    "Birnin Yero",
                    "Gadan Gayan",
                    "Gwaraji",
                    "Igabi",
                    "Kerawa",
                    "Kwarau",
                    "Rigachikun",
                    "Rigasa",
                    "Sabon Birnin Daji",
                    "Turunku",
                    "Zangon Aya"
                ]
            },
            {
                "name": "Ikara",
                "wards": [
                    "Auchan",
                    "Ikara",
                    "Janfala",
                    "K Kogi",
                    "Kuya",
                    "Paki",
                    "Pala",
                    "Rumi",
                    "Saulawa",
                    "Saya Saya"
                ]
            },
            {
                "name": "Jaba",
                "wards": [
                    "Chori",
                    "Daddu",
                    "Dura Bitaro",
                    "Fada",
                    "Fai",
                    "Nduyah",
                    "Nok",
                    "Sabchem",
                    "Sabzuro",
                    "Sambam"
                ]
            },
            {
                "name": "Jema'a",
                "wards": [
                    "Asso",
                    "Atuku",
                    "Bedde",
                    "Gidan Waya",
                    "Godogodo",
                    "Jagindi",
                    "Kafanchan A",
                    "Kafanchan B",
                    "Kagoma",
                    "Kaninkon",
                    "Maigizo A",
                    "Takau B"
                ]
            },
            {
                "name": "Kachia",
                "wards": [
                    "Agunu",
                    "Ankwa",
                    "Awon",
                    "Bishini",
                    "Doka",
                    "Gidan Tagwai",
                    "Gumel",
                    "Kachia Urban",
                    "Katari",
                    "Kurmin Musa",
                    "Kwaturu",
                    "Sabon Sarki"
                ]
            },
            {
                "name": "Kaduna North",
                "wards": [
                    "Badarawa",
                    "Gabasawa",
                    "Gaji",
                    "Hayin Banki",
                    "Kabala Costain Doki",
                    "Kawo",
                    "Maiburji",
                    "Shaba",
                    "Unguwan Dosa",
                    "Unguwan Liman",
                    "Unguwan Sarki",
                    "Unguwan Shanu"
                ]
            },
            {
                "name": "Kaduna South",
                "wards": [
                    "Badiko",
                    "Barnawa",
                    "Kakuri Gwari",
                    "Kakuri Hausa",
                    "Makera",
                    "Sabon Gari North",
                    "Sabon Gari South",
                    "Television",
                    "Tudun Nuwapa",
                    "Tudun Wada North",
                    "Tudun Wada South",
                    "Tudun Wada West",
                    "Ung Sanusi"
                ]
            },
            {
                "name": "Kagarko",
                "wards": [
                    "Aribi",
                    "Iddah",
                    "Jere North",
                    "Jere South",
                    "Kagarko North",
                    "Kagarko South",
                    "Katugal",
                    "Kukui",
                    "Kurmin Jibrin",
                    "Kushe"
                ]
            },
            {
                "name": "Kajuru",
                "wards": [
                    "Afogo",
                    "Buda",
                    "Idon",
                    "Kajuru",
                    "Kallah",
                    "Kasuwan Magani",
                    "Kufana",
                    "Maro",
                    "Rimau",
                    "Tantatu"
                ]
            },
            {
                "name": "Kaura",
                "wards": [
                    "Agban",
                    "Bondon",
                    "Fada",
                    "Kadarko",
                    "Kaura",
                    "Kpak",
                    "Kukum",
                    "Mallagum",
                    "Manchok",
                    "Zankan"
                ]
            },
            {
                "name": "Kauru",
                "wards": [
                    "Badurum Sama",
                    "Bital",
                    "Damakasuwa",
                    "Dawaki",
                    "Geshere",
                    "Kamaru",
                    "Kauru East",
                    "Kauru West",
                    "Kwassam",
                    "Makami",
                    "Pari"
                ]
            },
            {
                "name": "Kubau",
                "wards": [
                    "Anchau",
                    "Damau",
                    "Dutsen Wai",
                    "Haskiya",
                    "Kargi",
                    "Karreh",
                    "Kubau",
                    "Mah",
                    "Pambegua",
                    "Zabi",
                    "Zuntu"
                ]
            },
            {
                "name": "Kudan",
                "wards": [
                    "Doka",
                    "Garu",
                    "Hunkuyi",
                    "Kauran Wali North",
                    "Kauran Wali South",
                    "Kudan",
                    "Likoro",
                    "Sabon Gari Hunkuyi",
                    "Taban Sani",
                    "Zabi"
                ]
            },
            {
                "name": "Lere",
                "wards": [
                    "Abadawa",
                    "Dan Alhaji",
                    "Garu",
                    "Gure Kahugu",
                    "Kayarda",
                    "Lazuru",
                    "Lere",
                    "Ramin Kura",
                    "Sabon Birnin",
                    "Saminaka",
                    "Yar Kasuwa"
                ]
            },
            {
                "name": "Makarfi",
                "wards": [
                    "Dandamisa",
                    "Danguziri",
                    "Gazara",
                    "Gimi",
                    "Gubuchi",
                    "Gwanki",
                    "Makarfi",
                    "Mayere",
                    "Nassarwan Doya",
                    "Tudun Wada"
                ]
            },
            {
                "name": "Sabon Gari",
                "wards": [
                    "Basawa",
                    "Bomo",
                    "Chikaji",
                    "Dogarawa",
                    "Hanwa",
                    "Jama A",
                    "Jushin Waje",
                    "Muchia",
                    "Samaru",
                    "Unguwan Gabas",
                    "Zabi"
                ]
            },
            {
                "name": "Sanga",
                "wards": [
                    "Aboro",
                    "Arak",
                    "Ayu",
                    "Bokana",
                    "Fadan Karshi",
                    "Gwantu",
                    "Nandu",
                    "Ninzam North",
                    "Ninzam South",
                    "Ninzam West",
                    "Wasa Station"
                ]
            },
            {
                "name": "Soba",
                "wards": [
                    "Dan Wata",
                    "Gamagira",
                    "Garun Gwanki",
                    "Gimba",
                    "Kinkiba",
                    "Kwassallo",
                    "Maigana",
                    "Rahama",
                    "Richifa",
                    "Soba",
                    "Turawa"
                ]
            },
            {
                "name": "Zangon Kataf",
                "wards": [
                    "Gidan Jatau",
                    "Gora",
                    "Kamantan",
                    "Kamuru Ikulu North",
                    "Madakiya",
                    "Unguwar Gaiya",
                    "Unguwar Rimi",
                    "Zaman Dabo",
                    "Zango Urban",
                    "Zonkwa",
                    "Zonzon"
                ]
            },
            {
                "name": "Zaria",
                "wards": [
                    "Dambo",
                    "Dutsen Abba",
                    "Gyallesu",
                    "Kaura",
                    "Kufena",
                    "Kwarbai A",
                    "Kwarbai B",
                    "Limancin Kona",
                    "Tudun Wada",
                    "Tukur Tukur",
                    "Ung Fatika",
                    "Ung Juma",
                    "Wucicciri"
                ]
            }
        ]
    },
    {
        "state": "Kano",
        "lgas": [
            {
                "name": "Ajingi",
                "wards": [
                    "Ajingi",
                    "Balare",
                    "Chula",
                    "Dabin Kanawa",
                    "Dundun",
                    "Gafasa",
                    "Gurduba",
                    "Kunkurawa",
                    "Toranke",
                    "Ungawar Bai"
                ]
            },
            {
                "name": "Albasu",
                "wards": [
                    "Albasu Central",
                    "Bataiya",
                    "Chamarana",
                    "Daho",
                    "Fanda",
                    "Faragai",
                    "Gagarame",
                    "Hungu",
                    "Saya Saya",
                    "Tsangaya"
                ]
            },
            {
                "name": "Bagwai",
                "wards": [
                    "Bagwai",
                    "Dangada",
                    "Gadanya",
                    "Gogori",
                    "Kiyawa",
                    "Kwajali",
                    "Rimin Dako",
                    "Romo",
                    "Sare Sare",
                    "Wuro Bagga"
                ]
            },
            {
                "name": "Bebeji",
                "wards": [
                    "Anadariya",
                    "Baguda",
                    "Bebeji",
                    "Damau",
                    "Durmawa",
                    "Gargai",
                    "Gwarmai",
                    "Kofa",
                    "Kuki",
                    "Rahama",
                    "Ranka",
                    "Rantan",
                    "Tariwa",
                    "Wak"
                ]
            },
            {
                "name": "Bichi",
                "wards": [
                    "Badume",
                    "Bichi",
                    "Danzabuwa",
                    "Fagolo",
                    "Kaukau",
                    "Kwamarawa",
                    "Kyalli",
                    "Muntsira",
                    "Saye",
                    "Waire",
                    "Yallami"
                ]
            },
            {
                "name": "Bunkure",
                "wards": [
                    "Barkum",
                    "Bono",
                    "Bunkure",
                    "Chirin",
                    "Gafan",
                    "Gurjiya",
                    "Gwamma",
                    "Kulluwa",
                    "Kumurya",
                    "Sanda"
                ]
            },
            {
                "name": "Dala",
                "wards": [
                    "Adakawa",
                    "Bakin Ruwa",
                    "Dala",
                    "Dogon Nama",
                    "Gobirawa",
                    "Gwammaja",
                    "Kabuwaya",
                    "Kantudu",
                    "Kofar Mazugal",
                    "Kofar Ruwa",
                    "Madigawa",
                    "Yalwa"
                ]
            },
            {
                "name": "Danbata",
                "wards": [
                    "Ajumawa",
                    "Danbatta East",
                    "Danbatta West",
                    "Fagwalawa",
                    "Goron Maje",
                    "Gwanda",
                    "Gwarabjawa",
                    "Kore",
                    "Saidawa",
                    "Sansan"
                ]
            },
            {
                "name": "Dawaki Kudu",
                "wards": [
                    "Dabar Kwari",
                    "Danbagiwa",
                    "Dawaki",
                    "Dawakiji",
                    "Dosan",
                    "Gano",
                    "Gurjiya",
                    "Jido",
                    "Tamburawa",
                    "Tsakuwa",
                    "Unguwar Duniya",
                    "Yanbarau",
                    "Yankatsari",
                    "Yargaya",
                    "Zogarawa"
                ]
            },
            {
                "name": "Dawaki Tofa",
                "wards": [
                    "Dan Guguwa",
                    "Dawaki East",
                    "Dawaki West",
                    "Dawanau",
                    "Ganduje",
                    "Gargari",
                    "Jalli",
                    "Kwa",
                    "Marke",
                    "Tattarawa",
                    "Tumfafi"
                ]
            },
            {
                "name": "Doguwa",
                "wards": [
                    "Dariya",
                    "Dogon Kawo",
                    "Duguwa",
                    "Falgore",
                    "Maraku",
                    "Ragada",
                    "Ririwai",
                    "Tagwaye",
                    "Unguwar Natsohuwa",
                    "Zainabi"
                ]
            },
            {
                "name": "Fagge",
                "wards": [
                    "Fagge A",
                    "Fagge B",
                    "Fagge C",
                    "Fagge D",
                    "Fagge E",
                    "Kwachiri",
                    "Rijiyar Lemo",
                    "Sabongari East",
                    "Sabongari West",
                    "Yammata"
                ]
            },
            {
                "name": "Gabasawa",
                "wards": [
                    "Gabasawa",
                    "Garun Danga",
                    "Joda",
                    "Karmaki",
                    "Mekiya",
                    "Tarauni",
                    "Yantar Arewwa",
                    "Yautar Kudu",
                    "Yumbu",
                    "Zakirai",
                    "Zugachi"
                ]
            },
            {
                "name": "Garko",
                "wards": [
                    "Dal",
                    "Garin Ali",
                    "Garko",
                    "Gurjiya",
                    "Kafin Malamai",
                    "Katumari",
                    "Kwas",
                    "Raba",
                    "Sarina",
                    "Zakarawa"
                ]
            },
            {
                "name": "Garun Malam",
                "wards": [
                    "Chiromawa",
                    "Dorawar Sallau",
                    "Fankurun",
                    "Garun Babba",
                    "Garun Malam",
                    "Jobawa",
                    "Kadawa",
                    "Makwaro",
                    "Yad Akwari",
                    "Yalwan Yadakwari"
                ]
            },
            {
                "name": "Gaya",
                "wards": [
                    "Balan",
                    "Gamarya",
                    "Gamoji",
                    "Gaya Arewa",
                    "Gaya Kudu",
                    "Kademi",
                    "Kazurawa",
                    "Maimakawa",
                    "Shagogo",
                    "Wudilawa"
                ]
            },
            {
                "name": "Gezawa",
                "wards": [
                    "Babawa",
                    "Gawo",
                    "Gezawa",
                    "Jogana",
                    "Ketawa",
                    "Mesar Tudu",
                    "Sararin Gezawa",
                    "Tsamiya Babba",
                    "Tumbau",
                    "Wangara",
                    "Zango"
                ]
            },
            {
                "name": "Gwale",
                "wards": [
                    "Dandago",
                    "Diso",
                    "Dorayi",
                    "Galadanchi",
                    "Goron Dutse",
                    "Gwale",
                    "Gyaranya",
                    "Kabuga",
                    "Mandawari",
                    "Sani Mai Magge"
                ]
            },
            {
                "name": "Gwarzo",
                "wards": [
                    "Getso",
                    "Gwarzo",
                    "Jama A",
                    "Kara",
                    "Kutama",
                    "Lakwaya",
                    "Madadi",
                    "Mainika",
                    "Sabon Birni",
                    "Unguwar Tudu"
                ]
            },
            {
                "name": "Kabo",
                "wards": [
                    "Dugabau",
                    "Durun",
                    "Gammo",
                    "Garo",
                    "Godiya",
                    "Gude",
                    "Hauwade",
                    "Kabo",
                    "Kanwa",
                    "Masanawa"
                ]
            },
            {
                "name": "Kano Municipal",
                "wards": [
                    "Chedi",
                    "Dan Agundi",
                    "Gandun Albasa",
                    "Jakara",
                    "Kankarofi",
                    "Shahuchi",
                    "Sharada",
                    "Sheshe",
                    "Tudun Nufawa",
                    "Tudun Wazirchi",
                    "Yakasai",
                    "Zaitawa",
                    "Zango"
                ]
            },
            {
                "name": "Karaye",
                "wards": [
                    "Daura",
                    "Kafin Dafga",
                    "Karaye",
                    "Kurugu",
                    "Kwanyawa",
                    "Tudun Kaya",
                    "Turawa",
                    "Unguwar Hajji",
                    "Yammedi",
                    "Yola"
                ]
            },
            {
                "name": "Kibiya",
                "wards": [
                    "Durba",
                    "Fammar",
                    "Fassi",
                    "Kadigawa",
                    "Kahu",
                    "Kibiya I",
                    "Kibiya Ii",
                    "Nariya",
                    "Tarai",
                    "Unguwar Gai"
                ]
            },
            {
                "name": "Kiru",
                "wards": [
                    "Ba Awa",
                    "Badafi",
                    "Bargoni",
                    "Bauda",
                    "Dangora",
                    "Dansohiya",
                    "Dashi",
                    "Galadimawa",
                    "Kiru",
                    "Kogo",
                    "Maraku",
                    "Tsaudawa",
                    "Yako",
                    "Yalwa",
                    "Zuwo"
                ]
            },
            {
                "name": "Kumbotso",
                "wards": [
                    "Challawa",
                    "Chiranchi",
                    "Danbare",
                    "Danmaliki",
                    "Guringawa",
                    "Kumbotso",
                    "Kureken Sani",
                    "Mariri",
                    "Na Ibawa",
                    "Panshekara",
                    "Unguwar Rimi"
                ]
            },
            {
                "name": "Kunchi",
                "wards": [
                    "Bumai",
                    "Garin Sheme",
                    "Gwarmai",
                    "Kasuwar Kuka",
                    "Kunchi",
                    "Matan Fada",
                    "Ridawa",
                    "Shamakawa",
                    "Shuwaki",
                    "Yandadi"
                ]
            },
            {
                "name": "Kura",
                "wards": [
                    "Dalili",
                    "Dan Hassan",
                    "Dukawa",
                    "Gundutse",
                    "Karfi",
                    "Kosawa",
                    "Kura",
                    "Kurunsumau",
                    "Rigar Duka",
                    "Tanawa"
                ]
            },
            {
                "name": "Madobi",
                "wards": [
                    "Burji",
                    "Cinkoso",
                    "Galinja",
                    "Gora",
                    "Kafin Agur",
                    "Kanwa",
                    "Kaura Mata",
                    "Kubaraci",
                    "Kwankwaso",
                    "Madobi",
                    "Rikadawa",
                    "Yakun"
                ]
            },
            {
                "name": "Makoda",
                "wards": [
                    "Babbar Riga",
                    "Durma",
                    "Jibga",
                    "Kadandani",
                    "Koguna",
                    "Koren Tatso",
                    "Maitsidau",
                    "Makoda",
                    "Satame",
                    "Tangaji",
                    "Wailare"
                ]
            },
            {
                "name": "Minjibir",
                "wards": [
                    "Azore",
                    "Gandurwawa",
                    "Kantama",
                    "Kunya",
                    "Kuru",
                    "Kwarkiya",
                    "Minjibir",
                    "Sarbi",
                    "Tsakiya",
                    "Tsakuwa",
                    "Wasai"
                ]
            },
            {
                "name": "Nasarawa",
                "wards": [
                    "Dakata",
                    "Gama",
                    "Gawuna",
                    "Giginyu",
                    "Gwagwarwa",
                    "Hotoro North",
                    "Hotoro South",
                    "Kaura Goje",
                    "Kawaji",
                    "Tudun Murtala",
                    "Tudun Wada"
                ]
            },
            {
                "name": "Rano",
                "wards": [
                    "Dawaki",
                    "Lausu",
                    "Madachi",
                    "Rano",
                    "Rurum Sabon Gari",
                    "Rurum Tsohon Gari",
                    "Saji",
                    "Yalwa",
                    "Zinyau",
                    "Zurgu"
                ]
            },
            {
                "name": "Rimin Gado",
                "wards": [
                    "Butu Butu",
                    "Dawaki Gulu",
                    "Doka Dawa",
                    "Dugurawa",
                    "Gulu",
                    "Jili",
                    "Karofin Yashi",
                    "Rimin Gado",
                    "Sakaratsa",
                    "Tamawa",
                    "Yalwan Danziyal",
                    "Zango Dan Abdu"
                ]
            },
            {
                "name": "Rogo",
                "wards": [
                    "Beli",
                    "Falgore",
                    "Fulatan",
                    "Gwangwan",
                    "Jajaye",
                    "Rogo Ruma",
                    "Rogo Sabon Gari",
                    "Ruwan Bago",
                    "Zarewa",
                    "Zoza"
                ]
            },
            {
                "name": "Shanono",
                "wards": [
                    "Alajawa",
                    "Dutsen Bakoshi",
                    "Faruruwa",
                    "Goron Dutse",
                    "Kadamu",
                    "Kokiya",
                    "Leni",
                    "Shakogi",
                    "Shanono",
                    "Tsaure"
                ]
            },
            {
                "name": "Sumaila",
                "wards": [
                    "Gala",
                    "Gani",
                    "Garfa",
                    "Gediya",
                    "Kanawa",
                    "Magami",
                    "Masu",
                    "Rimi",
                    "Rumo",
                    "Sitti",
                    "Sumaila"
                ]
            },
            {
                "name": "Takai",
                "wards": [
                    "Bagwaro",
                    "Durbunde",
                    "Fajewa",
                    "Falali",
                    "Faruruwa",
                    "Kachako",
                    "Karfi",
                    "Kuka",
                    "Takai",
                    "Zuga"
                ]
            },
            {
                "name": "Tarauni",
                "wards": [
                    "Babban Giji",
                    "Darmanawa",
                    "Daurawa",
                    "Gyadi Gyadi Arewa",
                    "Gyadi Gyadi Kudu",
                    "Hotoro Nnpc",
                    "Kauyen Alu",
                    "Tarauni",
                    "Unguwa Uku",
                    "Unguwar Gano"
                ]
            },
            {
                "name": "Tofa",
                "wards": [
                    "Dindere",
                    "Doka",
                    "Gajida",
                    "Ginsawa",
                    "Janguza",
                    "Jauben Kudu",
                    "Kwami",
                    "Lambu",
                    "Langel",
                    "Tofa",
                    "Unguwar Rimi",
                    "Wangara",
                    "Yalwa Karama",
                    "Yanoko",
                    "Yarimawa"
                ]
            },
            {
                "name": "Tsanyawa",
                "wards": [
                    "Daddarawa",
                    "Dunbulun",
                    "Gozaki",
                    "Gurun",
                    "Kabagiwa",
                    "Tatsan",
                    "Tsanyawa",
                    "Yanganau",
                    "Yankamaye",
                    "Zarogi"
                ]
            },
            {
                "name": "Tudun Wada",
                "wards": [
                    "Baburi",
                    "Burumburum",
                    "Dalawa",
                    "Jandutse",
                    "Jita",
                    "Karefa",
                    "Nata Ala",
                    "Sabon Gari",
                    "Shuwaki",
                    "Tsohogari",
                    "Yaryasa"
                ]
            },
            {
                "name": "Ungogo",
                "wards": [
                    "Bachirawa",
                    "Gayawa",
                    "Kadawa",
                    "Karo",
                    "Panisau",
                    "Rangaza",
                    "Rijiyar Zaki",
                    "Tudun Fulani",
                    "Ungogo",
                    "Yadakunya",
                    "Zango"
                ]
            },
            {
                "name": "Warawa",
                "wards": [
                    "Amarawa",
                    "Danlasan",
                    "Garin Dau",
                    "Gogel",
                    "Imawa",
                    "J Galadima",
                    "Jemagu",
                    "Jigawa",
                    "Katarkawa",
                    "Madari Mata",
                    "Tamburawar Gabas",
                    "Tangar",
                    "Warawa",
                    "Yan Dalla",
                    "Yangizo"
                ]
            },
            {
                "name": "Wudil",
                "wards": [
                    "Achika",
                    "Dagumawa",
                    "Dankaza",
                    "Darki",
                    "Indabo",
                    "Kausani",
                    "Lajawa",
                    "Sabon Gari",
                    "Utai",
                    "Wudil"
                ]
            }
        ]
    },
    {
        "state": "Katsina",
        "lgas": [
            {
                "name": "Bakori",
                "wards": [
                    "Bakori A",
                    "Bakori B",
                    "Barde Kwantakwaran",
                    "Dawan Musa",
                    "Guga",
                    "Jargaba",
                    "Kabomo",
                    "Kakumi",
                    "Kandarawa",
                    "Kurami Yankwani",
                    "Tsiga"
                ]
            },
            {
                "name": "Batagarawa",
                "wards": [
                    "Ajiwa",
                    "Bakiyawa",
                    "Barawa",
                    "Batagarawa A",
                    "Batagarawa B",
                    "Dandagoro",
                    "Jino",
                    "Kayauki",
                    "Tsanni",
                    "Yargamji"
                ]
            },
            {
                "name": "Batsari",
                "wards": [
                    "Abadau Kagara",
                    "Batsari",
                    "Dan Alh Yangaiya",
                    "Darini Magaji Abu",
                    "Kandawa",
                    "Karare",
                    "Madogara",
                    "Manawa",
                    "Ruma",
                    "Wagini",
                    "Yauyau Mallamawa"
                ]
            },
            {
                "name": "Baure",
                "wards": [
                    "Agala",
                    "Babban Mutum",
                    "Baure",
                    "Garki",
                    "Hui",
                    "Kagara Faski",
                    "Mai Bara",
                    "Muduri",
                    "Taramnawa Bare",
                    "Unguwar Rai",
                    "Yanduna",
                    "Yanmaulu"
                ]
            },
            {
                "name": "Bindawa",
                "wards": [
                    "Baure",
                    "Bindawa",
                    "Doro",
                    "Faru Dallaji",
                    "Gaiwa",
                    "Giremawa",
                    "Jibawa R Bade",
                    "Kamri",
                    "Shibdawa",
                    "Tama Daye",
                    "Yangora"
                ]
            },
            {
                "name": "Charanchi",
                "wards": [
                    "Banye",
                    "Charanchi",
                    "Doka",
                    "Ganuwa",
                    "Koda",
                    "Kuraye",
                    "Majen Wayya",
                    "Radda",
                    "Safana",
                    "Tsakatsa"
                ]
            },
            {
                "name": "Dan Musa",
                "wards": [
                    "Dan Ali",
                    "Dan Alkima",
                    "Dan Musa A",
                    "Dan Musa B",
                    "Dandire B",
                    "Dandire A",
                    "Mai Dabino A",
                    "Mai Dabino B",
                    "Mara",
                    "Yan Tumaki A",
                    "Yan Tumaki B"
                ]
            },
            {
                "name": "Dandume",
                "wards": [
                    "Dandume A",
                    "Dandume B",
                    "Dantankari",
                    "Magaji Wando A",
                    "Magaji Wando B",
                    "Mahuta A",
                    "Mahuta B",
                    "Mahuta C",
                    "Nasarawa",
                    "Tumburkai A",
                    "Tumburkai B"
                ]
            },
            {
                "name": "Danja",
                "wards": [
                    "Dabai",
                    "Danja A",
                    "Danja B",
                    "Jiba",
                    "Kahutu A",
                    "Kahutu B",
                    "Tandama",
                    "Tsangamawa",
                    "Yakaji A",
                    "Yakaji B"
                ]
            },
            {
                "name": "Daura",
                "wards": [
                    "Kusugu",
                    "Madobi A",
                    "Madobi B",
                    "Mazoji A",
                    "Mazoji B",
                    "Sabon Gari",
                    "Sarkin Yara A",
                    "Sarkin Yara B",
                    "Tudun Wada",
                    "Ubandawaki A",
                    "Unbadawaki B"
                ]
            },
            {
                "name": "Dutsi",
                "wards": [
                    "Dan Aunai",
                    "Dutsi A",
                    "Dutsi B",
                    "Kayawa",
                    "Ruwankaya A",
                    "Ruwankaya B",
                    "Sirika A",
                    "Sirika B",
                    "Yamel A",
                    "Yamel B"
                ]
            },
            {
                "name": "Dutsin Ma",
                "wards": [
                    "Bagagadi",
                    "Dabawa",
                    "Dutsin Ma A",
                    "Dutsin Ma B",
                    "Karofi A",
                    "Karofi B",
                    "Kuki A",
                    "Kuki B",
                    "Kutawa",
                    "Makera",
                    "Shema"
                ]
            },
            {
                "name": "Faskari",
                "wards": [
                    "Daudawa",
                    "Faskari",
                    "Maigora",
                    "Mairuwa",
                    "Ruwan Godiya",
                    "Sabonlayi Galadima",
                    "Sheme",
                    "Tafoki",
                    "Yankara",
                    "Yarmalamai"
                ]
            },
            {
                "name": "Funtua",
                "wards": [
                    "Dandutse",
                    "Dukke",
                    "Goya",
                    "Mai Gamji",
                    "Makera",
                    "Maska",
                    "Sabon Gari",
                    "Tudun Iya",
                    "Ung Ibrahim",
                    "Unguwar Musa",
                    "Unguwar Rabiu"
                ]
            },
            {
                "name": "Ingawa",
                "wards": [
                    "Agayawa",
                    "Bareruwa Ruruma",
                    "Bidore Yaya",
                    "Dara",
                    "Daunaka B Kwari",
                    "Dugul",
                    "Ingawa",
                    "Jobe Kandawa",
                    "Kurfeji Yankaura",
                    "Manomawa Kafi",
                    "Yandoma"
                ]
            },
            {
                "name": "Jibia",
                "wards": [
                    "Bugaje",
                    "Farfaru",
                    "Faru",
                    "G Baure Mallamawa",
                    "Gangara",
                    "Jibia A",
                    "Jibia B",
                    "Kusa",
                    "Mazanya Magama",
                    "Riko",
                    "Yangaiya"
                ]
            },
            {
                "name": "Kafur",
                "wards": [
                    "Dantutture",
                    "Dutsin Kura Kanya",
                    "Gamzago",
                    "Gozaki",
                    "Kafur",
                    "Mahuta",
                    "Masari",
                    "Sabuwar Kasa",
                    "Yari Bori",
                    "Yartalata Rigoji"
                ]
            },
            {
                "name": "Kaita",
                "wards": [
                    "Abdallawa",
                    "Baawa",
                    "Dankaba",
                    "Dankama",
                    "Gafiya",
                    "Girka",
                    "Kaita",
                    "Matsai",
                    "Yandaki",
                    "Yanhoho"
                ]
            },
            {
                "name": "Kankara",
                "wards": [
                    "Burdugau",
                    "Dan Murabu",
                    "Dan Maidaki",
                    "Garagi",
                    "Gatakawa S Gari Mabai",
                    "Hurya",
                    "Kankara A B",
                    "Kukasheka",
                    "Pauwa A B",
                    "Wawar Kaza",
                    "Zango Zabaro"
                ]
            },
            {
                "name": "Kankia",
                "wards": [
                    "Gachi",
                    "Galadima A",
                    "Galadima B",
                    "Kafin Dangi Fakuwa",
                    "Kafinsoli",
                    "Kunduru Gyaza",
                    "Magam Tsa",
                    "Rimaye",
                    "Sukuntuni",
                    "Tafashiya Nasarawa"
                ]
            },
            {
                "name": "Katsina",
                "wards": [
                    "Kangiwa",
                    "Shinkafi A",
                    "Shinkafi B",
                    "Wakili Kudu Iii",
                    "Wakilin Arewa A",
                    "Wakilin Arewa B",
                    "Wakilin Gabas I",
                    "Wakilin Gabas Ii",
                    "Wakilin Kudu I",
                    "Wakilin Kudu Ii",
                    "Wakilin Yamma 1",
                    "Wakilin Yamma 1i"
                ]
            },
            {
                "name": "Kurfi",
                "wards": [
                    "Barkiyya",
                    "Birchi",
                    "Kurfi A",
                    "Kurfi B",
                    "Rawayau A",
                    "Rawayau B",
                    "Tsauri A",
                    "Tsauri B",
                    "Wurma A",
                    "Wurma B"
                ]
            },
            {
                "name": "Kusada",
                "wards": [
                    "Bauranya A",
                    "Bauranya B",
                    "Boko",
                    "Dudunni",
                    "Kaikai",
                    "Kofa",
                    "Kusada",
                    "Mawashi",
                    "Yashe A",
                    "Yashe B"
                ]
            },
            {
                "name": "Mai'adua",
                "wards": [
                    "Bumbum A",
                    "Bumbum B",
                    "Danyashe",
                    "Koza",
                    "Mai Koni A",
                    "Mai Koni B",
                    "Mai Adua A",
                    "Mai Adua B",
                    "Mai Adua C",
                    "Natsalle"
                ]
            },
            {
                "name": "Malumfashi",
                "wards": [
                    "Borin Dawa",
                    "Dansarai",
                    "Dayi",
                    "Gorar Dansaka",
                    "Karfi",
                    "Makaurachi",
                    "Malum Fashi A",
                    "Malum Fashi B",
                    "Na Alma",
                    "Rawan Sanyi",
                    "Yaba",
                    "Yarmama"
                ]
            },
            {
                "name": "Mani",
                "wards": [
                    "Bagiwa",
                    "Bujawa Gewayau",
                    "Duwan Makau",
                    "Hamcheta",
                    "Jani",
                    "Kwatta",
                    "Machika",
                    "Magami",
                    "Mani",
                    "Muduru",
                    "Tsagem Takusheyi"
                ]
            },
            {
                "name": "Mashi",
                "wards": [
                    "Bamble",
                    "Doguru A",
                    "Doguru B",
                    "Gallu",
                    "Jigawa",
                    "Karau",
                    "Mashi",
                    "S Rijiya",
                    "Sonkaya",
                    "Tamilo A",
                    "Tamilo B"
                ]
            },
            {
                "name": "Matazu",
                "wards": [
                    "Dissi",
                    "Gwarjo",
                    "Karaduwa",
                    "Kogari",
                    "Matazu A",
                    "Matazu B",
                    "Mazoji A",
                    "Mazoji B",
                    "Rinjin Idi",
                    "Sayaya"
                ]
            },
            {
                "name": "Musawa",
                "wards": [
                    "Dangani",
                    "Danjanku Karachi",
                    "Garu",
                    "Gingin",
                    "Jikamshi",
                    "Kira",
                    "Kurkujan A",
                    "Kurkujan B",
                    "Musawa",
                    "Tuge",
                    "Yaradau Tabanni"
                ]
            },
            {
                "name": "Rimi",
                "wards": [
                    "Abukur",
                    "Fardami",
                    "Kadandani",
                    "Majengobir",
                    "Makurda",
                    "Masabo Kurabau",
                    "Remawa Iyatawa",
                    "Rimi",
                    "Sabon Garin Alarain",
                    "Tsagero"
                ]
            },
            {
                "name": "Sabuwa",
                "wards": [
                    "Damari",
                    "Dugun Mu Azu",
                    "Gamji",
                    "Gazari",
                    "Machika",
                    "Maibakko",
                    "Rafin Iwa",
                    "Sabuwa A",
                    "Sabuwa B",
                    "Sayau"
                ]
            },
            {
                "name": "Safana",
                "wards": [
                    "Babban Duhu A",
                    "Babban Duhu B",
                    "Baure A",
                    "Baure B",
                    "Runka A",
                    "Runka B",
                    "Safana",
                    "Tsaskiya",
                    "Zakka A",
                    "Zakka B"
                ]
            },
            {
                "name": "Sandamu",
                "wards": [
                    "Daneji A",
                    "Daneji B",
                    "Fago A",
                    "Fago B",
                    "Kagare",
                    "Karkarku",
                    "Katsayal",
                    "Kwasarawa",
                    "Rade A",
                    "Rade B",
                    "Sandamu"
                ]
            },
            {
                "name": "Zango",
                "wards": [
                    "Dargage",
                    "Garni",
                    "Gwamba",
                    "Kanda",
                    "Kawarin Kudi",
                    "Kawarin Malawamai",
                    "Rogogo Cidari",
                    "Sara",
                    "Yardaje",
                    "Zango"
                ]
            }
        ]
    },
    {
        "state": "Kebbi",
        "lgas": [
            {
                "name": "Aliero",
                "wards": [
                    "Aliero Dangaladima I",
                    "Aliero Dangaladima Ii",
                    "Aliero S Fada I",
                    "Aliero S Fada Ii",
                    "Danwarai",
                    "Jiga Birni",
                    "Jiga Makera",
                    "Kashin Zama",
                    "Rafin Bauna",
                    "Sabiyal"
                ]
            },
            {
                "name": "Arewa",
                "wards": [
                    "Biu",
                    "Chibike",
                    "Daura Sakkwabe Jarkuka",
                    "Falde",
                    "Feske Jaffeji",
                    "Gorun Dikko",
                    "Gumumdai Rafin Tsaka",
                    "Kangiwa",
                    "Laima Jantullu",
                    "Sarka Dantsoho",
                    "Yeldu"
                ]
            },
            {
                "name": "Argungu",
                "wards": [
                    "Alwasa Gotomo",
                    "Dikko",
                    "Felande",
                    "Galadima",
                    "Gulma",
                    "Gwazange Kisawa U Gyaga",
                    "Kokani North",
                    "Kokani South",
                    "Lailaba",
                    "Sauwa Kaurar Sani",
                    "Tungar Zazzagawa Rumbuki Sarkawa"
                ]
            },
            {
                "name": "Augie",
                "wards": [
                    "Augie North",
                    "Augie South",
                    "Bagaye Mera",
                    "Bayawa North",
                    "Bayawa South",
                    "Birnin Tudu Gudale",
                    "Bubuce",
                    "Dundaye Kwaido Zagi Illela",
                    "Tiggi Awade",
                    "Yola"
                ]
            },
            {
                "name": "Bagudo",
                "wards": [
                    "Bagudo Tuga",
                    "Bahindi Boki Doma",
                    "Bani Tsamiya Kali",
                    "Illo Sabon Gari Yantau",
                    "Kaoje Gwamba",
                    "Kende Kurgu",
                    "Lafagu Gante",
                    "Lolo Giris",
                    "Matsinka Geza",
                    "Sharabi Kwanguwai",
                    "Zagga Kwasara"
                ]
            },
            {
                "name": "Birnin Kebbi",
                "wards": [
                    "Ambursa",
                    "Birnin Kebbi Dangaladima",
                    "Birnin Kebbi Mafara",
                    "Gawasu",
                    "Godongaji",
                    "Gulumbe",
                    "Kardi Yamama",
                    "Kola Tarasa",
                    "Laga",
                    "Makera",
                    "Maurida Karyo Ung Mijin Nana",
                    "Nassarawa I",
                    "Nassarawa Ii",
                    "Ujariyo",
                    "Zauro"
                ]
            },
            {
                "name": "Bunza",
                "wards": [
                    "Bunza Dangaladima",
                    "Bunza Marafa",
                    "Gwade",
                    "Maidahini",
                    "Raha",
                    "Sabon Birni",
                    "Salwai",
                    "Tilli Hilema",
                    "Tunga",
                    "Zogrima"
                ]
            },
            {
                "name": "Dandi",
                "wards": [
                    "Bani Zumbu",
                    "Buma",
                    "Dolekaina",
                    "Fana",
                    "Geza",
                    "Kamba Kamba",
                    "Kwakkwaba",
                    "Kyangakwai",
                    "Maigwaza",
                    "Maihausawa",
                    "Shiko"
                ]
            },
            {
                "name": "Fakai",
                "wards": [
                    "Bajida",
                    "Bangu Garinisa",
                    "Birnin Tudu",
                    "Fakai Zussun",
                    "Gulbin Kuka Maijarhula",
                    "Inga Bulu Maikende",
                    "Kangi",
                    "Mahuta",
                    "Marafa",
                    "Penin Amana Penin Gaba"
                ]
            },
            {
                "name": "Gwandu",
                "wards": [
                    "Cheberu Bada",
                    "Dalijan",
                    "Dodoru",
                    "Gulmare",
                    "Gwandu Marafa",
                    "Gwandu Sarkin Fawa",
                    "Kambaza",
                    "Malisa",
                    "Maruda",
                    "Masama Kwasgara"
                ]
            },
            {
                "name": "Jega",
                "wards": [
                    "Alelu Gehuru",
                    "Dangamaji",
                    "Dunbegu Bausara",
                    "Gindi Nassarawa Kyarmi Galbi",
                    "Jandutsi Birnin Malam",
                    "Jega Firchin",
                    "Jega Kokani",
                    "Jega Magaji A",
                    "Jega Magaji B",
                    "Katanga Fagada",
                    "Kimba"
                ]
            },
            {
                "name": "Kalgo",
                "wards": [
                    "Badariya Magarza",
                    "Dangoma Gayi",
                    "Diggi",
                    "Etene",
                    "Kalgo",
                    "Kuka",
                    "Mutubari",
                    "Nayilwa",
                    "Wurogauri",
                    "Zuguru"
                ]
            },
            {
                "name": "Koko Besse",
                "wards": [
                    "Besse",
                    "Dada Alelu",
                    "Dutsin Mari Dulmeru",
                    "Illela S Gari",
                    "Jadadi",
                    "Koko Fircin",
                    "Koko Magaji",
                    "Lani Manyan Tafukka Shiba",
                    "Madacci Firini",
                    "Maikwari Karamar Damba Bakoshi",
                    "Takware",
                    "Zariya Kalakala Amiru"
                ]
            },
            {
                "name": "Maiyama",
                "wards": [
                    "Andarai Kurunkwu Zongun Liba",
                    "Giwa Tazo Zara",
                    "Gumbin Kure",
                    "Karaye Dogondaji",
                    "Kawara S Sara Yarkamba",
                    "Kuben Rigidiga",
                    "Liba Danwa Kuka Kogo",
                    "Maiyama",
                    "Mungadi Botoro",
                    "Sambawa Mayalo",
                    "Sarandosa Gubba"
                ]
            },
            {
                "name": "Ngaski",
                "wards": [
                    "Birnin Yauri",
                    "Gafara Machupa",
                    "Garin Baka Makarin",
                    "Kambuwa Danmaraya",
                    "Kwakwaran",
                    "Libata Kwangia",
                    "Makawa Uleira",
                    "Ngaski",
                    "Utono Hoge",
                    "Wara"
                ]
            },
            {
                "name": "Sakaba",
                "wards": [
                    "Adai",
                    "Dankolo",
                    "Doka Bere",
                    "Fada",
                    "Gelwasa",
                    "Janbirni",
                    "Makuku",
                    "Maza Maza",
                    "Sakaba",
                    "Tudun Kuka"
                ]
            },
            {
                "name": "Shanga",
                "wards": [
                    "Atuwo",
                    "Binuwa Gebe Bunkuji",
                    "Dugu Tsoho Dugu Raha",
                    "Kawara Ingu Sargo",
                    "Rafin Kirya Tefki Tara",
                    "Sawashi",
                    "Shanga",
                    "Sokage Golongo Hundeji",
                    "Takware",
                    "Yarbesse"
                ]
            },
            {
                "name": "Suru",
                "wards": [
                    "Aljannare",
                    "Bakuwai",
                    "Bandan",
                    "Barbarejo",
                    "Dakingari",
                    "Daniya Shema",
                    "Dendane",
                    "Ginga",
                    "Giro",
                    "Kwaifa",
                    "Suru"
                ]
            },
            {
                "name": "Wasagu Danko",
                "wards": [
                    "Ayu",
                    "Bena",
                    "Dan Umaru Mairairai",
                    "Danko Maga",
                    "Gwanfi Kele",
                    "Kanya",
                    "Kyabu Kandu",
                    "Ribah Machika",
                    "Waje",
                    "Wasagu",
                    "Yalmo Shindi"
                ]
            },
            {
                "name": "Yauri",
                "wards": [
                    "Chulu Koma",
                    "Gungun Sarki",
                    "Jijima",
                    "Tondi",
                    "Yelwa Central",
                    "Yelwa East",
                    "Yelwa North",
                    "Yelwa South",
                    "Yelwa West",
                    "Zamare"
                ]
            },
            {
                "name": "Zuru",
                "wards": [
                    "Bedi",
                    "Ciroman Dabai",
                    "Isgogo Dago",
                    "Manga Ushe",
                    "Rafin Zuru",
                    "Rikoto",
                    "Rumu Daben Seme",
                    "Senchi",
                    "Tadurga",
                    "Zodi"
                ]
            }
        ]
    },
    {
        "state": "Kogi",
        "lgas": [
            {
                "name": "Adavi",
                "wards": [
                    "Adavi Eba",
                    "Ege Iruvochinomi",
                    "Idanuhua",
                    "Ikaraworo Idobanyere",
                    "Ino Ziomi Ipaku Osisi",
                    "Iruvucheba",
                    "Kuroko I",
                    "Kuroko Ii",
                    "Nagazi Farm Centre",
                    "Ogaminana",
                    "Okunchi Ozuri Onieka"
                ]
            },
            {
                "name": "Ajaokuta",
                "wards": [
                    "Abodi Patesi",
                    "Achagana",
                    "Adogo",
                    "Adogu Apamira Ogodo Uhuovene",
                    "Badoko",
                    "Ebiya North",
                    "Ebiya South",
                    "Ganaga Township",
                    "Ichuwa Upaja",
                    "Obangede Ohunene Ukoko Inye Re",
                    "Odonu Unosi",
                    "Ogigiri",
                    "Old Ajaokuta",
                    "Omgbo"
                ]
            },
            {
                "name": "Ankpa",
                "wards": [
                    "Ankpa I",
                    "Ankpa Ii",
                    "Ankpa Suburb I",
                    "Ankpa Suburb Ii",
                    "Ankpa Township",
                    "Enjema I",
                    "Enjema Iii",
                    "Enjema Iv",
                    "Enjema Ii",
                    "Ojoku I",
                    "Ojoku Iii",
                    "Ojoku Ii",
                    "Ojoku Iv"
                ]
            },
            {
                "name": "Bassa",
                "wards": [
                    "Akuba I",
                    "Akuba Ii",
                    "Ayede Akakana",
                    "Eforo",
                    "Gboloko",
                    "Ikende",
                    "Kpata",
                    "Mozum",
                    "Ozongulo Kpanche",
                    "Ozugbe"
                ]
            },
            {
                "name": "Dekina",
                "wards": [
                    "Abocho",
                    "Adumu Egume",
                    "Anyigba",
                    "Dekina Town",
                    "Emewe",
                    "Iyale",
                    "Odu I",
                    "Odu Ii",
                    "Ogane Inigu",
                    "Ogbabede",
                    "Ojikpadala",
                    "Okura Olafia"
                ]
            },
            {
                "name": "Ibaji",
                "wards": [
                    "Akpanyo",
                    "Analo",
                    "Ayah",
                    "Ejule",
                    "Iyano",
                    "Odeke",
                    "Ojila",
                    "Onyedega",
                    "Ujeh",
                    "Unale"
                ]
            },
            {
                "name": "Idah",
                "wards": [
                    "Ede",
                    "Ega",
                    "Ichala",
                    "Igalaogba",
                    "Igecheba",
                    "Ogegele",
                    "Owoli Apa",
                    "Sabon Gari",
                    "Ugwoda",
                    "Ukwaja"
                ]
            },
            {
                "name": "Igalamela Odolu",
                "wards": [
                    "Ajaka I",
                    "Ajaka Ii",
                    "Akpanya",
                    "Avrugo",
                    "Ekwuloko",
                    "Odolu",
                    "Oforachi I",
                    "Oforachi Ii",
                    "Oji Aji",
                    "Ubele"
                ]
            },
            {
                "name": "Ijumu",
                "wards": [
                    "Aiyegunle",
                    "Aiyere Arimah",
                    "Aiyetoro I",
                    "Aiyetoro Ii",
                    "Egbeda Egga Okedayo",
                    "Ekinrin Ade",
                    "Ibgolayere Ilaere",
                    "Iffe Ikoyi Okejumu",
                    "Ileteju Origa",
                    "Iyah Ayeh",
                    "Iyamoye",
                    "Iyara",
                    "Odokoro",
                    "Ogale Aduge",
                    "Ogidi"
                ]
            },
            {
                "name": "Kabba Bunu",
                "wards": [
                    "Aiyeteju",
                    "Aiyetoro Kiri",
                    "Aiyewa",
                    "Akutupa Kiri",
                    "Asuta",
                    "Egbeda",
                    "Iluke",
                    "Odo Akete",
                    "Odo Ape",
                    "Odolu",
                    "Okebukun",
                    "Okedayo",
                    "Okekoko",
                    "Olle Oke Ofin",
                    "Otu"
                ]
            },
            {
                "name": "Koton Karfe",
                "wards": [
                    "Akpasu",
                    "Chikara North",
                    "Chikara South",
                    "Gegu Beki North",
                    "Gegu Beki South",
                    "Girinya",
                    "Irenodu",
                    "Kotonkarfe South East",
                    "Odaki Koton Karfe",
                    "Tawari",
                    "Ukwo Koton Karfe"
                ]
            },
            {
                "name": "Lokoja",
                "wards": [
                    "Eggan",
                    "Kakanda",
                    "Kupa North East",
                    "Kupa South West",
                    "Lokoja A",
                    "Lokoja B",
                    "Lokoja C",
                    "Lokoja D",
                    "Lokoja E",
                    "Oworo"
                ]
            },
            {
                "name": "Mopa Muro",
                "wards": [
                    "Agbafogun",
                    "Aiyedayo Aiyedaro",
                    "Aiyede Okagi",
                    "Ileteju 1",
                    "Illeteju 2",
                    "Odole 1",
                    "Odole 2",
                    "Okeagi Ilai",
                    "Orokere",
                    "Takete Idde Otafun"
                ]
            },
            {
                "name": "Ofu",
                "wards": [
                    "Aloji",
                    "Aloma",
                    "Ejule Allah",
                    "Iboko Efakwu",
                    "Igo",
                    "Itobe Okokenyi",
                    "Ochadamu",
                    "Ofoke",
                    "Ogbonicha",
                    "Ugwolawo 2",
                    "Ugwolawo I"
                ]
            },
            {
                "name": "Ogori Magongo",
                "wards": [
                    "Aiyeromi",
                    "Eni",
                    "Ileteju",
                    "Obatgben",
                    "Obinoyin",
                    "Okesi",
                    "Okibo",
                    "Oshobane",
                    "Oturu Opowuroye",
                    "Ugugu"
                ]
            },
            {
                "name": "Okehi",
                "wards": [
                    "Eika Ohizenyi",
                    "Obaiba I",
                    "Obaiba Ii",
                    "Obangede Uhuodo",
                    "Obaroke Uvete",
                    "Oboroke Eba",
                    "Oboroke Uvete Ii",
                    "Ohuepe Omavi Uboro",
                    "Ohueta",
                    "Okaito Usungwen",
                    "Okuehu"
                ]
            },
            {
                "name": "Okene",
                "wards": [
                    "Abuga Ozuja",
                    "Bariki",
                    "Idoji",
                    "Obehira Eba",
                    "Obehira Uvetta",
                    "Obessa",
                    "Okene Eba Agassa Ahache",
                    "Onyukoko",
                    "Orietesu",
                    "Otutu",
                    "Upogoro Odenku"
                ]
            },
            {
                "name": "Olamaboro",
                "wards": [
                    "Imane I",
                    "Imane Ii",
                    "Ogugu I",
                    "Ogugu Ii",
                    "Ogugu Iii",
                    "Olamaboro I",
                    "Olamaboro Ii",
                    "Olamaboro Iii",
                    "Olamaboro Iv",
                    "Olamaboro V"
                ]
            },
            {
                "name": "Omala",
                "wards": [
                    "Abejukolo I",
                    "Abejukolo Ii",
                    "Akpacha",
                    "Bagaji",
                    "Bagana",
                    "Icheke Ajopachi",
                    "Ogodu",
                    "Oji Aji",
                    "Okpatala",
                    "Olla",
                    "Opoda Ofejiji"
                ]
            },
            {
                "name": "Yagba East",
                "wards": [
                    "Alu Igbagun Oranre",
                    "Ejuku",
                    "Ife Olukotun I",
                    "Ife Olukotun Ii",
                    "Ilafin Idofin Odo Ogba",
                    "Itedo",
                    "Jege Oke Agi Ogbom Isao",
                    "Makutu I",
                    "Makutu Ii",
                    "Ponyan"
                ]
            },
            {
                "name": "Yagba West",
                "wards": [
                    "Ejiba",
                    "Isaulu Esa Okoloke Okunran",
                    "Iyamerin Igbaruku",
                    "Odo Egbe",
                    "Odo Ara Omi Ogga",
                    "Odo Egbe I",
                    "Odo Egbe Ii",
                    "Odo Ere Oke Ere",
                    "Odo Eri Okoto",
                    "Ogbe",
                    "Oke Egbe I",
                    "Oke Egbe Ii",
                    "Oke Egbe Iii",
                    "Oke Egbe Iv"
                ]
            }
        ]
    },
    {
        "state": "Kwara",
        "lgas": [
            {
                "name": "Asa",
                "wards": [
                    "Adigbongbo Awe Orimaro",
                    "Afon",
                    "Ago Oja Oshin Sapati Laduba",
                    "Ballah Otte",
                    "Budo Egba",
                    "Efue Berikodo",
                    "Elebue Agbona Fata",
                    "Gambari Aiyekale",
                    "Ila Oja",
                    "Odo Ode Aboto",
                    "Ogbondoroko Reke",
                    "Ogele",
                    "Okesho",
                    "Onire Odegiwa Alapa",
                    "Owode Gbogun",
                    "Yowere 11 Okeweru",
                    "Yowere Sosoki"
                ]
            },
            {
                "name": "Baruten",
                "wards": [
                    "Boriya Shiya",
                    "Gure Gwasoro",
                    "Gwanara",
                    "Gwedebereru Babane",
                    "Ilesha",
                    "Kenu Taberu",
                    "Kiyoru Bwen",
                    "Kpaura Yakiru",
                    "Okuta",
                    "Shinawu Tunbuyan",
                    "Yashikira"
                ]
            },
            {
                "name": "Edu",
                "wards": [
                    "Lafiagi 1",
                    "Lafiagi 11",
                    "Lafiagi 111",
                    "Lafiagi 1v",
                    "Tsaragi 1",
                    "Tsaragi 11",
                    "Tsaragi 111",
                    "Tsonga 1",
                    "Tsonga 11",
                    "Tsonga 111"
                ]
            },
            {
                "name": "Ekiti",
                "wards": [
                    "Eruku",
                    "Isapa",
                    "Koro",
                    "Obbo Aiyeggunle 1",
                    "Obbo Aiyeggunle 11",
                    "Obbo Ile",
                    "Oke Opin Etan",
                    "Opin",
                    "Osi 1",
                    "Osi 11"
                ]
            },
            {
                "name": "Ifelodun",
                "wards": [
                    "Agunjin",
                    "Idofian 1",
                    "Idofian 11",
                    "Igbaja 1",
                    "Igbaja 11",
                    "Igbaja 111",
                    "Ile Ire",
                    "Oke Ode 1",
                    "Oke Ode 11",
                    "Oke Ode 111",
                    "Omupo",
                    "Ora",
                    "Oro Ago",
                    "Share 1",
                    "Share 11",
                    "Share 111",
                    "Share 1v",
                    "Share V"
                ]
            },
            {
                "name": "Ilorin East",
                "wards": [
                    "Agbeyangi Gbadamu Osin",
                    "Apado",
                    "Bologun Gambari 11",
                    "Gambari 1",
                    "Ibagun",
                    "Iponrin",
                    "Magaji Are 1",
                    "Magaji Are 11",
                    "Marafa Pepele",
                    "Maya Ile Apa",
                    "Oke Oyi Oke Ose Alalubosa",
                    "Zango"
                ]
            },
            {
                "name": "Ilorin South",
                "wards": [
                    "Akanbi 1",
                    "Akanbi 11",
                    "Akanbi 111",
                    "Akanbi 1v",
                    "Akanbi V",
                    "Balogun Fulani 11",
                    "Balogun Fulani 111",
                    "Balogun Fulani I",
                    "Okaka 1",
                    "Okaka 11",
                    "Oke Ogun"
                ]
            },
            {
                "name": "Ilorin West",
                "wards": [
                    "Adewole",
                    "Ajikobi",
                    "Baboko",
                    "Badari",
                    "Balogun Alanamu Central",
                    "Magaji Ngeri",
                    "Ogidi",
                    "Ojuekun Zarumi",
                    "Oko Erin",
                    "Oloje",
                    "Ubandawaki",
                    "Warrah Egbe Jila Oshin"
                ]
            },
            {
                "name": "Irepodun",
                "wards": [
                    "Ajase Ipo 1",
                    "Ajase Ipo 11",
                    "Arandun",
                    "Esie Ijan",
                    "Ipetu Rore Aran Orin",
                    "Oko",
                    "Omu Aran 1 Aran",
                    "Omu Aran 11 Ihaye",
                    "Omu Aran 111 Ifaja",
                    "Oro 1",
                    "Oro 11"
                ]
            },
            {
                "name": "Isin",
                "wards": [
                    "Alla",
                    "Edidi",
                    "Ijara Isin",
                    "Isanlu 1",
                    "Isanlu 11",
                    "Iwo",
                    "Oke Aba",
                    "Oke Onigbin",
                    "Olla",
                    "Owu Isin",
                    "Sabaja Pamo"
                ]
            },
            {
                "name": "Kaiama",
                "wards": [
                    "Adena",
                    "Bani",
                    "Gwanabe 1",
                    "Gwanabe 11",
                    "Gwari A Gwaria",
                    "Kaiama 1",
                    "Kaiama 11",
                    "Kaiama 111",
                    "Kemanji",
                    "Wajibe"
                ]
            },
            {
                "name": "Moro",
                "wards": [
                    "Abati Alara",
                    "Ajanaku",
                    "Arobadi",
                    "Babadudu",
                    "Bode Saadu",
                    "Ejidongari",
                    "Jebba",
                    "Lanwa",
                    "Logun Jehunkunnu",
                    "Malete Gbugudu",
                    "Megida",
                    "Okemi",
                    "Okutala",
                    "Oloru",
                    "Pakunmo",
                    "Shao",
                    "Womi Ayaki"
                ]
            },
            {
                "name": "Offa",
                "wards": [
                    "Balogun",
                    "Essa A",
                    "Essa B",
                    "Essa C",
                    "Igboidun",
                    "Ojomu Central 1",
                    "Ojomu Central 11",
                    "Ojomu South East",
                    "Ojomu North North West",
                    "Shawo Central",
                    "Shawo South East",
                    "Shawo South West"
                ]
            },
            {
                "name": "Oke Ero",
                "wards": [
                    "Aiyedun",
                    "Ekan",
                    "Idofin Odo Ashe",
                    "Idofin Igbana 1",
                    "Idofin Igbana 11",
                    "Iloffa",
                    "Imode Egosi",
                    "Imoji Ilale Erinmope",
                    "Odo Owa 1",
                    "Odo Owa 11"
                ]
            },
            {
                "name": "Oyun",
                "wards": [
                    "Erin Ile North",
                    "Erin Ile South",
                    "Igbona",
                    "Igosun",
                    "Ijagbo",
                    "Ikotun",
                    "Ilemona",
                    "Inaja Ahogbada",
                    "Ipee",
                    "Irra",
                    "Ojoku"
                ]
            },
            {
                "name": "Patigi",
                "wards": [
                    "Kpada 1",
                    "Kpada 11",
                    "Kpada 111",
                    "Lade 1",
                    "Lade 11",
                    "Lade 111",
                    "Patigi 1",
                    "Patigi 11",
                    "Patigi 111",
                    "Patigi 1v"
                ]
            }
        ]
    },
    {
        "state": "Lagos",
        "lgas": [
            {
                "name": "Agege",
                "wards": [
                    "Agbotikuyo Dopemu",
                    "Darocha",
                    "Iloro Onipetesi",
                    "Isale Odo",
                    "Isale Idimangoro",
                    "Keke",
                    "Okekoto",
                    "Oniwaya Papa Uku",
                    "Orile Agege Oko Oba",
                    "Oyewole Papa Ashafa",
                    "Tabon Tabon Oko Oba"
                ]
            },
            {
                "name": "Ajeromi Ifelodun",
                "wards": [
                    "Ago Hausa",
                    "Alaba Oro",
                    "Awodi Ora",
                    "Layeni",
                    "Mosafejo",
                    "Ojo Road",
                    "Olodi",
                    "Temidire I",
                    "Temidire Ii",
                    "Tolu",
                    "Wilmer"
                ]
            },
            {
                "name": "Alimosho",
                "wards": [
                    "Abule Egba Aboru Meiran Alagbado",
                    "Ayobo Ijon Village Camp David",
                    "Egbe Agodo",
                    "Egbeda Alimosho",
                    "Idimu Isheri Olofin",
                    "Igando Egan",
                    "Ikotun Ijegun",
                    "Ipaja North",
                    "Ipaja South",
                    "Pleasure Oke Odo",
                    "Shasha Akowonjo"
                ]
            },
            {
                "name": "Amuwo Odofin",
                "wards": [
                    "Amuwo",
                    "Amuwo Odofin Housing Estate Mile 2",
                    "Festac 1",
                    "Festac Ii",
                    "Festac Iii",
                    "Ibeshe",
                    "Igbologun",
                    "Ijegun",
                    "Irede",
                    "Kirikiri",
                    "Kirikiri",
                    "Satellite"
                ]
            },
            {
                "name": "Apapa",
                "wards": [
                    "Afolabi Alasia Str And Environs",
                    "Apapa I Marine Rd Environs",
                    "Apapa Ii Liverpool Rd And Environs",
                    "Apapa Iii Creek Rd Tincan Snake Island",
                    "Apapa Iv Pelewura Crescent And Environs",
                    "Gaskiya Environs",
                    "Ijora Oloye",
                    "Malu Road And Environs",
                    "Olodan St Olojowou St Alh Dogo Olatokunbo St Iganmu",
                    "Sari And Environs"
                ]
            },
            {
                "name": "Badagry",
                "wards": [
                    "Ajara",
                    "Ajido",
                    "Apa",
                    "Awhanjigoh",
                    "Ibereko",
                    "Ikoga",
                    "Ilogbo Araromi",
                    "Iworo Gbanko",
                    "Iya Afin",
                    "Keta East",
                    "Posukoh"
                ]
            },
            {
                "name": "Epe",
                "wards": [
                    "Abomiti",
                    "Agbowa",
                    "Agbowa Ikosi",
                    "Ago Owu",
                    "Ajaganabe",
                    "Ejirin",
                    "Etita Ebode",
                    "Ibonwon",
                    "Ilara",
                    "Ise Igbogun",
                    "Itoikin",
                    "Lagbade",
                    "Odomola",
                    "Odoragunsin",
                    "Oke Balogun",
                    "Oriba Ladaba",
                    "Orugbo",
                    "Poka",
                    "Popo Oba"
                ]
            },
            {
                "name": "Eti Osa",
                "wards": [
                    "Ado Langbasa Badore",
                    "Ajah Sangotedo",
                    "Ikoyi I",
                    "Ikoyi Ii",
                    "Ilado Eti Osa And Environs",
                    "Ilasan Housing Estate",
                    "Lekki Ikate And Environs",
                    "Obalende",
                    "Victoria Island I",
                    "Victoria Island Ii"
                ]
            },
            {
                "name": "Ibeju Lekki",
                "wards": [
                    "02 Orimedu Ii",
                    "03 Orimedu Iii",
                    "Ibeju I",
                    "Iwerekun Ii",
                    "Lekki Ii",
                    "N2 Ibeju Ii",
                    "Orimedu I",
                    "P1 Iwerekun I",
                    "S 2a Siriwon Igbekodo Ii",
                    "S1 Lekki I",
                    "S2 Siriwon Igbekodo I"
                ]
            },
            {
                "name": "Ifako Ijaye",
                "wards": [
                    "Ajegunle Akinde Animashaun",
                    "Alakuko Kollington",
                    "Fagba Akute Road",
                    "Ijaiye Agbado Kollington",
                    "Ijaiye Ojokoro",
                    "Ijaye",
                    "Iju Isaga",
                    "Iju Obawole",
                    "New Ifako Oyemekun",
                    "Old Ifako Karaole",
                    "Pamada Abule Egba"
                ]
            },
            {
                "name": "Ikeja",
                "wards": [
                    "Adekunle Vill Adeniyi Jones Ogba",
                    "Airport Onipetesi Inilekere",
                    "Alausa Oregun Olusosun",
                    "Anifowoshe Ikeja",
                    "Gra Police Barracks",
                    "Ipodo Seriki Aro",
                    "Ojodu Agidingbi Omole",
                    "Oke Ira Aguda",
                    "Onigbongbon",
                    "Wasimi Opebi Allen"
                ]
            },
            {
                "name": "Ikorodu",
                "wards": [
                    "Aga Ijimu",
                    "Agbala",
                    "Agura Iponmi",
                    "Baiyeku Oreta",
                    "Erikorodu",
                    "Ibeshe",
                    "Igbogbo I",
                    "Igbogbo Ii",
                    "Ijede Ii",
                    "Ijede J",
                    "Imota 1",
                    "Imota Ii",
                    "Ipakodo",
                    "Isele I",
                    "Isele Ii",
                    "Isele Iii",
                    "Isiu",
                    "Odogunyan",
                    "Olorunda Igbaga"
                ]
            },
            {
                "name": "Kosofe",
                "wards": [
                    "Agboyi I",
                    "Agboyi Ii",
                    "Anthony Ajao Estate Mende Maryland",
                    "Ifako Soluyi",
                    "Ikosi Ketu Mile 12 Agiliti Maidan",
                    "Isheri Olowo Ira Shangisha Magodo Phase I Ii",
                    "Ketu Alapere Agidi Orisigun Kosofe Ajelogo Akanimodo",
                    "Ojota Ogudu",
                    "Owode Onirin Ajegunle Odo Ogun",
                    "Oworonshoki"
                ]
            },
            {
                "name": "Lagos Island",
                "wards": [
                    "Agarawu Obadina",
                    "Anikantamo",
                    "Eiyekole",
                    "Epetedo",
                    "Idumota Oke",
                    "Iduntafa",
                    "Ilupesi",
                    "Isale Agbede",
                    "Lafiaji Ebute",
                    "Oju Oto",
                    "Oko Awo",
                    "Oko Faji",
                    "Olosun",
                    "Olowogbowo Elegbata",
                    "Olushi Kakawa",
                    "Oluwole",
                    "Onikan",
                    "Popo Aguda",
                    "Sandgrouse"
                ]
            },
            {
                "name": "Lagos Mainland",
                "wards": [
                    "Alagomeji",
                    "Epetedo",
                    "Glover Ebute Metta",
                    "Iwaya",
                    "Maroko Ebute Metta",
                    "Oko Baba",
                    "Olaleye Village",
                    "Otto Iddo",
                    "Oyadiran Estate Abule Oja",
                    "Oyingbo Market Ebute Metta",
                    "Yaba Igbobi"
                ]
            },
            {
                "name": "Mushin",
                "wards": [
                    "Alakara",
                    "Babalosa",
                    "Babalosa Idi Araba",
                    "Idi Araba",
                    "Idi Oro Odi Olowu",
                    "Ilasamaja",
                    "Ilupeju",
                    "Ilupeju Industrial Estate",
                    "Itire",
                    "Kayode Fadeyi",
                    "Mushin Atewolara",
                    "Ojuwoye",
                    "Olateju",
                    "Papa Ajao"
                ]
            },
            {
                "name": "Ojo",
                "wards": [
                    "Ajangbadi",
                    "Etegbin",
                    "Iba",
                    "Idoluwo",
                    "Ijanikin",
                    "Ilogbo",
                    "Irewe",
                    "Ojo Town",
                    "Okokomaiko",
                    "Sabo",
                    "Tafi"
                ]
            },
            {
                "name": "Oshodi Isolo",
                "wards": [
                    "Ajao Estate",
                    "Ilasamaja",
                    "Ishagatedo",
                    "Isolo",
                    "Mafoluku",
                    "Oke Afa Ejigbo",
                    "Okota",
                    "Orile Oshodi",
                    "Oshodi Bolade",
                    "Sogunle",
                    "Sogunle Alasia"
                ]
            },
            {
                "name": "Somolu",
                "wards": [
                    "Abule Okuta Ilaje Bariga",
                    "Alade",
                    "Bajulaiye",
                    "Fola Agoro Bajulaiye Igbari Akoka",
                    "Gbagada Phase I Obanikoro Pedro",
                    "Gbagada Phase Ii Bariga Apelehin",
                    "Igbobi Fadeyi",
                    "Ilaje Akoka",
                    "Lad Lak Bariga",
                    "Mafowoku Pedro",
                    "Onipanu",
                    "Palmgrove Ijebutedo"
                ]
            },
            {
                "name": "Surulere",
                "wards": [
                    "Adeniran Ogunsanya",
                    "Aguda",
                    "Akinhanmi Cole",
                    "Coker",
                    "Igbaja Stadium",
                    "Ijeshatedo",
                    "Ikate",
                    "Iponri Housing Estate Eric Moore",
                    "Itire",
                    "Orile",
                    "Shitta Ogunlana Drive",
                    "Yaba Ojuelegba"
                ]
            }
        ]
    },
    {
        "state": "Nasarawa",
        "lgas": [
            {
                "name": "Akwanga",
                "wards": [
                    "Agyaga",
                    "Akwanga East",
                    "Akwanga West",
                    "Ancho Nighaan",
                    "Anchobaba",
                    "Andaha",
                    "Gudi",
                    "Gwanje Gwanje",
                    "Moroa",
                    "Ningo Bohar",
                    "Nunku"
                ]
            },
            {
                "name": "Awe",
                "wards": [
                    "Akiri",
                    "Azara",
                    "Galadima",
                    "Jangaru",
                    "Kanje Abuni",
                    "Madaki",
                    "Makwangiji",
                    "Ribi",
                    "Tunga",
                    "Wuse"
                ]
            },
            {
                "name": "Doma",
                "wards": [
                    "Agbashi",
                    "Akpanaja",
                    "Alagye I",
                    "Alagye Ii",
                    "Doka I",
                    "Doka Ii",
                    "Rukubi I",
                    "Rukubi Ii",
                    "Sarkin Dawaki",
                    "Ungwan Madaki"
                ]
            },
            {
                "name": "Karu",
                "wards": [
                    "Agada Bagaji",
                    "Aso Kodape",
                    "Gitata",
                    "Gurku Kabusu",
                    "Kafin Shanu Betti",
                    "Karshi I",
                    "Karshi Ii",
                    "Karu",
                    "Panda Kare",
                    "Tattara Kondoro",
                    "Uke"
                ]
            },
            {
                "name": "Keana",
                "wards": [
                    "Agaza",
                    "Aloshi",
                    "Amiri",
                    "Giza Galadima",
                    "Giza Madaki",
                    "Iwagu",
                    "Kadarko",
                    "Kwara",
                    "Obene",
                    "Oki"
                ]
            },
            {
                "name": "Keffi",
                "wards": [
                    "Ang Rimi",
                    "Angwan Iya I",
                    "Angwan Iya Ii",
                    "Gangare Tudu",
                    "Jigwada",
                    "Keffi Town East Kofar Goriya",
                    "Liman Abaji",
                    "Sabon Gari",
                    "Tudun Kofa T V",
                    "Yara"
                ]
            },
            {
                "name": "Kokona",
                "wards": [
                    "Agwada",
                    "Amba",
                    "Bassa",
                    "Dari",
                    "Garaku",
                    "Hadari",
                    "Kofar Gwari",
                    "Kokona",
                    "Koya Kana",
                    "Ninkoro",
                    "Yelwa"
                ]
            },
            {
                "name": "Lafia",
                "wards": [
                    "Adogi",
                    "Agyaragun Tofa",
                    "Arikya",
                    "Ashigie",
                    "Assakio",
                    "Bakin Rijiya Akurba Sarkin Pada",
                    "Chiroma",
                    "Gayam",
                    "Keffin Wambai",
                    "Makama",
                    "Shabu Kwandere",
                    "Wakwa",
                    "Zanwa"
                ]
            },
            {
                "name": "Nasarawa",
                "wards": [
                    "Akum",
                    "Ara I",
                    "Ara Ii",
                    "Guto Aisa",
                    "Kanah Ondo Apawu",
                    "Laminga",
                    "Loko",
                    "Nasarawa Central",
                    "Nasarawa East",
                    "Nasarawa Main Town",
                    "Nasarawa North",
                    "Odu",
                    "Tunga Bakono",
                    "Udenin",
                    "Udenin Gida"
                ]
            },
            {
                "name": "Nasarawa Eggon",
                "wards": [
                    "Agunji",
                    "Aloce Ginda",
                    "Alogani",
                    "Ende",
                    "Igga Burumburum",
                    "Ikka Wangibi",
                    "Kagbu Wana",
                    "Lambaga Arikpa",
                    "Lizzin Keffi Ezzen",
                    "Mada Station",
                    "Nasarawa Eggon",
                    "Ubbe",
                    "Umme",
                    "Wakama"
                ]
            },
            {
                "name": "Obi",
                "wards": [
                    "Adudu",
                    "Agwatashi",
                    "Deddere Riri",
                    "Duduguru",
                    "Gidan Ausa I",
                    "Gidan Ausa Ii",
                    "Gwadenye",
                    "Kyakale",
                    "Obi",
                    "Tudun Adabu"
                ]
            },
            {
                "name": "Toto",
                "wards": [
                    "Bugakarmo",
                    "Dausu",
                    "Gadagwa",
                    "Gwargwada",
                    "Kanyehu",
                    "Katakpa I",
                    "Shafan Abakpa I",
                    "Shafan Kwatto I",
                    "Shege I",
                    "Toto",
                    "Ugya",
                    "Umaisha"
                ]
            },
            {
                "name": "Wamba",
                "wards": [
                    "Arum",
                    "Gitta",
                    "Jimiya",
                    "Konvah",
                    "Kwara",
                    "Mangar",
                    "Nakere",
                    "Wamba East",
                    "Wamba West",
                    "Wayo"
                ]
            }
        ]
    },
    {
        "state": "Niger",
        "lgas": [
            {
                "name": "Agaie",
                "wards": [
                    "Baro",
                    "Boku",
                    "Dauaci",
                    "Ekobadeggi",
                    "Ekossa",
                    "Ekowugi",
                    "Ekowuna",
                    "Etsugaie",
                    "Kutiriko",
                    "Magaji",
                    "Tagagi"
                ]
            },
            {
                "name": "Agwara",
                "wards": [
                    "Adehe",
                    "Agwata",
                    "Busuru",
                    "Gallah",
                    "Kashini",
                    "Kokoli",
                    "Mago",
                    "Papiri",
                    "Rofia",
                    "Suteku"
                ]
            },
            {
                "name": "Bida",
                "wards": [
                    "Bariki",
                    "Ceniyan",
                    "Dokodza",
                    "Kyari",
                    "Landzun",
                    "Masaba Ii",
                    "Masaba I",
                    "Masaga I",
                    "Masaga Ii",
                    "Mayaki Ndajiya",
                    "Nassarafu",
                    "Umaru Majigi Ii",
                    "Umaru Majigi I",
                    "Wadata"
                ]
            },
            {
                "name": "Borgu",
                "wards": [
                    "Babanna",
                    "Dugga",
                    "Kabe Pissa",
                    "Karabonde",
                    "Konkoso",
                    "Malale",
                    "New Bussa",
                    "Riverine",
                    "Shagunu",
                    "Wawa"
                ]
            },
            {
                "name": "Bosso",
                "wards": [
                    "Beji",
                    "Bosso Central I",
                    "Bosso Central Ii",
                    "Chanchaga",
                    "Garatu",
                    "Kampala",
                    "Kodo",
                    "Maikunkele",
                    "Maitumbi",
                    "Shata"
                ]
            },
            {
                "name": "Chanchaga",
                "wards": [
                    "Limawa A",
                    "Limawa B",
                    "Makera",
                    "Minna Central",
                    "Minna South",
                    "Nassarawa A",
                    "Nassarawa B",
                    "Nassarawa C",
                    "Sabon Gari",
                    "Tudun Wada North",
                    "Tudun Wada South"
                ]
            },
            {
                "name": "Edatti",
                "wards": [
                    "Enagi",
                    "Etsu Tasha",
                    "Fazhi",
                    "Gazhe I",
                    "Gazhe Ii",
                    "Gbangban",
                    "Gonagi",
                    "Guzan",
                    "Rokota",
                    "Sakpe"
                ]
            },
            {
                "name": "Gbako",
                "wards": [
                    "Batagi",
                    "Batako",
                    "Edokota",
                    "Edozhigi",
                    "Etsu Audu",
                    "Gbadafu",
                    "Gogata",
                    "Lemu",
                    "Nuwankota",
                    "Sammajiko"
                ]
            },
            {
                "name": "Gurara",
                "wards": [
                    "Bonu",
                    "Diko",
                    "Gawu",
                    "Izom",
                    "Kabo",
                    "Kwaka",
                    "Lambata",
                    "Lefu",
                    "Shako",
                    "Tufa"
                ]
            },
            {
                "name": "Katcha",
                "wards": [
                    "Badeggi",
                    "Bakeko",
                    "Bisanti",
                    "Dzwafu",
                    "Edotsu",
                    "Essa",
                    "Gbakogi",
                    "Kataregi",
                    "Katcha",
                    "Sidi Saba"
                ]
            },
            {
                "name": "Kontagora",
                "wards": [
                    "Arewa",
                    "Central",
                    "Gabas",
                    "Kudu",
                    "Madara",
                    "Magajiya",
                    "Masuga",
                    "Nagwamatse",
                    "Rafin Gora",
                    "Tungan Kawo",
                    "Tunganwawa",
                    "Usalle",
                    "Yamma"
                ]
            },
            {
                "name": "Lapai",
                "wards": [
                    "Arewa Yamma",
                    "Birnin Maza Tashibo",
                    "Ebbo Gbacinku",
                    "Evuti Kpada",
                    "Gulu Anguwa Vatsa",
                    "Gupa Abugi",
                    "Gurdi Zago",
                    "Kudu Gabas",
                    "Muye Egba",
                    "Takuti Shaku"
                ]
            },
            {
                "name": "Lavun",
                "wards": [
                    "Batati",
                    "Busu Kuchi",
                    "Dabban",
                    "Dassun",
                    "Doko",
                    "Egbako",
                    "Gaba",
                    "Jima",
                    "Kusotachi",
                    "Kutigi",
                    "Lagun",
                    "Mambe"
                ]
            },
            {
                "name": "Magama",
                "wards": [
                    "Auna Central",
                    "Auna East",
                    "Auna East Central",
                    "Auna South",
                    "Auna South East",
                    "Ibelu Central",
                    "Ibelu East",
                    "Ibelu North",
                    "Ibelu West",
                    "Nasko",
                    "Nassarawa"
                ]
            },
            {
                "name": "Mariga",
                "wards": [
                    "Bangi",
                    "Beri",
                    "Bobi",
                    "Galma Wamba",
                    "Gulbin Boka",
                    "Igwama",
                    "Inkwai",
                    "Kakihum",
                    "Kontokoro",
                    "Kumbashi",
                    "Maburya"
                ]
            },
            {
                "name": "Mashegu",
                "wards": [
                    "Babban Rami",
                    "Dapangi Makera",
                    "Ibbi",
                    "Kaboji",
                    "Kasanga",
                    "Kulho",
                    "Kwatachi",
                    "Mashegu",
                    "Mazakuka Likoro",
                    "Saho Rami"
                ]
            },
            {
                "name": "Mokwa",
                "wards": [
                    "Bokani",
                    "Gbajibo Muwo",
                    "Gbara",
                    "Ja Agi",
                    "Jebba North",
                    "Kpaki Takuma",
                    "Kudu",
                    "Labozhi",
                    "Mokwa",
                    "Muregi",
                    "Rabba Ndayako"
                ]
            },
            {
                "name": "Munya",
                "wards": [
                    "Beni",
                    "Dandaudu",
                    "Dangunu",
                    "Daza",
                    "Fuka",
                    "Gini",
                    "Guni",
                    "Kabula",
                    "Kazai",
                    "Kuchi",
                    "Sarkin Pawa"
                ]
            },
            {
                "name": "Paikoro",
                "wards": [
                    "Adunu",
                    "Chimbi",
                    "Gwam",
                    "Ishau",
                    "Jere",
                    "Kafin Koro",
                    "Kwagana",
                    "Kwakuti",
                    "Nikuchi T Mallam",
                    "Paiko Central",
                    "Tutungo Jedna"
                ]
            },
            {
                "name": "Rafi",
                "wards": [
                    "Kagara Gari",
                    "Kakuri",
                    "Kongoma Central",
                    "Kongoma West",
                    "Kundu",
                    "Kusherki North",
                    "Kushirki South",
                    "Sabon Gari",
                    "Tegina Gari",
                    "Tegina West",
                    "Yakila"
                ]
            },
            {
                "name": "Rijau",
                "wards": [
                    "Danrangi",
                    "Dugge",
                    "Dukku",
                    "Genu",
                    "Jama Are",
                    "Rijau",
                    "Shambo",
                    "T Bunu",
                    "T Magajiya",
                    "Ushe",
                    "Warari"
                ]
            },
            {
                "name": "Shiroro",
                "wards": [
                    "Allawa",
                    "Bangajiya",
                    "Bassa Kukoki",
                    "Egwa Gwada",
                    "Erana",
                    "Galkogo",
                    "Gurmana",
                    "Gussoro",
                    "Kato",
                    "Kushaka Kurebe",
                    "Kwaki Chukwuba",
                    "Manta",
                    "Pina",
                    "She",
                    "Ubandoma"
                ]
            },
            {
                "name": "Suleja",
                "wards": [
                    "Bagama B",
                    "Bagmama A",
                    "Hashimi A",
                    "Hashimi B",
                    "Iku South I",
                    "Iku South Ii",
                    "Kurmin Sarki",
                    "Magajiya",
                    "Maje North",
                    "Wambai"
                ]
            },
            {
                "name": "Tafa",
                "wards": [
                    "Dogon Kurmi",
                    "Garam",
                    "Ija Gwari",
                    "Ija Koro",
                    "Iku",
                    "New Bwari",
                    "Wuse East",
                    "Wuse West",
                    "Zuma East",
                    "Zuma West"
                ]
            },
            {
                "name": "Wushishi",
                "wards": [
                    "Akare",
                    "Barwa",
                    "Gwarjiko",
                    "Kanwuri",
                    "Kodo",
                    "Kwata",
                    "Lokogoma",
                    "Maito",
                    "Sabon Gari",
                    "Tukunji Yamigi",
                    "Zungeru"
                ]
            }
        ]
    },
    {
        "state": "Ogun",
        "lgas": [
            {
                "name": "Abeokuta North",
                "wards": [
                    "Ago Oko",
                    "Elega",
                    "Gbagura",
                    "Ibara Orile Onisasa",
                    "Ika",
                    "Ikereku",
                    "Ikija Ikereku",
                    "Ilugun Iberekodo",
                    "Imala Idiemi",
                    "Isaga Ilewo",
                    "Ita Osin Olomore",
                    "Lafenwa",
                    "Oke Ago Owu",
                    "Olorunda Ijale",
                    "Sabo",
                    "Totoro Sokori"
                ]
            },
            {
                "name": "Abeokuta South",
                "wards": [
                    "Ago Egun Ijesa",
                    "Ake I",
                    "Ake Iii",
                    "Ake Ii",
                    "Erunbe Oke Ijeun",
                    "Ibara I",
                    "Ibara Ii",
                    "Igbore Ago Oba",
                    "Ijaye Idi Aba",
                    "Ijemo",
                    "Imo Isabo",
                    "Itoko",
                    "Keesi Emere",
                    "Sodeke Sale Ijeun I",
                    "Sodeke Sale Ijeun Ii"
                ]
            },
            {
                "name": "Ado Odo Ota",
                "wards": [
                    "Ado Odo I",
                    "Ado Odo Ii",
                    "Agbara I",
                    "Agbara Ejila Awori",
                    "Alapoti",
                    "Atan",
                    "Ere",
                    "Igbesa",
                    "Ijoko",
                    "Iju",
                    "Ilogbo",
                    "Ketu Adie Owe",
                    "Ota I",
                    "Ota Ii",
                    "Ota Iii",
                    "Sango"
                ]
            },
            {
                "name": "Ewekoro",
                "wards": [
                    "Abalabi",
                    "Arigbajo",
                    "Asa Yobo",
                    "Elere Onigbedu",
                    "Itori",
                    "Mosan",
                    "Obada Oko",
                    "Owowo",
                    "Papalanto",
                    "Wasimi"
                ]
            },
            {
                "name": "Ifo",
                "wards": [
                    "Agbado",
                    "Ajuwon Akute",
                    "Coker",
                    "Ibogun",
                    "Ifo I",
                    "Ifo Ii",
                    "Ifo Iii",
                    "Iseri",
                    "Oke Aro Ibaragun Robiyan",
                    "Ososun",
                    "Sunren"
                ]
            },
            {
                "name": "Ijebu East",
                "wards": [
                    "Ajebandele",
                    "Ijebu Ife I",
                    "Ijebu Ife Ii",
                    "Ijebu Mushin I",
                    "Ijebu Mushin Ii",
                    "Ikija",
                    "Imobi I",
                    "Imobi Ii",
                    "Itele",
                    "Ogbere",
                    "Owu"
                ]
            },
            {
                "name": "Ijebu North",
                "wards": [
                    "Ago Iwoye I",
                    "Ago Iwoye Ii",
                    "Ako Onigbagbo Gelete",
                    "Atikori",
                    "Japara Ojowo",
                    "Mamu Etiri",
                    "Oke Agbo",
                    "Oke Sopin",
                    "Omen",
                    "Oru Awa Ilaporu",
                    "Osun"
                ]
            },
            {
                "name": "Ijebu North East",
                "wards": [
                    "Atan Imuku",
                    "Erunwon",
                    "Igede Itamarun",
                    "Ilese",
                    "Imewiro Ododeyo Imomo",
                    "Isoyin",
                    "Odesenlu",
                    "Odosimadegun Odosebora",
                    "Oju Ona",
                    "Oke Eri Ogbogbo"
                ]
            },
            {
                "name": "Ijebu Ode",
                "wards": [
                    "Ijade Imepe I",
                    "Ijade Imepe Ii",
                    "Ijasi Idepo",
                    "Isiwo",
                    "Isoku Ososa",
                    "Itamapako",
                    "Itantebo",
                    "Odo Egbo Oliworo",
                    "Odo Esa",
                    "Porogun I",
                    "Porogun Ii"
                ]
            },
            {
                "name": "Ikenne",
                "wards": [
                    "Ikenne I",
                    "Ikenne Ii",
                    "Ilisan I",
                    "Ilisan Ii",
                    "Ilisan Irolu",
                    "Iperu I",
                    "Iperu Ii",
                    "Iperu Iii",
                    "Ogere I",
                    "Ogere Ii"
                ]
            },
            {
                "name": "Imeko Afon",
                "wards": [
                    "Afon",
                    "Idi Ayin",
                    "Idofa",
                    "Ilara Alagbe",
                    "Imeko",
                    "Iwoye Jabata",
                    "Kajola Agberiodo",
                    "Oke Agbede Moriwi Matale",
                    "Olorunda Gbomo",
                    "Otapele"
                ]
            },
            {
                "name": "Ipokia",
                "wards": [
                    "Agada",
                    "Agosasa",
                    "Ajegunle",
                    "Idiroko",
                    "Ifonyintedo",
                    "Ihunbo Ilase",
                    "Ijofin Idosa",
                    "Ipokia I",
                    "Ipokia Ii",
                    "Mauni I",
                    "Mauni Ii",
                    "Tube"
                ]
            },
            {
                "name": "Obafemi Owode",
                "wards": [
                    "Ajebo",
                    "Ajura",
                    "Alapako Oni",
                    "Egbeda",
                    "Kajola",
                    "Mokoloki",
                    "Moloko Asipa",
                    "Oba",
                    "Obafemi",
                    "Ofada",
                    "Onidundu",
                    "Owode"
                ]
            },
            {
                "name": "Odeda",
                "wards": [
                    "Alabata",
                    "Alagbagba",
                    "Balogun Itesi",
                    "Ilugun",
                    "Obantoko",
                    "Obete",
                    "Odeda",
                    "Olodo",
                    "Opeji",
                    "Osiele"
                ]
            },
            {
                "name": "Odogbolu",
                "wards": [
                    "Aiyepe",
                    "Ala Igbile",
                    "Ibefun",
                    "Idowa",
                    "Ilado",
                    "Imodi",
                    "Imosan",
                    "Jobore Ibido Ikise",
                    "Odogbolu I",
                    "Odogbolu Ii",
                    "Ogbo Moraika Ita Epo Ii",
                    "Ogbo Moraika Ita Epo I",
                    "Okun Owa",
                    "Omu",
                    "Ososa"
                ]
            },
            {
                "name": "Ogun Water Side",
                "wards": [
                    "Abigi",
                    "Ayede Lomiro",
                    "Ayila Itebu",
                    "Efire",
                    "Ibiade",
                    "Iwopin",
                    "Lukogbe Ilusin",
                    "Makun Irokun",
                    "Ode Omi",
                    "Oni"
                ]
            },
            {
                "name": "Remo North",
                "wards": [
                    "Akaka",
                    "Ayegbami",
                    "Igan Ajina",
                    "Ilara",
                    "Ipara",
                    "Moborode Oke Ola",
                    "Ode I",
                    "Ode Ii",
                    "Odofin Imagbo Petekun Dawara",
                    "Orile Oko"
                ]
            },
            {
                "name": "Sagamu",
                "wards": [
                    "Agbowa",
                    "Ayegbami Ijokun",
                    "Ibido Ituwa Alara",
                    "Ijagba",
                    "Isokun Oyebajo",
                    "Isote",
                    "Latawa",
                    "Ode Lemo",
                    "Ogijo Likosi",
                    "Oko Epe Itula I",
                    "Oko Epe Itula Ii",
                    "Sabo 1",
                    "Sabo Ii",
                    "Simawa Iwelepe",
                    "Surulere"
                ]
            },
            {
                "name": "Yewa Egbado North",
                "wards": [
                    "Aye Toro I",
                    "Aye Toro Ii",
                    "Ebute Igbooro",
                    "Ibese",
                    "Iboro Joga",
                    "Ido Foi",
                    "Igua",
                    "Ijoun",
                    "Imasai",
                    "Ohunbe",
                    "Sunwa"
                ]
            },
            {
                "name": "Yewa Egbado South",
                "wards": [
                    "Ajilete",
                    "Idogo",
                    "Ilaro I",
                    "Ilaro Ii",
                    "Ilaro Iii",
                    "Ilobi Erinja",
                    "Iwoye",
                    "Oke Odan",
                    "Owode I",
                    "Owode Ii"
                ]
            }
        ]
    },
    {
        "state": "Ondo",
        "lgas": [
            {
                "name": "Akoko North East",
                "wards": [
                    "Edo",
                    "Ekan",
                    "Ikado I",
                    "Ikado Ii",
                    "Ilepa I",
                    "Ilepa Ii",
                    "Isowopo I",
                    "Isowopo Ii",
                    "Iyometa I",
                    "Iyometa Ii",
                    "Oorun I",
                    "Oorun Ii",
                    "Oyinmo"
                ]
            },
            {
                "name": "Akoko North West",
                "wards": [
                    "Ajowa Igasi Eriti Gedegede",
                    "Arigidi Ii",
                    "Arigidi Iye I",
                    "Erusu Karamu Ibaramu",
                    "Ese Afin",
                    "Odo Irun Oyinmo",
                    "Ogbagi",
                    "Oke Irun Surulere",
                    "Okeagbe",
                    "Oyin Oge"
                ]
            },
            {
                "name": "Akoko South East",
                "wards": [
                    "Epinmi I",
                    "Epinmi Ii",
                    "Ifira",
                    "Ipe I",
                    "Ipe Ii",
                    "Ipesi",
                    "Isua I",
                    "Isua Ii",
                    "Isua Iii",
                    "Isua Iv",
                    "Sosan"
                ]
            },
            {
                "name": "Akoko South West",
                "wards": [
                    "Akungba I",
                    "Akungba Ii",
                    "Ikun",
                    "Oba I",
                    "Oba Ii",
                    "Oka I Ibaka Sabo",
                    "Oka Ii A Ikanmu",
                    "Oka Ii B Okia Korowa Simerin Uba",
                    "Oka Iii A Agba",
                    "Oka Iii B Owase Ikese Iwonrin Ebinrin Idorin",
                    "Oka Iv Owake Ebo Ayegunle",
                    "Oka V A Owalusin Ayepe",
                    "Oka V B Oka Odo Okela Bolorunduro",
                    "Supare I",
                    "Supare Ii"
                ]
            },
            {
                "name": "Akure North",
                "wards": [
                    "Agamo Oke Oore Akomowa",
                    "Ayede Ogbese",
                    "Ayetoro",
                    "Igbatoro",
                    "Igoba Isinigbo",
                    "Iluabo Eleyewo Bolorunduro",
                    "Isimija Irado",
                    "Moferere",
                    "Oba Ile",
                    "Odo Oja Ijigbo",
                    "Oke Iju",
                    "Oke Afa Owode"
                ]
            },
            {
                "name": "Akure South",
                "wards": [
                    "Aponmu",
                    "Gbogi Isikan I",
                    "Gbogi Isikan Ii",
                    "Ijomu Obanla",
                    "Lisa",
                    "Oda",
                    "Odopetu",
                    "Oke Aro Uro I",
                    "Oke Aro Uro Ii",
                    "Oshodi Isolo",
                    "Owode Imuagun"
                ]
            },
            {
                "name": "Ese Odo",
                "wards": [
                    "Apoi I",
                    "Apoi Ii",
                    "Apoi Iii",
                    "Apoi Iv",
                    "Apoi V",
                    "Arogbo I",
                    "Arogbo Ii",
                    "Arogbo Iii",
                    "Ukparama I",
                    "Ukparama Ii"
                ]
            },
            {
                "name": "Idanre",
                "wards": [
                    "Ala Elefosan",
                    "Alade Atosin",
                    "Idale Lemikan",
                    "Idale Logbosere",
                    "Ijomu Isurin",
                    "Irowo",
                    "Isalu Ehinpeti",
                    "Isalu Jigbokin",
                    "Ofosu Onisere",
                    "Owena Aponmulona"
                ]
            },
            {
                "name": "Ifedore",
                "wards": [
                    "Ero Ibuji Mariwo",
                    "Igbaka Oke I",
                    "Igbaka Oke Ii",
                    "Ijare 1",
                    "Ijare 11",
                    "Ilara 1",
                    "Ilara 11",
                    "Ipogun Ibule",
                    "Isarun Erigi",
                    "Obo Ikota Olo Gbo"
                ]
            },
            {
                "name": "Ilaje",
                "wards": [
                    "Aheri",
                    "Etikan",
                    "Mahin 1",
                    "Mahin 11",
                    "Mahin 111",
                    "Mahin 1v",
                    "Ugbo 1",
                    "Ugbo 11",
                    "Ugbo 111",
                    "Ugbo 1v",
                    "Ugbo V",
                    "Ugbo V1"
                ]
            },
            {
                "name": "Ileoluji Okeigbo",
                "wards": [
                    "Ileoluji 1",
                    "Ileoluji 11",
                    "Ileoluji 1v",
                    "Ileoluji Iii",
                    "Ileoluji V",
                    "Ileoluji Vi",
                    "Oke Igbo 1",
                    "Oke Igbo 11",
                    "Oke Igbo 111",
                    "Oke Igbo 1v"
                ]
            },
            {
                "name": "Irele",
                "wards": [
                    "Ajagba 1",
                    "Ajagba 11",
                    "Akotogbo 1",
                    "Akotogbo 11",
                    "Irele 1",
                    "Irele 11",
                    "Irele 1v",
                    "Irele Iii",
                    "Irele V",
                    "Iyansan Omi"
                ]
            },
            {
                "name": "Odigbo",
                "wards": [
                    "Agbabu",
                    "Ago Alaye",
                    "Ajue",
                    "Araromi Obu",
                    "Ayesan",
                    "Ebijan",
                    "Koseru",
                    "Odigbo",
                    "Oniparaga",
                    "Ore 1",
                    "Ore 11"
                ]
            },
            {
                "name": "Okitipupa",
                "wards": [
                    "Aye 11",
                    "Ayeka Igbodigo",
                    "Erinje",
                    "Igbotako 1",
                    "Igbotako 11",
                    "Iju Odo Erekiti",
                    "Ikoya Oloto",
                    "Ilutitun 1",
                    "Ilutitun 111",
                    "Ilutitun Ii",
                    "Ode Aye 1",
                    "Okitipupa 1",
                    "Okitipupa 11"
                ]
            },
            {
                "name": "Ondo East",
                "wards": [
                    "Asantan Oja",
                    "Ateru Otasan Igba",
                    "Bolorunduro 1",
                    "Epe",
                    "Fagbo",
                    "Obada",
                    "Oboto",
                    "Orisunmibare",
                    "Owena Bridge",
                    "Tepo"
                ]
            },
            {
                "name": "Ondo West",
                "wards": [
                    "Enuowa Obalalu",
                    "Gbaghengha Gbongbo Ajagba Alafia",
                    "Ifore Odosida Loro",
                    "Ilunla Bagbe Odowo I",
                    "Ilunla Bagbe Odowo Ii",
                    "Litaye Obunkekere Igbindo",
                    "Lodasa Iparuku Lijoka",
                    "Odojomu Erinketa Legiri",
                    "Oke Otunba Oke Diba Sokoti",
                    "Okeagunla Okerowo Okekuta",
                    "Okelisa Okedoko Ogbodu",
                    "Orisunmibare Araromi"
                ]
            },
            {
                "name": "Ose",
                "wards": [
                    "Afo",
                    "Idoani 1",
                    "Idoani 11",
                    "Idogun",
                    "Ifon 1",
                    "Ifon 11",
                    "Ijagba",
                    "Ikaro Elegbeka",
                    "Imeri",
                    "Imoru Arimogija",
                    "Okeluse",
                    "Ute"
                ]
            },
            {
                "name": "Owo",
                "wards": [
                    "Ehinogbe",
                    "Igboroko 1",
                    "Igboroko 11",
                    "Ijebu 1",
                    "Ijebu 11",
                    "Iloro",
                    "Ipele",
                    "Isaipen",
                    "Isuada Ipenmen Idasan Obasooto",
                    "Iyare",
                    "Uso Emure Ile"
                ]
            }
        ]
    },
    {
        "state": "Osun",
        "lgas": [
            {
                "name": "Atakumosa East",
                "wards": [
                    "Ajebandele",
                    "Ayegunle",
                    "Eti Oni",
                    "Faforiji",
                    "Forest Reserve 1",
                    "Forest Reserve Ii",
                    "Igangan",
                    "Iperindo",
                    "Ipole",
                    "Iwara"
                ]
            },
            {
                "name": "Atakumosa West",
                "wards": [
                    "Ibodi",
                    "Ifelodun",
                    "Ifewara I",
                    "Ifewara Ii",
                    "Isa Obi",
                    "Ita Gunmodi",
                    "Muroko",
                    "Oke Bode",
                    "Osu Iii",
                    "Osu I",
                    "Osu Ii"
                ]
            },
            {
                "name": "Ayedaade",
                "wards": [
                    "Anlugbua",
                    "Araromi Owu",
                    "Balogun",
                    "Gbongan Rural",
                    "Ijegbe Oke Eso Oke Owu Ijugbe",
                    "Lagere Amola",
                    "Obalufon",
                    "Ode Omu Rural",
                    "Olufi",
                    "Otun Balogun",
                    "Otun Olufi"
                ]
            },
            {
                "name": "Ayedire",
                "wards": [
                    "Ileogbo I",
                    "Ileogbo Ii",
                    "Ileogbo Iii",
                    "Ileogbo Iv",
                    "Kuta I",
                    "Kuta Ii",
                    "Oke Osun",
                    "Oluponna 1",
                    "Oluponna 1i",
                    "Oluponna 1ii"
                ]
            },
            {
                "name": "Boluwaduro",
                "wards": [
                    "Eripa",
                    "Gbeleru Obaala I",
                    "Gbeleru Obaala Ii",
                    "Iresi I",
                    "Iresi Ii",
                    "Obala Iloro",
                    "Oke Ode Otan",
                    "Oke Irun",
                    "Oke Omi Otan",
                    "Oke Otan"
                ]
            },
            {
                "name": "Boripe",
                "wards": [
                    "Ada I",
                    "Ada Ii",
                    "Agba",
                    "College Egbada Road",
                    "Isale Asa Iree",
                    "Isale Oyo",
                    "Oja Oba",
                    "Oke Aree",
                    "Oke Esa Oke Ogi",
                    "Oloti Iragbiji",
                    "Ororuwo"
                ]
            },
            {
                "name": "Ede North",
                "wards": [
                    "Abogunde Sagba",
                    "Alusekere",
                    "Apaso",
                    "Bara Ejemu",
                    "Isibo Buari Isola",
                    "Jagun Jagun Ede",
                    "Olaba Atapara",
                    "Ologun Agbaakin",
                    "Olusokun",
                    "Sabo Agbongbe I",
                    "Sabo Agbongbe Ii"
                ]
            },
            {
                "name": "Ede South",
                "wards": [
                    "Alajue I",
                    "Alajue Ii",
                    "Asunmo",
                    "Babanla Agate",
                    "Babasanya",
                    "Kuye",
                    "Loogun",
                    "Olodan",
                    "Oloki Akoda",
                    "Sekona"
                ]
            },
            {
                "name": "Egbedore",
                "wards": [
                    "Ara I",
                    "Ara Ii",
                    "Awo Abudo",
                    "Ido Osun",
                    "Ikotun",
                    "Ira Gberi I",
                    "Ira Gberi Ii",
                    "Iwoye Idoo Origo",
                    "Ojo Aro",
                    "Okin Ni Olorunsogo Ofatedo"
                ]
            },
            {
                "name": "Ejigbo",
                "wards": [
                    "Elejigbo A",
                    "Elejigbo B Osolo",
                    "Elejigbo C Mapo",
                    "Elejigbo D Ejemu",
                    "Elejigbo Ayegbogbo",
                    "Ifeodan A Owu Ile",
                    "Ifeodan B Masifa",
                    "Ilawo Isoko Isundunrin",
                    "Inisa I Aato Igbon",
                    "Inisa Ii Afaake Ayegunle",
                    "Ola Aye Agurodo"
                ]
            },
            {
                "name": "Ife Central",
                "wards": [
                    "Akarabata",
                    "Ilare 1",
                    "Ilare 1i",
                    "Ilare Iii",
                    "Ilare Iv",
                    "Iremo Ii Eleyele",
                    "Iremo Iii",
                    "Iremo Iv",
                    "Iremo V",
                    "Iremo Ajebandele",
                    "More Ojaja"
                ]
            },
            {
                "name": "Ife East",
                "wards": [
                    "Ilode I",
                    "Ilode Ii",
                    "Modakeke Ii",
                    "Modakeke Iii",
                    "Modakeke I",
                    "More",
                    "Okerewe I",
                    "Okerewe Ii",
                    "Okerewe Iii",
                    "Yekemi"
                ]
            },
            {
                "name": "Ife North",
                "wards": [
                    "Asipa Akinlalu",
                    "Edunabon I",
                    "Edunabon Ii",
                    "Famia",
                    "Ipetumodu I",
                    "Ipetumodu Ii",
                    "Moro",
                    "Oyere Ii",
                    "Oyere I",
                    "Yakoyo"
                ]
            },
            {
                "name": "Ife South",
                "wards": [
                    "Aare",
                    "Abiri Ogudu",
                    "Aye",
                    "Ayesan",
                    "Ikija I",
                    "Ikija Ii",
                    "Kere",
                    "Mefoworade",
                    "Oke Owena",
                    "Olode",
                    "Osi"
                ]
            },
            {
                "name": "Ifedayo",
                "wards": [
                    "Akesin",
                    "Asaoni",
                    "Aworo Oke Ila Rural",
                    "Ayetoro",
                    "Balogun",
                    "Co Operative",
                    "Isinmi",
                    "Obaale",
                    "Oyi",
                    "Temidire"
                ]
            },
            {
                "name": "Ifelodun",
                "wards": [
                    "Amola Ikirun",
                    "Eesa Ikirun",
                    "Ekoende Eko Ajala",
                    "Iba I",
                    "Iba Ii",
                    "Ikirun Rural",
                    "Isale Oke Afo",
                    "Obagun",
                    "Okeba Ikirun",
                    "Olonde Ikirun",
                    "Owode Ikirun",
                    "Station Road Ikirun"
                ]
            },
            {
                "name": "Ila",
                "wards": [
                    "Ajaba Edemosi Aba Orangun",
                    "Ejigbo I",
                    "Ejigbo Ii",
                    "Ejigbo Iii",
                    "Eyindi",
                    "Eyindi Iperin",
                    "Iperin",
                    "Isedo I",
                    "Isedo Ii",
                    "Oke Ede",
                    "Oke Ola"
                ]
            },
            {
                "name": "Ilesa East",
                "wards": [
                    "Biladu",
                    "Bolorunduro",
                    "Ifosan Oke Eso",
                    "Ijamo",
                    "Ilerin",
                    "Iloro Roye",
                    "Imo",
                    "Isare",
                    "Itisin Ogudu",
                    "Okesa",
                    "Upper Lower Ijoka"
                ]
            },
            {
                "name": "Ilesa West",
                "wards": [
                    "Ayeso",
                    "Ereja",
                    "Ikoti Araromi",
                    "Ilaje",
                    "Isida Adeti",
                    "Isokun",
                    "Itakogun",
                    "Lower Egbedi",
                    "Omofe Idasa",
                    "Upper And Lower Igbogi"
                ]
            },
            {
                "name": "Irepodun",
                "wards": [
                    "Bara A",
                    "Bara B",
                    "Elerin A",
                    "Elerin B",
                    "Elerin C",
                    "Elerin D",
                    "Elerin E",
                    "Olobu A",
                    "Olobu C",
                    "Olobu D",
                    "Olubu B"
                ]
            },
            {
                "name": "Irewole",
                "wards": [
                    "Ikire A",
                    "Ikire B",
                    "Ikire C",
                    "Ikire D",
                    "Ikire E",
                    "Ikire F",
                    "Ikire G",
                    "Ikire H",
                    "Ikire I",
                    "Ikire J",
                    "Ikire K"
                ]
            },
            {
                "name": "Isokan",
                "wards": [
                    "Alapomu I Odo Osun",
                    "Alapomu Ii",
                    "Asalu Mogimogi",
                    "Asalu Ikoyi",
                    "Awala I",
                    "Awala Ii",
                    "Idogun Ward",
                    "Olukoyi Oja Osun",
                    "Oosa Adifa",
                    "Oranran Ward",
                    "Osa Ikoyi Oloke"
                ]
            },
            {
                "name": "Iwo",
                "wards": [
                    "Gidigbo I",
                    "Gidigbo Ii",
                    "Gidigbo Iii",
                    "Isale Oba I",
                    "Isale Oba Ii",
                    "Isale Oba Iii",
                    "Isale Oba Iv",
                    "Molete I",
                    "Molete Ii",
                    "Molete Iii",
                    "Oke Adan I",
                    "Oke Adan Ii",
                    "Oke Adan Iii",
                    "Oke Oba I",
                    "Oke Oba Ii"
                ]
            },
            {
                "name": "Obokun",
                "wards": [
                    "Eesun Ido Oko",
                    "Esa Odo",
                    "Esa Oke",
                    "Ibokun Township",
                    "Ilahun Ikinyinwa",
                    "Ilare",
                    "Ilase Idominasi",
                    "Imesi Ile",
                    "Ipetu Ile Adaowode",
                    "Otan Ile"
                ]
            },
            {
                "name": "Odo Otin",
                "wards": [
                    "Asi Asaba",
                    "Baale",
                    "Ekosin Iyeku",
                    "Esa Otun Baale Ode",
                    "Faji Opete",
                    "Igbaye",
                    "Ijabe Ila Odo",
                    "Jagun Osi Bale Ode",
                    "Oba Ojomu",
                    "Okua Ekusa",
                    "Oloyan Elemosho Esa",
                    "Olukotun",
                    "Olunisa",
                    "Ore Agbeye",
                    "Osolo Oparin Ola"
                ]
            },
            {
                "name": "Ola Oluwa",
                "wards": [
                    "Ajagba Iwo Oke",
                    "Asa Ajagunlase",
                    "Asamu Ilemowu",
                    "Bode Osi",
                    "Ikire Ile Iwara",
                    "Isero Ikonifin",
                    "Obamoro Ile Ogo",
                    "Ogbaagba I",
                    "Ogbaagba Ii",
                    "Telemu"
                ]
            },
            {
                "name": "Olorunda",
                "wards": [
                    "Agowande",
                    "Akogun",
                    "Atelewo",
                    "Ayetoro",
                    "Balogun",
                    "Ilie",
                    "Oba Oke",
                    "Oba Ile",
                    "Owode I",
                    "Owode Ii",
                    "Owoope"
                ]
            },
            {
                "name": "Oriade",
                "wards": [
                    "Apoti Dagbaja",
                    "Erin Ijesa",
                    "Erin Oke",
                    "Erinmo Iwaraja",
                    "Ijebu Jesa",
                    "Ijeda Iloko",
                    "Ijeji Arakeji Owena",
                    "Ikeji Ile",
                    "Ipetu Ijesa I",
                    "Ipetu Ijesa Ii",
                    "Ira",
                    "Iwoye"
                ]
            },
            {
                "name": "Orolu",
                "wards": [
                    "Olufon Orolu J",
                    "Olufon Orolu A",
                    "Olufon Orolu B",
                    "Olufon Orolu I",
                    "Olufon Orolu C",
                    "Olufon Orolu D",
                    "Olufon Orolu E",
                    "Olufon Orolu F",
                    "Olufon Orolu G",
                    "Olufon Orolu H"
                ]
            },
            {
                "name": "Osogbo",
                "wards": [
                    "Alagba",
                    "Are Ago",
                    "Ataoja A",
                    "Ataoja B",
                    "Ataoja C",
                    "Ataoja D",
                    "Ataoja E",
                    "Baba Kekere",
                    "Ekerin",
                    "Eketa",
                    "Jagun A",
                    "Jagun B",
                    "Otun Balogun A",
                    "Otun Hagun B",
                    "Otun Jagun A"
                ]
            }
        ]
    },
    {
        "state": "Oyo",
        "lgas": [
            {
                "name": "Afijio",
                "wards": [
                    "Akinmorin Jobele",
                    "Awe I",
                    "Awe Ii",
                    "Fiditi I",
                    "Fiditi Ii",
                    "Ilora I",
                    "Ilora Ii",
                    "Ilora Iii",
                    "Imini",
                    "Iware"
                ]
            },
            {
                "name": "Akinyele",
                "wards": [
                    "Ajibade Alabata Elekuru",
                    "Akinyele Isabiyi Irepodun",
                    "Arulogun Eniosa Aroro",
                    "Ijaye Ojedeji",
                    "Ikereku",
                    "Iroko",
                    "Iwokoto Talontan Idi Oro",
                    "Ojo Emo Moniya",
                    "Ojoo Ajibode Laniba",
                    "Olanla Oboda Labode",
                    "Olode Amosun Onidundu",
                    "Olorisa Oko Okegbemi Mele"
                ]
            },
            {
                "name": "Atiba",
                "wards": [
                    "Agunpopo I",
                    "Agunpopo Ii",
                    "Agunpopo Iii",
                    "Aremo",
                    "Ashipa I",
                    "Ashipa Ii",
                    "Ashipa Iii",
                    "Bashorun",
                    "Oke Afin 1",
                    "Oke Afin Ii"
                ]
            },
            {
                "name": "Atisbo",
                "wards": [
                    "Ago Are I",
                    "Ago Are Ii",
                    "Alaga",
                    "Basi",
                    "Irawo Ile",
                    "Irawo Owode",
                    "Ofiki",
                    "Owo Agunrege Sabe",
                    "Tede I",
                    "Tede Ii"
                ]
            },
            {
                "name": "Egbeda",
                "wards": [
                    "Ayede Alugbo Koloko",
                    "Egbeda",
                    "Erunmu",
                    "Olodan Ajinogbo",
                    "Olode Alakia",
                    "Olodo Ii",
                    "Olodo Iii",
                    "Olodo Kumapayi I",
                    "Olubadan Estate",
                    "Osegere Awaye",
                    "Owobaale Kasumu"
                ]
            },
            {
                "name": "Ibadan North",
                "wards": [
                    "Ward I N2",
                    "Ward Ii N3",
                    "Ward Iii N4",
                    "Ward Iv N5a",
                    "Ward Ix N6b Part I",
                    "Ward V N5b",
                    "Ward Vi N6a Part I",
                    "Ward Vii N6a Part Ii",
                    "Ward Viii N6a Part Iii",
                    "Ward X N6b Part Ii",
                    "Ward Xi Nw8",
                    "Ward Xii Nw8"
                ]
            },
            {
                "name": "Ibadan North East",
                "wards": [
                    "Iii E3",
                    "Ward 2 Ni Part Ii",
                    "Ward I Ei",
                    "Ward Iv E4",
                    "Ward Ix E7ii",
                    "Ward V E5a",
                    "Ward Vi E5b",
                    "Ward Vii E6",
                    "Ward Viii E7 I",
                    "Ward X E8",
                    "Ward Xi E9 I",
                    "Ward Xii E9 Ii"
                ]
            },
            {
                "name": "Ibadan North West",
                "wards": [
                    "Ward 10 Nw7",
                    "Ward 11 Nw7",
                    "Ward 2 Ni Part Ii",
                    "Ward 3 Nw1",
                    "Ward 4 Nw2",
                    "Ward 5 Nw3 Part I",
                    "Ward 6 Nw3 Part I",
                    "Ward 7 Nw4",
                    "Ward 8 Nw5",
                    "Ward 9 Nw6",
                    "Ward I Ni Part I"
                ]
            },
            {
                "name": "Ibadan South West",
                "wards": [
                    "Ward 08 Sw7",
                    "Ward 1 C2",
                    "Ward 10 Sw8 Ii",
                    "Ward 11 Sw9 1",
                    "Ward 12 Sw9 Ii",
                    "Ward 2 Sw1",
                    "Ward 3 Sw2",
                    "Ward 4 Sw3a 3b",
                    "Ward 5 Sw4",
                    "Ward 6 Sw5",
                    "Ward 7 Sw6",
                    "Ward 9 Sw8 1"
                ]
            },
            {
                "name": "Ibadan South East",
                "wards": [
                    "C1",
                    "S S5",
                    "S 1",
                    "S 2a",
                    "S 3",
                    "S 4a",
                    "S 4b",
                    "S 6a",
                    "S 7a",
                    "S 7b",
                    "S 2b",
                    "S 6b"
                ]
            },
            {
                "name": "Ibarapa Central",
                "wards": [
                    "Iberekodo I Pataoju",
                    "Iberekodo Agbooro Ita Baale",
                    "Idere I Molete",
                    "Idere Ii Ominigbo Oke Oba",
                    "Idere Iii Koso Apa",
                    "Idofin Isaganun",
                    "Igbole Pako",
                    "Isale Oba",
                    "Oke Odo",
                    "Okeserin I Ii"
                ]
            },
            {
                "name": "Ibarapa East",
                "wards": [
                    "Aborerin",
                    "Anko",
                    "Isaba",
                    "Isale Togun",
                    "Itabo",
                    "New Eruwa",
                    "Oke Oba",
                    "Oke Otun",
                    "Oke Imale",
                    "Sango"
                ]
            },
            {
                "name": "Ibarapa North",
                "wards": [
                    "Ayete I",
                    "Ayete Ii",
                    "Igangan I",
                    "Igangan Ii",
                    "Igangan Iii",
                    "Igangan Iv",
                    "Ofiki I",
                    "Ofiki Ii",
                    "Tapa I",
                    "Tapa Ii"
                ]
            },
            {
                "name": "Ido",
                "wards": [
                    "Aba Emo Ilaju Alako",
                    "Akinware Akindele",
                    "Akufo Idigba Araromi",
                    "Apete Ayegun Awotan",
                    "Batake Idi Iya",
                    "Erinwusi Koguo Odetola",
                    "Fenwa Oganla Elenusonso",
                    "Ido Onikede Okuna Awo",
                    "Ogundele Alaho Siba Idi Ahun",
                    "Omi Adio Omi Onigbagbo Bakatari"
                ]
            },
            {
                "name": "Irepo",
                "wards": [
                    "Agoro",
                    "Ajagunna",
                    "Atipa",
                    "Iba I",
                    "Iba Ii",
                    "Iba Iii",
                    "Iba Iv",
                    "Iba V",
                    "Ikolaba",
                    "Laha Ajana"
                ]
            },
            {
                "name": "Iseyin",
                "wards": [
                    "Ado Awaye",
                    "Akinwumi Osoogun",
                    "Ekunle I",
                    "Ekunle Ii",
                    "Faramora",
                    "Ijemba Oke Ola Oke Oja",
                    "Isalu I",
                    "Isalu Ii",
                    "Koso I",
                    "Koso Ii",
                    "Ladogan Oke Eyin"
                ]
            },
            {
                "name": "Itesiwaju",
                "wards": [
                    "Babaode",
                    "Igbojaiye",
                    "Ipapo",
                    "Komu",
                    "Okaka I",
                    "Okaka Ii",
                    "Oke Amu",
                    "Otu 1",
                    "Otu Ii",
                    "Owode Ipapo"
                ]
            },
            {
                "name": "Iwajowa",
                "wards": [
                    "Agbaakin I",
                    "Agbaakin Ii",
                    "Iwere Ile I",
                    "Iwere Ile Ii",
                    "Iwere Ile Iii",
                    "Iwere Ile Iv",
                    "Sabi Gana I",
                    "Sabi Gana Ii",
                    "Sabi Gana Iii",
                    "Sabi Gana Iv"
                ]
            },
            {
                "name": "Kajola",
                "wards": [
                    "Ayetoro Oke I",
                    "Elero",
                    "Gbelekale I Ii",
                    "Iba Ogan",
                    "Ijo",
                    "Ilaji Oke Iwere Oke",
                    "Imoba Oke Ogun",
                    "Isemi Ile Imia Ilua",
                    "Isia",
                    "Kajola",
                    "Olele"
                ]
            },
            {
                "name": "Lagelu",
                "wards": [
                    "Ajara Opeodu",
                    "Apatere Kuffi Ogunbode Ogo",
                    "Arulogun Ehin Kelebe",
                    "Ejioku Igbon Ariku",
                    "Lagelu Market Kajola Gbena",
                    "Lagun",
                    "Lalupon I",
                    "Lalupon Ii",
                    "Lalupon Iii",
                    "Ofa Igbo",
                    "Ogunjana Olowode Ogburo",
                    "Ogunremi Ogunsina",
                    "Oyedeji Olode Kutayi",
                    "Sagbe Pabiekun"
                ]
            },
            {
                "name": "Ogbomoso North",
                "wards": [
                    "Aaje Ogunbado Oke Agbede",
                    "Abogunde",
                    "Aguodo Masifa",
                    "Isale Afon",
                    "Isale Alaasa",
                    "Isale Ora Saja",
                    "Jagun",
                    "Okelerin",
                    "Osupa",
                    "Sabo Tara"
                ]
            },
            {
                "name": "Ogbomoso South",
                "wards": [
                    "Akata",
                    "Alapata",
                    "Arowomole",
                    "Ibapon",
                    "Ijeru I",
                    "Ijeru Ii",
                    "Ilogbo",
                    "Isoko",
                    "Lagbedu",
                    "Oke Ola Farm Settlement"
                ]
            },
            {
                "name": "Ogo Oluwa",
                "wards": [
                    "Ajaawa I",
                    "Ajaawa Ii",
                    "Ayede",
                    "Ayetoro",
                    "Idewure",
                    "Lagbedu",
                    "Mowolowo Iwo Ate",
                    "Odo Oba",
                    "Opete",
                    "Otamokun"
                ]
            },
            {
                "name": "Olorunsogo",
                "wards": [
                    "Aboke Aboyun Ogun",
                    "Elerugba Elehinke Sagbo Aperu",
                    "Ikolaba Obadimo",
                    "Onigbeti I Iyamopo",
                    "Onigbeti Ii Saagbon Agoro Santo",
                    "Onigbeti Iii Iv Agbeni",
                    "Opa Ogunniyi",
                    "Seriki I Abosino Okin",
                    "Seriki Ii Agbele",
                    "Waro Apata Alaje"
                ]
            },
            {
                "name": "Oluyole",
                "wards": [
                    "Ayegun",
                    "Idi Iroko Ikereku",
                    "Idi Osan Egbeda Atuba",
                    "Muslim Ogbere",
                    "Odo Ona Nla",
                    "Okanhinde Latunde",
                    "Olomi Olunde",
                    "Olonde Aba Nla",
                    "Onipe",
                    "Orisunbare Ojo Ekun"
                ]
            },
            {
                "name": "Ona Ara",
                "wards": [
                    "Akanran Olorunda",
                    "Araromi Aperin",
                    "Badeku",
                    "Gbada Efon",
                    "Odi Odeyale Odi Aperin",
                    "Ogbere",
                    "Ogbere Tioya",
                    "Ojoku Ajia",
                    "Olode Gbedun Ojebode",
                    "Olorunsogo",
                    "Oremeji Agugu"
                ]
            },
            {
                "name": "Orelope",
                "wards": [
                    "Aare",
                    "Alepata",
                    "Bonni",
                    "Igbope Iyeye I",
                    "Igbope Iyeye Ii",
                    "Igi Isubu",
                    "Onibode I",
                    "Onibode Ii",
                    "Onibode Iii",
                    "Onigboho Alomo Okere"
                ]
            },
            {
                "name": "Ori Ire",
                "wards": [
                    "Ori Ire I",
                    "Ori Ire Ii",
                    "Ori Ire Iii",
                    "Ori Ire Iv",
                    "Ori Ire Ix",
                    "Ori Ire V",
                    "Ori Ire Vi",
                    "Ori Ire Vii",
                    "Ori Ire Viii",
                    "Ori Ire X"
                ]
            },
            {
                "name": "Oyo East",
                "wards": [
                    "Agboye Molete",
                    "Ajagba",
                    "Alaodi Modeke",
                    "Apaara",
                    "Apinni",
                    "Balogun",
                    "Jabata",
                    "Oke Apo",
                    "Oluajo",
                    "Owode Araromi"
                ]
            },
            {
                "name": "Oyo West",
                "wards": [
                    "Ajokidero Akewugberu",
                    "Akeetan",
                    "Fasola Soku",
                    "Iseke",
                    "Isokun",
                    "Iyaji",
                    "Ojongbodu",
                    "Opapa",
                    "Owode",
                    "Pakoyi Idode"
                ]
            },
            {
                "name": "Saki East",
                "wards": [
                    "Agbonle",
                    "Ago Amodu I",
                    "Ago Amodu Ii",
                    "Ogbooro I",
                    "Ogbooro Ii",
                    "Oje Owode I",
                    "Oje Owode Ii",
                    "Sepeteri I",
                    "Sepeteri Ii",
                    "Sepeteri Iii",
                    "Sepeteri Iv"
                ]
            },
            {
                "name": "Saki West",
                "wards": [
                    "Aganmu Kooko",
                    "Ajegunle",
                    "Bagii",
                    "Ekokan Mua",
                    "Iya",
                    "Ogidigbo Kinnikinni",
                    "Oke Oro",
                    "Okere I",
                    "Okere Ii",
                    "Sangote Booda Baabo Ilus",
                    "Sepeteri Bapon"
                ]
            },
            {
                "name": "Surulere",
                "wards": [
                    "Baya Oje",
                    "Igbon Gambari",
                    "Iresaadu I Iresaapa",
                    "Iresaadu Ii Arolu",
                    "Iresaadu Iii Iresaadu",
                    "Iresaadu Iv Iregba",
                    "Iwofin",
                    "Oko I Oko",
                    "Oko Ii Ilajue",
                    "Oko Iii Mayin"
                ]
            }
        ]
    },
    {
        "state": "Plateau",
        "lgas": [
            {
                "name": "Barikin Ladi",
                "wards": [
                    "Barakin Ladi",
                    "Gassa Sho",
                    "Gindin Akwati",
                    "Heipang",
                    "Kapwis",
                    "Kurra Falls",
                    "Lobiring",
                    "Marit Mazat",
                    "Rafan",
                    "Tafan",
                    "Zabot"
                ]
            },
            {
                "name": "Bassa",
                "wards": [
                    "Buhit",
                    "Buji",
                    "Gabia",
                    "Gurum",
                    "Jengre",
                    "Kadamo",
                    "Kakkek",
                    "Kasuru",
                    "Kimakpa",
                    "Kishika",
                    "Mafara",
                    "Rimi",
                    "Ta Agbe",
                    "Tahu",
                    "Zabolo",
                    "Zobwo"
                ]
            },
            {
                "name": "Bokkos",
                "wards": [
                    "Bokkos",
                    "Butura",
                    "Daffo",
                    "Damwai",
                    "Kwatas",
                    "Mangor",
                    "Manguna",
                    "Mbar Mangar",
                    "Mushere West",
                    "Mushere Central",
                    "Richa",
                    "Sha",
                    "Tangur",
                    "Toff"
                ]
            },
            {
                "name": "Jos East",
                "wards": [
                    "Federe",
                    "Fobur B",
                    "Fobur A",
                    "Fursum",
                    "Jarawan Kogi",
                    "Mai Gemu",
                    "Maijuju",
                    "Shere East",
                    "Shere West",
                    "Zandi"
                ]
            },
            {
                "name": "Jos North",
                "wards": [
                    "Abba Na Shehu",
                    "Ali Kazaure",
                    "Gangare",
                    "Garba Daho",
                    "Ibrahim Katsina",
                    "Jenta Adamu",
                    "Jenta Apata",
                    "Jos Jarawa",
                    "Naraguta A",
                    "Naraguta B",
                    "Sarkin Arab",
                    "Tafawa Balewa",
                    "Tudun Wada Kabong",
                    "Vanderpuye"
                ]
            },
            {
                "name": "Jos South",
                "wards": [
                    "Bukuru",
                    "Du",
                    "Giring",
                    "Gyel A",
                    "Gyel B",
                    "Kuru A",
                    "Kuru B",
                    "Shen",
                    "Turu",
                    "Vwang",
                    "Zawan A",
                    "Zawan B"
                ]
            },
            {
                "name": "Kanam",
                "wards": [
                    "Birbyang",
                    "Dengi",
                    "Dugub",
                    "Gagdib",
                    "Garga",
                    "Gumsher",
                    "Gwamlar",
                    "Jarmai",
                    "Jom",
                    "Kanam",
                    "Kantana",
                    "Kunkyam",
                    "Munbutbo",
                    "Namaran"
                ]
            },
            {
                "name": "Kanke",
                "wards": [
                    "Ampang East",
                    "Amper Chika A",
                    "Amper Chika B",
                    "Amper Seri",
                    "Dawaki",
                    "Garram",
                    "Kabwir Pada",
                    "Kabwir Gyangyang",
                    "Langshi",
                    "Nemel"
                ]
            },
            {
                "name": "Langtang North",
                "wards": [
                    "Funyalang",
                    "Jat",
                    "Keller",
                    "Kuffen",
                    "Kwallak",
                    "Kwande",
                    "Lipchok",
                    "Mban Zamko",
                    "Nyer",
                    "Pajat",
                    "Pil Gani",
                    "Pishe Yashi",
                    "Reak",
                    "Waroh"
                ]
            },
            {
                "name": "Langtang South",
                "wards": [
                    "Dadin Kowa",
                    "Fajul",
                    "Gamakai",
                    "Lashel",
                    "Mabudi",
                    "Magama",
                    "Sabon Gida",
                    "Talgwang",
                    "Timbol",
                    "Turaki"
                ]
            },
            {
                "name": "Mangu",
                "wards": [
                    "Ampang West",
                    "Chanso",
                    "Gindiri 1",
                    "Gindiri 11",
                    "Jannaret",
                    "Jipal Chakfem",
                    "Kadunu",
                    "Kerang",
                    "Kombun",
                    "Langai",
                    "Mangu 1",
                    "Mangu 11",
                    "Mangu Halle",
                    "Mangun",
                    "Pan Yam",
                    "Pushit"
                ]
            },
            {
                "name": "Mikang",
                "wards": [
                    "Baltep",
                    "Garkawa Central",
                    "Garkawa North",
                    "Garkawa North East",
                    "Koenoem A",
                    "Koenoem B",
                    "Lalin",
                    "Piapung A",
                    "Piapung B",
                    "Tunkus"
                ]
            },
            {
                "name": "Pankshin",
                "wards": [
                    "Chip",
                    "Dok Pai",
                    "Fier",
                    "Jiblik",
                    "Kadung",
                    "Kangshu",
                    "Lankang",
                    "Pankshin Chigwong",
                    "Pankshin South Belning",
                    "Pankshin Central",
                    "Tal",
                    "Wokkos"
                ]
            },
            {
                "name": "Qua'an Pan",
                "wards": [
                    "Bwall",
                    "Doemak Goechim",
                    "Doemak Koplong",
                    "Dokan Kasuwa",
                    "Kurgwi",
                    "Kwa",
                    "Kwalla Moeda",
                    "Kwalla Yitla Ar",
                    "Kwande",
                    "Kwang",
                    "Namu"
                ]
            },
            {
                "name": "Riyom",
                "wards": [
                    "Attakar",
                    "Bum",
                    "Danto",
                    "Jol Kwi",
                    "Ra Hoss",
                    "Rim",
                    "Riyom",
                    "Sharubutu",
                    "Sopp",
                    "Ta Hoss"
                ]
            },
            {
                "name": "Shendam",
                "wards": [
                    "Derteng",
                    "Kalong",
                    "Kurungbau A",
                    "Kurungbau B",
                    "Moekat",
                    "Pangshom",
                    "Poeship",
                    "Shendam Central A",
                    "Shendam Central B",
                    "Shimankar",
                    "Yelwa"
                ]
            },
            {
                "name": "Wase",
                "wards": [
                    "Bashar",
                    "Danbiram",
                    "Gudus",
                    "Kadarko",
                    "Kumbong",
                    "Kumbur",
                    "Kuyambana",
                    "Mavo",
                    "Nyalum Kampani",
                    "Saluwe",
                    "Wase Tofa",
                    "Yola Wakat"
                ]
            }
        ]
    },
    {
        "state": "Rivers",
        "lgas": [
            {
                "name": "Abua Odual",
                "wards": [
                    "Abua Iv",
                    "Abua I",
                    "Abua Ii",
                    "Abua Iii",
                    "Agada",
                    "Akani",
                    "Anyu",
                    "Emago Kugbo",
                    "Emelego",
                    "Emughan I",
                    "Emughan Ii",
                    "Okpeden",
                    "Otapha"
                ]
            },
            {
                "name": "Ahoada East",
                "wards": [
                    "Ahoada Iv",
                    "Ahoada I",
                    "Ahoada Ii",
                    "Ahoada Iii",
                    "Akoh I",
                    "Akoh Ii",
                    "Akoh Iii",
                    "Uppata Iii",
                    "Uppata Iv",
                    "Uppata V",
                    "Uppata Vi",
                    "Uppata I",
                    "Uppata Ii"
                ]
            },
            {
                "name": "Ahoada West",
                "wards": [
                    "Ediro I",
                    "Ediro Ii",
                    "Igbuduya I",
                    "Igbuduya Ii",
                    "Igbuduya Iii",
                    "Igbuduya Iv",
                    "Joinkrama",
                    "Okarki",
                    "Ubie I",
                    "Ubie Ii",
                    "Ubie Iii",
                    "Ubie Iv"
                ]
            },
            {
                "name": "Akuku Toru",
                "wards": [
                    "Alise Group",
                    "Briggs I",
                    "Briggs Ii",
                    "Briggs Iii",
                    "Georgewill Ii",
                    "Georgewill Iii",
                    "Georgwill Iii",
                    "Jack I",
                    "Jack Ii",
                    "Jack Iii",
                    "Kula I",
                    "Kula Ii",
                    "Manuel I",
                    "Manuel Ii",
                    "Manuel Iii",
                    "North South Group",
                    "Obonoma"
                ]
            },
            {
                "name": "Andoni",
                "wards": [
                    "Agwut Obolo",
                    "Asarama",
                    "Ataba I",
                    "Ataba Ii",
                    "Ekede",
                    "Ikuru Town",
                    "Ngo Town",
                    "Samanga",
                    "Unyeada I",
                    "Unyeada Ii",
                    "Unyen Gala"
                ]
            },
            {
                "name": "Asari Toru",
                "wards": [
                    "Buguma East I",
                    "Buguma East Ii",
                    "Buguma North East",
                    "Buguma South West",
                    "Buguma East West",
                    "Buguma North West Ii",
                    "Buguma North West I",
                    "Buguma South",
                    "Buguma South East",
                    "Buguma West",
                    "Isia Group I",
                    "Isia Group Ii",
                    "West Cental Group"
                ]
            },
            {
                "name": "Bonny",
                "wards": [
                    "Ward I Oro Igwe",
                    "Ward Ii Court Ada Allison",
                    "Ward Iii Dan Jumbo Beresiri",
                    "Ward Iii Orosiriri",
                    "Ward Iv New Layout",
                    "Ward Ix Nanabie",
                    "Ward V Finima",
                    "Ward Vi Abalamabie",
                    "Ward Vii Dema Abbey",
                    "Ward X Oloma Ayaminima",
                    "Ward Xi Peterside",
                    "Ward Xii Kalaibiama"
                ]
            },
            {
                "name": "Degema",
                "wards": [
                    "Bakana Vi",
                    "Bakana I",
                    "Bakana Ii",
                    "Bakana Iii",
                    "Bakana Iv",
                    "Bakana V",
                    "Bille",
                    "Bukuma",
                    "Degema I",
                    "Degema Ii",
                    "Degema Iii",
                    "Ke Old Bakana",
                    "Obuama",
                    "Tomble I",
                    "Tomble Ii",
                    "Tomble Iii",
                    "Tomble Iv"
                ]
            },
            {
                "name": "Eleme",
                "wards": [
                    "Agbonchia",
                    "Akpajo",
                    "Alesa",
                    "Aleto",
                    "Alode",
                    "Ebubu",
                    "Ekporo",
                    "Eteo",
                    "Ogale",
                    "Onne"
                ]
            },
            {
                "name": "Emohua",
                "wards": [
                    "Egbeda",
                    "Elele Alimini",
                    "Emohua Ii",
                    "Emohua I",
                    "Ibaa",
                    "Obelle",
                    "Odegu I",
                    "Odegu Ii",
                    "Ogbakiri I",
                    "Ogbakiri Ii",
                    "Omudioga Akpadu",
                    "Rumuekpe",
                    "Rundele",
                    "Ubimini"
                ]
            },
            {
                "name": "Etche",
                "wards": [
                    "Afara",
                    "Akpoku Umuoye",
                    "Akwa Odogwa",
                    "Egbu",
                    "Egwi Opiro",
                    "Igbo I",
                    "Igbo Ii",
                    "Igbo Iii",
                    "Igbodo",
                    "Mba",
                    "Ndashi",
                    "Nihi",
                    "Obibi Akwukabi",
                    "Obite",
                    "Odufor",
                    "Okehi",
                    "Owu",
                    "Ozuzu",
                    "Ulakwo"
                ]
            },
            {
                "name": "Gokana",
                "wards": [
                    "B Dere",
                    "Bera",
                    "Biara I",
                    "Biara Ii",
                    "Bodo I",
                    "Bodo Ii",
                    "Bodo Iii",
                    "Bomu I",
                    "Bomu Ii",
                    "Derken Deeyor Nweribiara",
                    "K Dere I",
                    "K Dere Ii",
                    "Kpor Lewe Gbe",
                    "Mogho",
                    "Nweol Gioko Barako",
                    "Yeghe I",
                    "Yeghe Ii"
                ]
            },
            {
                "name": "Ikwerre",
                "wards": [
                    "Aluu",
                    "Apani",
                    "Elele I",
                    "Elele Ii",
                    "Igwuruta",
                    "Isiokpo I",
                    "Isiokpo Ii",
                    "Omademe Ipo",
                    "Omagwa",
                    "Omerelu",
                    "Ozuaha",
                    "Ubima",
                    "Umuanwa"
                ]
            },
            {
                "name": "Khana",
                "wards": [
                    "Baen Kpean Duburo",
                    "Bane",
                    "Bargha",
                    "Beeri",
                    "Bori",
                    "Boue",
                    "Gwara Kaa Eeken",
                    "Kaani",
                    "Kono Kwawa",
                    "Llueku Nyokuru",
                    "Lorre Luebe Kpaa",
                    "Okwali",
                    "Opuoko Kalaoko",
                    "Sii Betem Kbaabbe",
                    "Sogho",
                    "Taabaa",
                    "Uegwere",
                    "Wiiyaa Kara",
                    "Zaakpori"
                ]
            },
            {
                "name": "Obio Akpor",
                "wards": [
                    "Choba",
                    "Elelenwo 3b",
                    "Oro Igwe",
                    "Ozuoba Ogbogoro",
                    "Rukpoku",
                    "Rumueme 7a",
                    "Rumueme 7b",
                    "Rumueme 7c",
                    "Rumuigbo 8a",
                    "Rumukwuta 8b",
                    "Rumuodara",
                    "Rumuodomaya 3a",
                    "Rumuokoro",
                    "Rumuokwu 2b",
                    "Rumuolumeni",
                    "Rumuomasi",
                    "Worji"
                ]
            },
            {
                "name": "Ogba Egbema Ndoni",
                "wards": [
                    "Egbema I",
                    "Egbema Ii",
                    "Egi I",
                    "Egi Ii",
                    "Egi Iii",
                    "Egi Iv",
                    "Igburu",
                    "Ndoni I",
                    "Ndoni Ii",
                    "Ndoni Iii",
                    "Omoku Town I",
                    "Omoku Town Ii",
                    "Omoku Town Iv Usomini",
                    "Omoku Town V",
                    "Omuku Town Obieti",
                    "Usomini I North",
                    "Usomini Ii South"
                ]
            },
            {
                "name": "Ogu Bolo",
                "wards": [
                    "Bolo Iv",
                    "Bolo I",
                    "Bolo Ii",
                    "Bolo Iii",
                    "Ele",
                    "Ogu I",
                    "Ogu Ii",
                    "Ogu Iii",
                    "Ogu Iv",
                    "Ogu V",
                    "Ogu Vi",
                    "Wakama"
                ]
            },
            {
                "name": "Okrika",
                "wards": [
                    "Kalio",
                    "Ogan",
                    "Ogoloma I",
                    "Ogoloma Ii",
                    "Ogoloma Iii",
                    "Okrika I",
                    "Okrika Ii",
                    "Okrika Iii",
                    "Okrika Iv",
                    "Okrika V",
                    "Okrika Vi",
                    "Okrika Vii"
                ]
            },
            {
                "name": "Omuma",
                "wards": [
                    "Ariraniiri Owu Ahia Community",
                    "Eberi Dikeomuuo Community",
                    "Obibi Ajuloke Community",
                    "Obiohia Community",
                    "Ofeh Community",
                    "Ohimogho Community",
                    "Oyoro",
                    "Umuajuloke Community",
                    "Umuogba I Community",
                    "Umuogba Ii Community"
                ]
            },
            {
                "name": "Opobo Nkoro",
                "wards": [
                    "Dappaye Ama Kiri I",
                    "Dappaye Ama Kiri Ii",
                    "Diepiri",
                    "Jaja",
                    "Kalaibiama I",
                    "Kalaibiama Ii",
                    "Nkoro I",
                    "Nkoro Ii",
                    "Nkoro Iii",
                    "Queens Town Kalama",
                    "Ukonu"
                ]
            },
            {
                "name": "Oyigbo",
                "wards": [
                    "Asa",
                    "Azuogu",
                    "Komkom",
                    "Obeakpu",
                    "Obete",
                    "Ogberu",
                    "Okoloma",
                    "Oyigba West",
                    "Oyigbo Central",
                    "Umuagbai"
                ]
            },
            {
                "name": "Port Harcourt",
                "wards": [
                    "Abuloma Amadi Ama",
                    "Diobu",
                    "Elekahia",
                    "Mgbundukwu One",
                    "Mgbundukwu Two",
                    "Nkpolu Oroworukwo",
                    "Nkpolu Oroworukwo Two",
                    "Ochiri Rumukalagbor",
                    "Ogbunabali",
                    "Oroabali",
                    "Orogbum",
                    "Oromineke Ezimgbu",
                    "Oroworukwo",
                    "Port Harcourt Township",
                    "Port Harcourt Township Vi",
                    "Port Harcourt Vii",
                    "Rumuobiekwe Ward",
                    "Rumuwoji One",
                    "Rumuwoji Three",
                    "Rumuwoji Two"
                ]
            },
            {
                "name": "Tai",
                "wards": [
                    "Ward I Botem Gbeneo",
                    "Ward Ii Kpite",
                    "Ward Iii Korokoro",
                    "Ward Iv Koroma Horo",
                    "Ward Ix Nanabie",
                    "Ward V Kira Borobara",
                    "Ward Vi Gio Kporghor Gbam",
                    "Ward Vii Nonwa",
                    "Ward Viii Barryira Bara Ale Sime",
                    "Ward X Ban Ogoi"
                ]
            }
        ]
    },
    {
        "state": "Sokoto",
        "lgas": [
            {
                "name": "Binji",
                "wards": [
                    "Binji",
                    "Bunkari",
                    "Gawazzai",
                    "Inname",
                    "Jammali",
                    "Maikulki",
                    "Samama",
                    "Soro Gabas",
                    "Soro Yamma",
                    "T Kose"
                ]
            },
            {
                "name": "Bodinga",
                "wards": [
                    "Badau Darhela",
                    "Bagarawa",
                    "Bangi Dabaga",
                    "Bodinga Tauma",
                    "Danchadi",
                    "Dingyadi Badawa",
                    "Kwacciyar Lalle",
                    "Mazan Gari Jirga Miyo",
                    "Sifawa Lukuyawa",
                    "Takatuku Madorawa",
                    "Tulluwa Kulafasa"
                ]
            },
            {
                "name": "Dange Shuni",
                "wards": [
                    "Bodai Jurga",
                    "Dange",
                    "Fajaldu",
                    "Giere Gajara",
                    "Rikina",
                    "Rudu Amanawa",
                    "Ruggar Gidado",
                    "Shuni",
                    "Tsafanade",
                    "Tuntube Tsehe",
                    "Wababe Salau"
                ]
            },
            {
                "name": "Gada",
                "wards": [
                    "Dukamaje Ilah",
                    "Gada",
                    "Gilbadi",
                    "Kadadin Buda Kaddi",
                    "Kadassaka",
                    "Kaddi",
                    "Kaffe",
                    "Kiri",
                    "Kwarma",
                    "Kyadawa Holai",
                    "Tsitse"
                ]
            },
            {
                "name": "Goronyo",
                "wards": [
                    "Birjingo",
                    "Boyekai",
                    "Giyawa",
                    "Goronyo",
                    "Kagara",
                    "Kojiyo",
                    "Kwakwazo",
                    "Rimawa",
                    "S Gari Dole Dan Tasakko",
                    "Shinaka",
                    "Takakume"
                ]
            },
            {
                "name": "Gudu",
                "wards": [
                    "Awulkiti",
                    "Bachaka",
                    "Balle",
                    "Chilas Makuya",
                    "Gwazange Boto",
                    "Karfen Chana",
                    "Karfen Sarki",
                    "Kurdula",
                    "Maraken Bori",
                    "Tulun Doya"
                ]
            },
            {
                "name": "Gwadabawa",
                "wards": [
                    "Asara Arewa",
                    "Asara Kudu",
                    "Atakwanyo",
                    "Chimmola Kudu",
                    "Chimola Arewa",
                    "Gidan Kaya",
                    "Gigane",
                    "Gwadabawa",
                    "Huchi",
                    "Mammande",
                    "Salame"
                ]
            },
            {
                "name": "Illela",
                "wards": [
                    "Araba",
                    "Damba",
                    "Darna Sabon Gari",
                    "Darne Tsolawo",
                    "G Hamma",
                    "G Katta",
                    "Garu",
                    "Illela",
                    "Kalmalo",
                    "R Gati",
                    "Tozai"
                ]
            },
            {
                "name": "Isa",
                "wards": [
                    "Bargaja",
                    "Gebe A",
                    "Gebe B",
                    "Isa North",
                    "Isa South",
                    "Tidibale",
                    "Tozai",
                    "Tsabren Sarkin Darai",
                    "Turba",
                    "Yanfako"
                ]
            },
            {
                "name": "Kebbe",
                "wards": [
                    "Fakku",
                    "Girkau",
                    "Kebbe East",
                    "Kebbe West",
                    "Kuchi",
                    "Margai A",
                    "Margai B",
                    "Nasagudu",
                    "Sangi",
                    "Ungushi"
                ]
            },
            {
                "name": "Kware",
                "wards": [
                    "Bankanu R Kade",
                    "Basansan",
                    "Durbawa",
                    "G Rugga",
                    "G Modibbo G Akwara",
                    "H Ali Marabawa",
                    "Kabanga",
                    "Kware",
                    "S Birni G Karma",
                    "Tsaki Walake E",
                    "Tunga Mallamawa"
                ]
            },
            {
                "name": "Rabah",
                "wards": [
                    "Gandi A",
                    "Gandi B",
                    "Gawakuke",
                    "Gwaddodi Gidan Bu Wai",
                    "Kurya",
                    "Rabah",
                    "Rara",
                    "Riji Maikujera",
                    "Tsamiya",
                    "Tursa",
                    "Yar Tsakuwa"
                ]
            },
            {
                "name": "Sabon Birni",
                "wards": [
                    "Gangara",
                    "Gatawa",
                    "Kalgo",
                    "Kuruwa",
                    "Lajinge",
                    "Makuwana",
                    "S Birni East",
                    "S Birni West",
                    "Tara",
                    "Tsamaye",
                    "Unguwar Lalle"
                ]
            },
            {
                "name": "Shagari",
                "wards": [
                    "Dandin Mahe",
                    "Gangam",
                    "Horo Birni",
                    "Jaredi",
                    "Kajiji",
                    "Kambama",
                    "Lambara",
                    "Mandera",
                    "Sanyinnawal",
                    "Shagari"
                ]
            },
            {
                "name": "Silame",
                "wards": [
                    "Gande East",
                    "Gande West",
                    "Katami North",
                    "Katami South",
                    "Kubodu North",
                    "Kubodu South",
                    "Labani",
                    "Marafa East",
                    "Marafa West",
                    "Silame"
                ]
            },
            {
                "name": "Sokoto North",
                "wards": [
                    "Magajin Gari A",
                    "Magajin Gari B",
                    "Magajin Rafi A",
                    "Magajin Rafi B",
                    "S Adar Gandu",
                    "S Adar G Igwai",
                    "S Musulmi A",
                    "S Musulmi B",
                    "Waziri A",
                    "Waziri B",
                    "Waziri C"
                ]
            },
            {
                "name": "Sokoto South",
                "wards": [
                    "Gagi A",
                    "Gagi B",
                    "Gagi C",
                    "R Dorowa A",
                    "R Dorowa B",
                    "S A K Atiku",
                    "S Zamfara A",
                    "S Zamfara B",
                    "Sarkin Adar Kwanni",
                    "T Wada A",
                    "T Wada B"
                ]
            },
            {
                "name": "Tambuwal",
                "wards": [
                    "Bagida Lukkingo",
                    "Bakaya Sabon Birni",
                    "Barkeji Nabaguda",
                    "Bashire Maikada",
                    "Dogondaji Sala",
                    "Faga Alasan",
                    "Jabo Kagara",
                    "Romon Sarki",
                    "Saida Goshe",
                    "Sanyinna",
                    "Tambuwal Shinfiri"
                ]
            },
            {
                "name": "Tangaza",
                "wards": [
                    "Gidan Madi",
                    "Kalanjeni",
                    "Kwacce Huru",
                    "Magonho",
                    "Raka",
                    "Ruwa Wuri",
                    "Sakkwai",
                    "Salewa",
                    "Sutti",
                    "Tangaza"
                ]
            },
            {
                "name": "Tureta",
                "wards": [
                    "Barayar Giwa",
                    "Duma",
                    "Fura Girke",
                    "Gidan Kare Bimasa",
                    "Kuruwa",
                    "Kwarare",
                    "Lambar Tureta",
                    "Lofa",
                    "Tsamiya",
                    "Tureta Gari"
                ]
            },
            {
                "name": "Wamakko",
                "wards": [
                    "Arkilla",
                    "Bado Kasarawa",
                    "Dundaye Gumburawa",
                    "G Bubu G Yaro",
                    "G Hamidu G Kaya",
                    "Gumbi Wajake",
                    "Gwamatse",
                    "K Kimba Gedewa",
                    "Kalambaina Girabshi",
                    "Kammata",
                    "Wamakko"
                ]
            },
            {
                "name": "Wurno",
                "wards": [
                    "Achida",
                    "Alkammu Gyelgyel",
                    "Chacho Marnona",
                    "Dankemu",
                    "Dimbiso",
                    "Dinawa",
                    "Kwargaba",
                    "Kwasare Sisawa",
                    "Lahodu G Bango",
                    "Magarya",
                    "Marafa"
                ]
            },
            {
                "name": "Yabo",
                "wards": [
                    "Bakale",
                    "Bingaje",
                    "Binji",
                    "Birniruwa",
                    "Fakka",
                    "Kilgori",
                    "Ruggar Iya",
                    "Torankawa",
                    "Yabo A",
                    "Yabo B"
                ]
            }
        ]
    },
    {
        "state": "Taraba",
        "lgas": [
            {
                "name": "Ardo Kola",
                "wards": [
                    "Alim Gora",
                    "Ardo Kola",
                    "Iware",
                    "Jauro Yinu",
                    "Lamido Borno",
                    "Mayo Ranewo",
                    "Sarkin Dutse",
                    "Sunkani",
                    "Tau",
                    "Zongon Kombi"
                ]
            },
            {
                "name": "Bali",
                "wards": [
                    "Badakoshi",
                    "Bali A",
                    "Bali B",
                    "Gang Dole",
                    "Gang Mata",
                    "Ganglari",
                    "Gangtiba",
                    "Kaigama",
                    "Maihula",
                    "Suntai",
                    "Takalafiya"
                ]
            },
            {
                "name": "Donga",
                "wards": [
                    "Akate",
                    "Asibiti",
                    "Bikadarko",
                    "Fada",
                    "Gayama",
                    "Gindin Dutse",
                    "Gyatta Aure",
                    "Mararraba",
                    "Nyita",
                    "Suntai"
                ]
            },
            {
                "name": "Gashaka",
                "wards": [
                    "Galumjina",
                    "Gangumi",
                    "Garbabi",
                    "Gashaka",
                    "Gayam",
                    "Jamtari",
                    "Mai Idanu",
                    "Mayo Selbe",
                    "Serti A",
                    "Serti B"
                ]
            },
            {
                "name": "Gassol",
                "wards": [
                    "Gassol",
                    "Gunduma",
                    "Mutum Biyu I",
                    "Mutum Biyu Ii",
                    "Nam Nai",
                    "Sabon Gida",
                    "Sarkin Shira",
                    "Sendirde",
                    "Tutare",
                    "Wurojam",
                    "Wuryo",
                    "Yarima"
                ]
            },
            {
                "name": "Ibi",
                "wards": [
                    "Dampar I",
                    "Dampar Ii",
                    "Dampar Iii",
                    "Ibi Nwonyo I",
                    "Ibi Nwonyo Ii",
                    "Ibi Rimi Uku I",
                    "Ibi Rimi Uku Ii",
                    "Sarkin Kudu I",
                    "Sarkin Kudu Ii",
                    "Sarkin Kudu Iii"
                ]
            },
            {
                "name": "Jalingo",
                "wards": [
                    "Abbare Yelwa",
                    "Barade",
                    "Kachalla Sembe",
                    "Kona",
                    "Majidadi",
                    "Mayo Goi",
                    "Sarkin Dawaki",
                    "Sintali",
                    "Turaki A",
                    "Turaki B"
                ]
            },
            {
                "name": "Karim Lamido",
                "wards": [
                    "Amar",
                    "Andamin",
                    "Bachama",
                    "Bikwin",
                    "Darofai",
                    "Didango",
                    "Jen Ardido",
                    "Jen Kaigama",
                    "Karim A",
                    "Karim B",
                    "Kwanchi"
                ]
            },
            {
                "name": "Kurmi",
                "wards": [
                    "Abong",
                    "Akwento Boko",
                    "Ashuku Eneme",
                    "Baissa",
                    "Bente Galea",
                    "Bissaula",
                    "Didan",
                    "Ndaforo Geanda",
                    "Njuwande",
                    "Nyido Tosso"
                ]
            },
            {
                "name": "Lau",
                "wards": [
                    "Abbare I",
                    "Abbere Ii",
                    "Donadda",
                    "Garin Dogo",
                    "Garin Magaji",
                    "Jimlari",
                    "Kunini",
                    "Lau I",
                    "Lau Ii",
                    "Mayo Lope"
                ]
            },
            {
                "name": "Sardauna",
                "wards": [
                    "Gembu A",
                    "Gembu B",
                    "Kabri",
                    "Kakara",
                    "Magu",
                    "Mayo Ndaga",
                    "Mbamnga",
                    "Ndum Yaji",
                    "Nguroje",
                    "Titong",
                    "Warwar"
                ]
            },
            {
                "name": "Takum",
                "wards": [
                    "Bete",
                    "Bikashibila",
                    "Chanchanji",
                    "Dutse",
                    "Fete",
                    "Gahweton",
                    "Manya",
                    "Rogo",
                    "Shibong",
                    "Tikari",
                    "Yukuben"
                ]
            },
            {
                "name": "Ussa",
                "wards": [
                    "Bika",
                    "Fikyu",
                    "Jenuwa",
                    "Kpambo",
                    "Kpambo Puri",
                    "Kwambai",
                    "Kwesati",
                    "Lissam I",
                    "Lissam Ii",
                    "Lumbu",
                    "Rufu"
                ]
            },
            {
                "name": "Wukari",
                "wards": [
                    "Akwana",
                    "Avyi",
                    "Bantaje",
                    "Chonku",
                    "Hospital",
                    "Jibu",
                    "Kente",
                    "Puje",
                    "Rafin Kada",
                    "Tsokundi"
                ]
            },
            {
                "name": "Yorro",
                "wards": [
                    "Bikassa I",
                    "Bikassa Ii",
                    "Nyaja I",
                    "Nyaja Ii",
                    "Pantisawa I",
                    "Pantisawa Ii",
                    "Pupule I",
                    "Pupule Ii",
                    "Pupule Iii",
                    "Sumbu I",
                    "Sumbu Ii"
                ]
            },
            {
                "name": "Zing",
                "wards": [
                    "Bitako",
                    "Bubong",
                    "Dinding",
                    "Lamma",
                    "Monkin A",
                    "Monkin B",
                    "Yakoko",
                    "Zing Ai",
                    "Zing Aii",
                    "Zing B"
                ]
            }
        ]
    },
    {
        "state": "Yobe",
        "lgas": [
            {
                "name": "Bade",
                "wards": [
                    "Dagona",
                    "Gwio Kura",
                    "Katuzu",
                    "Lawan Audu Lawan Al Wali",
                    "Lawan Fannami",
                    "Lawan Musa",
                    "Sarkin Hausawa",
                    "Tagali Sugum",
                    "Usur Dawayo",
                    "Zangon Musa Zango Umaru"
                ]
            },
            {
                "name": "Bursari",
                "wards": [
                    "Bayamari",
                    "Damnawa Juluri",
                    "Danani",
                    "Dapchi",
                    "Garun Dole Garin Alkali",
                    "Guba",
                    "Guji Metalari",
                    "Kaliyari",
                    "Kurnawa",
                    "Masaba"
                ]
            },
            {
                "name": "Damaturu",
                "wards": [
                    "Bindigari Fawari",
                    "Damakasu",
                    "Damaturu Central",
                    "Gabir Maduri",
                    "Kalallawa Gabai",
                    "Kukareta Warsala",
                    "Maisandari Waziri Ibrahim Estate",
                    "Murfa Kalam",
                    "Nayinawa",
                    "Njiwaji Gwange",
                    "Sasawa Kabaru"
                ]
            },
            {
                "name": "Fika",
                "wards": [
                    "Daya Chana",
                    "Fika Anze",
                    "Gadaka Shembire",
                    "Gudi Dozi Godo Woli",
                    "Janga Boza Fa Sawa T Nanai",
                    "Mubi Fusami Garin Wayo",
                    "Ngalda Dumbulwa",
                    "Shoye Garin Aba",
                    "Turmi Maluri",
                    "Zangaya Mazawaun"
                ]
            },
            {
                "name": "Fune",
                "wards": [
                    "Abakire Ngenlshengele Shamka",
                    "Alagarno",
                    "Borno Kiji Ngarho Bebbende",
                    "Damagum Town",
                    "Daura Bulanyiwa Dubbul Bauwa",
                    "Dogon Kuka Gishiwari Gununu",
                    "Fune Ngelzarma Milbiyar Lawan Kalam",
                    "Gaba Tasha Aigada Dumbulwa",
                    "Gudugurka Marmar I",
                    "Jajere Banellewa Babbare",
                    "Kayeri",
                    "Kollere Kafaje",
                    "Mashio"
                ]
            },
            {
                "name": "Geidam",
                "wards": [
                    "Asheikri",
                    "Balle Gallaba Meleri",
                    "Damakarwa Kusur",
                    "Dejina Fukurti",
                    "Futchimiram",
                    "Gumsa",
                    "Hausari",
                    "Kawuri",
                    "Ma Anna Dagambi",
                    "Shame Kura Dilawa",
                    "Zurgu Ngilewa Borko"
                ]
            },
            {
                "name": "Gujba",
                "wards": [
                    "Bunigari Lawanti",
                    "Buniyadi North South",
                    "Dadingel",
                    "Goniri",
                    "Gotala Gotumba",
                    "Gujba",
                    "Mallam Dunari",
                    "Mutai",
                    "Ngurbuwa",
                    "Wagir"
                ]
            },
            {
                "name": "Gulani",
                "wards": [
                    "Bara",
                    "Borno Kiji Tetteba",
                    "Bularafa",
                    "Bumsa",
                    "Dokshi",
                    "Gabai",
                    "Gagure",
                    "Garin Tuwo",
                    "Gulani",
                    "Kushimaga",
                    "Njibulwa",
                    "Ruhu"
                ]
            },
            {
                "name": "Jakusko",
                "wards": [
                    "Buduwa Saminaka",
                    "Dumbari",
                    "Gidgid Bayam",
                    "Gorgoram",
                    "Jaba",
                    "Jakusko",
                    "Jawur Katamma",
                    "Lafiya Loi Loi",
                    "Muguram",
                    "Zabudum Dachia"
                ]
            },
            {
                "name": "Karasuwa",
                "wards": [
                    "Bukarti",
                    "Fajiganari",
                    "Garin Gawo",
                    "Gasma",
                    "Jaji Maji",
                    "Karasuwa Galu",
                    "Karauswa Garu Guna",
                    "Wachakal",
                    "Waro",
                    "Yajiri"
                ]
            },
            {
                "name": "Machina",
                "wards": [
                    "Bogo",
                    "Damai",
                    "Dole",
                    "Falimaram",
                    "Kom Komma",
                    "Kuka Yasku",
                    "Lamisu",
                    "Machina Kwari",
                    "Maskandare",
                    "Taganama"
                ]
            },
            {
                "name": "Nangere",
                "wards": [
                    "Chilariye",
                    "Dadiso Chukuriwa",
                    "Dawasa G Baba",
                    "Dazigau",
                    "Degubi",
                    "Kukuri Chiromari",
                    "Langawa Darin",
                    "Nangere",
                    "Pakarau Kare Kare Pakarau Fulani",
                    "Tikau",
                    "Watinani"
                ]
            },
            {
                "name": "Nguru",
                "wards": [
                    "Bulabulin",
                    "Bulanguwa",
                    "Dabule",
                    "Dumsai Dogon Kuka",
                    "Garbi Bambori",
                    "Hausari",
                    "Kanuri",
                    "Maja Kura",
                    "Mirba Kabir Mirba Sagir",
                    "Nglaiwa"
                ]
            },
            {
                "name": "Potiskum",
                "wards": [
                    "Bare Bare Bauya Lalai Dumbulwa",
                    "Bolewa A",
                    "Bolewa B",
                    "Danchuwa Bula",
                    "Dogo Nini",
                    "Dogo Tebo",
                    "Hausawa",
                    "Mamudo",
                    "Ngojin Alaraba",
                    "Yerimaram Garin Daye Badejo Nahuta"
                ]
            },
            {
                "name": "Tarmuwa",
                "wards": [
                    "Babangida",
                    "Barkami Bulturi",
                    "Biriri Churokusko",
                    "Jumbam",
                    "Koka Sungul",
                    "Koriyel",
                    "Lantaiwa",
                    "Mafa",
                    "Mandadawa",
                    "Shekau"
                ]
            },
            {
                "name": "Yunusari",
                "wards": [
                    "Bultuwa Mar Yaro",
                    "Daratoshia",
                    "Degaltura Ngamzai",
                    "Dekwa",
                    "Dilala Kalgi",
                    "Mairari",
                    "Mozogun Kujari",
                    "Ngirabo",
                    "Wadi Kafiya",
                    "Zajibiri Dumbal"
                ]
            },
            {
                "name": "Yusufari",
                "wards": [
                    "Alanjirori",
                    "Gumshi",
                    "Guya",
                    "Jebuwa",
                    "Kajimaram Sumbar",
                    "Kaska Tulotulowa",
                    "Kumagannam",
                    "Mai Malari",
                    "Mayori",
                    "Yusufari"
                ]
            }
        ]
    },
    {
        "state": "Zamfara",
        "lgas": [
            {
                "name": "Anka",
                "wards": [
                    "Bagega",
                    "Barayar Zaki",
                    "Dan Galadima",
                    "Galadima",
                    "Magaji",
                    "Matseri",
                    "Sabon Birini",
                    "Waramu",
                    "Wuya",
                    "Yar Sabaya"
                ]
            },
            {
                "name": "Bakura",
                "wards": [
                    "Bakura",
                    "Birnin Tudu",
                    "Dakko",
                    "Damri",
                    "Dan Manau",
                    "Dankadu",
                    "Nasarawa",
                    "Rini",
                    "Yar Geda",
                    "Yar Kufoji"
                ]
            },
            {
                "name": "Birnin Magaji",
                "wards": [
                    "Birnin Magaji",
                    "Danfami Sabon Birini",
                    "Gora",
                    "Gusami Gari",
                    "Gusami Hayi",
                    "Kiyawa",
                    "Modomawa East",
                    "Modomawa West",
                    "Nasarawa Godal East",
                    "Nasarawa Godal West"
                ]
            },
            {
                "name": "Bukkuyum",
                "wards": [
                    "Adabka",
                    "Bukkuyum",
                    "Gwashi",
                    "Kyaram",
                    "Masama",
                    "Nasarawa",
                    "Ruwan Jema",
                    "Yashi",
                    "Zarummai",
                    "Zauma"
                ]
            },
            {
                "name": "Bungudu",
                "wards": [
                    "Bingi North",
                    "Bingi South",
                    "Bungudu",
                    "Furfuri Kwai Kwai",
                    "Gada Karakkai",
                    "Kwatarkwashi",
                    "Nahuce",
                    "Rawayya Bela",
                    "Samawa",
                    "Sankalawa",
                    "Tofa"
                ]
            },
            {
                "name": "Gummi",
                "wards": [
                    "Bardoki",
                    "Birnin Magaji",
                    "Birnin Tudu",
                    "Falale",
                    "Felfeldu Gamo",
                    "Gayari",
                    "Gyalange",
                    "Illelar Awal",
                    "Magajin Gari",
                    "Shiyar Rafi",
                    "Ubandawaki"
                ]
            },
            {
                "name": "Gusau",
                "wards": [
                    "Galadima",
                    "Mada",
                    "Madawaki",
                    "Magami",
                    "Mayana",
                    "Rijiya",
                    "Ruwan Bore",
                    "Sabon Gari",
                    "Tudun Wada",
                    "Wanke",
                    "Wonaka"
                ]
            },
            {
                "name": "Kaura Namoda",
                "wards": [
                    "Banga",
                    "Dan Isa",
                    "Gabake",
                    "Galadima Dan Galadima",
                    "Kagara",
                    "Kungurki",
                    "Kurya Madaro",
                    "Kyam Barawa",
                    "S Baura S Mafara",
                    "Sakajiki",
                    "Yankaba"
                ]
            },
            {
                "name": "Maradun",
                "wards": [
                    "Birnin Kaya Dosara",
                    "Damaga Damagiwa",
                    "Faru Magami",
                    "Gidan Goga",
                    "Gora",
                    "Janbako",
                    "Kaya",
                    "Maradun North",
                    "Maradun South",
                    "Tsibiri"
                ]
            },
            {
                "name": "Maru",
                "wards": [
                    "Bindin",
                    "Bingi",
                    "Dan Gulbi",
                    "Dan Kurmi",
                    "Dan Sadau",
                    "Kanoma",
                    "Kuyan Bana",
                    "Maru",
                    "Mayanchi",
                    "Ruwan Dorawa"
                ]
            },
            {
                "name": "Shinkafi",
                "wards": [
                    "Badarawa",
                    "Chiki",
                    "Galadi",
                    "Jangeru",
                    "Katuru",
                    "Kurya",
                    "Kware",
                    "Shanawa",
                    "Shinkafi North",
                    "Shinkafi South"
                ]
            },
            {
                "name": "Talata Mafara",
                "wards": [
                    "Garbadu",
                    "Gwaram",
                    "Jangebe",
                    "Kagara",
                    "Morai",
                    "Ruwan Bore",
                    "Ruwan Gizo",
                    "Sauna R Gora",
                    "Shiyar Galadima",
                    "Shiyar Kayaye Matusgi",
                    "Take Tsaba Makera"
                ]
            },
            {
                "name": "Tsafe",
                "wards": [
                    "Bilbis",
                    "Chediya",
                    "Danjibga Kunchin Kalgo",
                    "Dauki",
                    "Keta Kizara",
                    "Kwaren Ganuwa",
                    "Tsafe",
                    "Yan Kuzo B",
                    "Yan Waren Daji",
                    "Yandoton Daji",
                    "Yankuzo A"
                ]
            },
            {
                "name": "Zurmi",
                "wards": [
                    "Boko",
                    "Dauran Birnin Tsaba",
                    "Dole",
                    "Galadima Yanruwa",
                    "Kanwa",
                    "Kuturu Mayasa",
                    "Kwashbawa",
                    "Mashem",
                    "Rukudawa",
                    "Yan Buki Dutsi",
                    "Zurmi"
                ]
            }
        ]
    }
];
