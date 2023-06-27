// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    _id: string;
    brand: string;
    title: string;
    description: string;
    price: number;
    image: string;
    category: string;
    ratings: number;
}[]

const productData=
[
    {
      _id: "1",
      brand: "One Plus",
      title: "OnePlus 10R 5G (Forest Green, 8GB RAM, 128GB Storage, 80W SuperVOOC)",
      description: "Camera: 50MP Main Camera with Sony IMX766 and 2MP Macro Camera with Dual LED Flash; 16MP Front (Selfie) Camera with Sony IMX471 Camera Features: Nightscape2.0, Super Macro, UltraShot HDR, Smart Scene Recognition, Portrait mode, Pro mode, Panorama, Tilt-shift mode, Focus Peaking, Filters, Video Nightscape, Video HDR, Video Portrait Timelapse, Hyperlapse Mode Display: 6.7 Inches; 120 Hz IRIS Display; Resolution: 2400 X 1080 pixels 394 ppi; Aspect Ratio: 20:9 Display Features: Hyper Touch Mode, Reading Mode, Night Mode, Eye Comfort Mode, Auto brightness Operating System: OxygenOS based on Android 12, Processor: MTK D8100 Max Battery & Charging: 5000 mAh with 80W SuperVOOC. In-Display Fingerprint Sensor Special Features: Hyperboost gaming engine",
      price: 32999,
      image: "https://m.media-amazon.com/images/I/716uVx3Wr5L._AC_UY218_.jpg",
      category: "phone electronics",
      ratings: 4.6
    },
    {
      _id: "2",
      brand: "One Plus",
      title: "OnePlus Nord 2T 5G (Jade Fog, 8GB RAM, 128GB Storage)",
      description: "Camera: 50MP Main Camera with Sony IMX766 and OIS, 8MP Ultrawide Camera with 120 degree FOV and 2MP mono lens with Dual LED Flash; 32MP Front (Selfie) Camera with Sony IMX615 Camera Features: AI Scene Enhancement, AI Highlight Video, Slow-motion captures, Dual-view Video, HDR, Nightscape, Portrait mode, Pano, Retouching and exciting filters Display: 6.43 Inches; 90 Hz AMOLED Display with Corning Gorilla Glass 5; Resolution: 2400 X 1080 pixels; HDR 10+ Certified Display Features: Ambient Display, AI colour enhancement and Dark mode Operating System: OxygenOS based on Android 12. Processor: Mediatek Dimensity 1300 Battery & Charging: 4500 mAh with 80W SuperVOOC. In-Display Fingerprint Sensor Alexa Hands-Free capable: Download the Alexa app to use Alexa hands-free. Play music, make calls, hear news, open apps, navigate, and more, all using just your voice, while on-the-go Form Factor: Smartphone electronics; Cellular Technology: 5g, 4g Lte",
      price: 28999,
      image: "https://m.media-amazon.com/images/I/61ahn9N38zL._AC_UY218_.jpg",
      category: "phone electronics",
      ratings: 4.2
    },
    {
      _id: "3",
      brand: "Realme",
      title: "realme narzo 50i (Carbon Black, 4GB RAM+64GB Storage) - with No Cost EMI/Additional Exchange Offers",
      description: "4 GB RAM | 64 GB ROM | Expandable Upto 256 GB 16.51 cm (6.5 inch) HD+ Display | 88.7% Screen-to-body Ratio | LCD Multi-touch Display | 1600-by-720-pixel Resolution | 400 nits Max Brightness (Typical) 8MP Primary Camera (f/2.0 Aperture,4P Lens,4x, Digital Zoom Panoramic View, Portrait Mode, Expert, Timelapse, HDR, Beauty, Filter | 5MP AI Selfie Camera (f/2.2 aperture, portrait Mode, AI Beauty, HDR, Face-Recognition, Filter) 5000 mAh Massive Battery | Supports Ultra Saving Mode | Powerful Octa-core Processor | CPU: Octa-core CPU, up to 1.6GHz | GPU: IMG 8322",
      price: 8999,
      image: "https://m.media-amazon.com/images/I/81HJ4pkOsiL._AC_UY218_.jpg",
      category: "phone electronics",
      ratings: 3.4
    },
    {
      _id: "4",
      brand: "Apple",
      title: "Apple iphone electronics 13 Pro (128GB) - Sierra Blue",
      description: "15 cm (6.1-inch) Super Retina XDR display with ProMotion for a faster, more responsive feel Cinematic mode adds shallow depth of field and shifts focus automatically in your videos Pro camera system with new 12MP Telephoto, Wide and Ultra Wide cameras; LiDAR Scanner; 6x optical zoom range; macro photography; Photographic Styles, ProRes video, Smart HDR 4, Night mode, Apple ProRAW, 4K Dolby Vision HDR recording 12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording A15 Bionic chip for lightning-fast performance",
      price: 107900,
      image: "https://m.media-amazon.com/images/I/61jLiCovxVL._AC_UY436_FMwebp_QL65_.jpg",
      category: "phone electronics",
      ratings: 4.7
    },
    {
      _id: "5",
      brand: "Samsung",
      title: "Samsung Galaxy M53 5G (Deep Ocean Blue, 8GB, 128GB Storage) | 108MP",
      description: "Segment Best 108MP Quad Camera Setup, with exciting features like Single Take, Object Eraser, and Photo Remaster 6.7-inch Super AMOLED Plus Display, FHD+ resolution, 1080x2400 pixels with 120Hz Refresh Rate MTK D900 Octa Core 2.4GHz 6nm Processor with 4x4 Mimo Band support for a HyperFast 5G experience Massive 5000 mAh Battery | Memory, Storage & SIM: 8GB RAM | RAM Plus upto 8GB |128GB internal memory expandable up to 1TB Latest Android v12.0, One UI 4 operating system",
      price: 23999,
      image: "https://m.media-amazon.com/images/I/81yL2dXKTHL._AC_UY436_FMwebp_QL65_.jpg",
      category: "phone electronics",
      ratings: 4.2
    },
    {
      _id: "6",
      brand: "HP",
      title: "HP 15s,11th Gen Intel Core i3-1115G4 8GB RAM/512GB SSD 15.6-inch(39.6 cm) Micro-Edge Anti-Glare FHD laptop electronics",
      description: "Do Check Partner offer section for Exciting offers from HP Processor: Intel Core i3-1115G4 (up to 4.1 GHz with Intel Turbo Boost Technology(2g),6 MB L3 cache, 2 cores)|Memory: 8 GB DDR4-3200 SDRAM (1 x 8 GB)| Storage: 512 GB PCIe NVMe M.2 SSD Display & Graphics : 39.6 cm (15.6) diagonal, FHD, micro-edge,anti-glare, 250 nits, 141 ppi, 45%NTSC |Graphics: Intel UHD Graphics Operating System & Preinstalled Software: Windows 11 Home 64 Plus Single Language | Microsoft Office Home & Student 2021| McAfee LiveSafe (30 days free trial as default) |Pre-installed Alexa built-in- Your life simplified with Alexa. Just ask Alexa to check your calendar, create to-do lists, shopping lists, play music, set reminders, get latest news and control smart home. Ports: 1 SuperSpeed USB Type-C 5Gbps signaling rate, 2 SuperSpeed USB Type-A 5Gbps signaling rate, 1 headphone electronics/microphone electronics combo, 1 AC smart pin, 1 HDMI 1.4b",
      price: 40990,
      image: "https://m.media-amazon.com/images/I/91oF9q-jE5L._AC_UY436_FMwebp_QL65_.jpg",
      category: "laptop electronics",
      ratings: 4.5
    },
    {
      _id: "7",
      brand: "vivo",
      title: "ASUS VivoBook 15, 15.6-inch (39.62 cms) FHD, Intel Core i3-1005G1 10th Gen, Thin and Light laptop electronics",
      description: "Processor: Intel Core i3-1005G1, 1.2 GHz Base Speed, Up to 3.4 GHz Max Turbo Speed, 2 cores, 4 Threads, 4MB Cache Memory: 8GB (4GB onboard + 4GB SO-DIMM) DDR4 3200MHz, Upgradeable up to 12GB | Storage: 512GB SSD PCIe 3.0 Gen 3x2 SSD with 1x 2.5-inch SATA slot for HDD/SSD Storage upgrade up to 1TB Graphics: Integrated Intel UHD Graphics Display: 15.6-inch, FHD (1920 x 1080) 16:9, 200nits LED Backlit LCD, Anti-glare display, NTSC: 45%, Screen-to-body ratio: 83 % Operating System: Windows 11 Home with Lifetime Validity | Software Included: Office Home and Student 2021 Design & battery: Up to 19.9mm Thin | NanoEdge Bezels | Thin and Light laptop electronics | laptop electronics weight: 1.8 kg | 37WHrs, 2-cell Li-ion battery | Up to 6 hours battery life ;Note: Battery life depends on conditions of usage Keyboard: Chiclet Keyboard with 1.4mm Key Travel",
      price: 29990,
      image: "https://m.media-amazon.com/images/I/71S8U9VzLTL._AC_UY436_FMwebp_QL65_.jpg",
      category: "laptop electronics",
      ratings: 3.7
    },
    {
      _id: "8",
      brand: "Apple",
      title: "2020 Apple MacBook Pro (13.3-inch/33.78 cm, Apple M1 chip with 8 core CPU and 8 core GPU, 8GB RAM, 512GB SSD) - Space Grey",
      description: "Apple-designed M1 chip for a giant leap in CPU, GPU, and machine learning performance Get more done with up to 20 hours of battery life, the longest ever in a Mac 8-core CPU delivers up to 2.8x faster performance to fly through workflows quicker than ever 8-core GPU with up to 5x faster graphics for graphics-intensive apps and games 16-core Neural Engine for advanced machine learning 8GB of unified memory so everything you do is fast and fluid Superfast SSD storage launches apps and opens files in an instant",
      price: 132990,
      image: "https://m.media-amazon.com/images/I/71an9eiBxpL._AC_UY436_FMwebp_QL65_.jpg",
      category: "laptop electronics",
      ratings: 4.2
    },
    {
      _id: "9",
      brand: "HP",
      title: "Hp Envy 15- 11Th Gen Intel Core I9/32Gb/1Tb Ssd/15.6 Inches 400 Nits,4K Amoled Touch, Tuv + Windows 11 Pro",
      description: "Do Check Partner offer section for Exciting offers from HP. Processor: Intel Core i9-11900H (up to 4.9 GHz with Intel Turbo Boost Technology(2g),24 MB L3 cache, 8 cores, 16 threads)| Memory: 32 GB DDR4-3200 MHz RAM (2 x 16 GB), 2 SODIMM memory slots (user accessible)| Storage: 1 TB PCIe NVMe TLC M.2 SSD Display & Graphics: 39.6 cm (15.6) diagonal, 4K UHD(3840 x 2160), OLED,multitouch-enabled, UWVA, edge-to-edge glass,micro-edge, Low Blue Light, Flicker Free,400 nits, 282 ppi, 100% DCI-P3|Graphics: NVIDIA GeForce RTX 3060 laptop electronics GPU (6 GB GDDR6 dedicated) NVIDIA Max-Q technology Operating System & Pre-installed Software: Windows 11 Pro 64| Microsoft Office 2019 Home & Student| McAfee LiveSafe (30 day Trial) Ports & Battery: 2 SuperSpeed USB Type-C 5Gbps signaling rate(DisplayPort 1.4, HP Sleep and Charge) 1 SuperSpeed USB Type-A 5Gbps signaling rate (HP Sleep and Charge), 1 SuperSpeed USB Type-A 5Gbps signaling rate,1 headphone electronics/microphone electronics combo, 1 AC smart pin, 1 HDMI 2.1|Battery: 6-cell, 83 Wh Li-ion polymer Support battery fast charge Features: Keyboard: Full-size, backlit, cool gray keyboard, HP Imagepad with multi-touch gesture support| Camera: HP Wide Vision 720p HD camera with camera shutter| Microphone electronics: Integrated Dual array digital microphone electronicss| Audio: Audio by Bang & Olufsen, Quad speakers| Alexa Built In | Networking: Intel Wi-Fi 6 AX 201 (2x2) and Bluetooth 5 combo (Supporting Gigabit file transfer speeds) | Fingerprint Reader Why HP? What is good for the planet, is good for technology and good for us. Technology must be mindful of the environment and HP believes in sustainability. In an unlikely case of product quality related issue, we may ask you to reach out to brands customer service support and seek resolution. We will require brand proof of issue to process replacement request.",
      price: 211500,
      image: "https://m.media-amazon.com/images/I/81T3CPOvdpL._AC_UY436_FMwebp_QL65_.jpg",
      category: "laptop electronics",
      ratings: 4.7
    },
    {
      _id: "10",
      brand: "Adro",
      title: "Men's Regular T-shirt",
      description: "Wash Care : Do Not Bleach, Wash it with similar colours, Machine wash cold, Dry in Shade. Fit Type : Regular Fit, Half Sleeves. Colour : Olive, Fabric : 100% Pure Cotton (Eco Friendly) Style Point : T-shirt gives a trendy yet Casual look. Durable stitching and Quality finish makes this Product a must have this Summer. Occasion: Formal and Casual wear.",
      price: 397,
      image: "https://m.media-amazon.com/images/I/51XkLH567OL._AC_UL640_FMwebp_QL65_.jpg",
      category: "tshirts fashion",
      ratings: 4.2
    },
    {
      _id: "11",
      brand: "LEOTUDE",
      title: "LEOTUDE Regular Fit Half Sleeve Polo T-Shirt for Men",
      description: "Wash Care: Machine Wash Fabric Type: Cotton Pattern Name: Block Print Collar Style: Classic Collar;; Closure Type: Pull On Occasion Type: Casual; Color Name: Multiple Color; Material Composition: Matty",
      price: 599,
      image: "https://m.media-amazon.com/images/I/81DKTXzkwnL._AC_UL640_FMwebp_QL65_.jpg",
      category: "tshirts fashion",
      ratings: 3.4
    },
    {
      _id: "12",
      brand: "LEOTUDE",
      title: "Printed Large-scale T-shirt",
      description: "Color : Purple Sleeve Type: Half Sleeve Pattern : Printed Neck Style: Round Occasion Type: Casual",
      price: 314,
      image: "https://m.media-amazon.com/images/I/61PqGOxtCwL._AC_UL640_FMwebp_QL65_.jpg",
      category: "tshirts fashion",
      ratings: 4.2
    },
    {
      _id: "13",
      brand: "Manaic",
      title: "Slim Fit T-shirt",
      description: "Size Guide : Small(38),Medium(40),Large(42),X-Large(44),Xx-Large(46) 100% Superior Cotton T-Shirt With Enzyme Treatment, Breathable Fabric Which Allows Air Circulation And Keeps You Cool Our Standard Water-Based Inks Produce A Super Soft, Breathable Print With Unmatched Comfort And Durability. Due To The Different Monitor And Light Effect, The Actual Color Maybe A Slight  Different From The Picture Color. Washcare: Wash Separately With Mild Detergent And Dry Inside Out; Closure Type: Pull On; Sleeve Type: Long Sleeve Occasion Type: Casual; Pattern Type: Checkered",
      price: 279,
      image: "https://m.media-amazon.com/images/I/912FaHcFJ6L._AC_UL640_FMwebp_QL65_.jpg",
      category: "tshirts fashion",
      ratings: 2.5
    },
    {
      _id: "14",
      brand: "Generic",
      title: "Women Ladies Girls Winter Wear Round Neck Self Design Woolen Dori Design Poncho? Black",
      description: "Care Instructions: Machine Wash Fit Type: Regular Fit Material: Wollen Pouch, Color: Solid color (many color variations), Neck type: Round-Neck Regular Fit for daily use; Collar Type: Round Collar Care Instructions: Gentle wash. Use mild detergent. Do not soak, bleach, scrub or wring. Tumble dry. Warm iron. Do not dry in direct sunlight.",
      price: 819,
      image: "https://m.media-amazon.com/images/I/71rmsbXSM2L._AC_UL640_FMwebp_QL65_.jpg",
      category: "ladies wear fashion",
      ratings: 4.2
    },
    {
      _id: "14",
      brand: "Koh Koh",
      title: "KOH KOH Womens Long Maxi Summer Floral Print Short Sleeve Flowy Modest Maxi Dress Gown",
      description: "Slimming Pink on Purple floral plus sized maxi dresses and gowns; Ladies full figure comfy short sleeved maxi dress for the plus sized woman; kimono sleeve elegant maxi dress will be very comfortable; floor length dresses with short sleeves Stretchy and comfortable Pink on Purple stylish chic sun dress; a semi formal evening maxi dress outfit; classy wedding guest flower dresses; spring summer garden party dresses; classic café shopping outfits. Hawaiian vacation travel or holiday cruise Pink on Purple dresses; flattering design; beach wear; resort pool cover; work office dress; fall or winter; baby shower dress and a maternity maxi dress; soft fabric breathable material",
      price: 7919,
      image: "https://m.media-amazon.com/images/I/718aJkXno2L._AC_UL640_FMwebp_QL65_.jpg",
      category: "ladies wear fashion",
      ratings: 4.6
    },
    {
      _id: "15",
      brand: "Royal Export",
      title: "Printed Heavy Dress",
      description: "Style : gown; Design : long wedding fancy color gown Size : free size so you can stitch up to 3XL-46 we provide 46 inch bust size and 42 inch wast size Note : This Anarkali Gown Comes In Semi-Stitched Condition.Stitched Anarkali Gown Shown In Pic But Its Modelling Purpose Only There might be slight color variation due to lightings and flash while photo Shoot Sleeve Type: Long Sleeve; Material Composition: Polyster; Item Length Description: Maxi; Age Range Description: Adult",
      price: 1999,
      image: "https://m.media-amazon.com/images/I/81F3G+KXNbL._AC_UL640_FMwebp_QL65_.jpg",
      category: "ladies wear fashion",
      ratings: 4.9
    },
    {
      _id: "16",
      brand: "Campus",
      title: "Men's OXYFIT (N) Walking Shoe",
      description: "Lifestyle: Walking Shoes Warranty Type: Manufacturer Care Instructions: Allow your pair of shoes to air and de-odorize at a regular basis, this also helps them retain their natural shape; use shoes bags to prevent any stains or mildew; dust any dry dirt from the surface using a clean cloth, do not use polish or shiner",
      price: 589,
      image: "https://m.media-amazon.com/images/I/61bzb6TpfIS._AC_UL640_FMwebp_QL65_.jpg",
      category: "shoes",
      ratings: 4.2
    },
    {
      _id: "17",
      brand: "Adidas",
      title: "Mens Adi Streak M Shoes",
      description: "Color: Carbon Aagg / Black A0qm / Brown 057a Package Contents: 1 Pair of Shoes Ideal For: Mens Material: Synthetic & Mesh",
      price: 2821,
      image: "https://m.media-amazon.com/images/I/71AvKaOCsfL._AC_UL640_FMwebp_QL65_.jpg",
      category: "shoes",
      ratings: 4.7
    },
    {
      _id: "18",
      brand: "Adidas",
      title: "Adidas Unisex-Adult Courtflash M Tennis Shoe",
      description: "Material: Synthetics, Textile, Rubber Color: Ftwr White/beam Green/solar Green Package Contents: Pair of Mens Tennis Shoe",
      price: 4698,
      image: "https://m.media-amazon.com/images/I/715jgztcD5L._AC_UL640_FMwebp_QL65_.jpg",
      category: "shoes",
      ratings: 4.7
    },
    {
      _id: "19",
      brand: "Dr Smith",
      title: "Dr Smith 3 Seater Sofa Com Bed with 4 Cushions Incuded-Washab",
      description: "Premium Washable Fabric - one cushion cover without filler Filling Material: Premium HD Foam. HD Foam provides extra support, cushioning and comfort Seating Capacity: 3 Seater. 3 Sits and 2 Sleeps comfortably. Mattress size: Single Bed Size Mattress Multiple options + functionalities: The Sofa covers come in multiple colors which mean that there is something for everyone here. They are spot cleanable or dry clean friendly. The sofa delivered to your door steps direct from our factory, at our factory price ( free delivery )",
      price: 8999,
      image: "https://m.media-amazon.com/images/I/61WYK2H35tL._AC_UL640_FMwebp_QL65_.jpg",
      category: "sofa",
      ratings: 4.2
    },
    {
      _id: "20",
      brand: "Elitism",
      title: "Elitism Modern & Classic 3 Seater Chesterfield Sectional Sofa ",
      description: "Material Used in the product = 1) Primary Material- Frame in Salwood/ Foam 40 density/ Good quality Velvet2) Secondary Material-Elastics Belts/Color- Maroon/Wooden Legs Used Dimensions are Width - 215, Depth - 101, Height - 82 Cms CHESTERFIELD STYLE: Designed with the traditional Chesterfield style in mind, this piece hits all the key elements, with deep button tufting, nailhead accents, scrolled arms, and turned legs. No assembly required the product is delivered in a preassembled state.(only legs to be fix by the customer) Each of our designs is handcrafted to the highest standards with an equal eye to style and comfort.We understand what matters most to a customer is how a design works in their home and suits their unique needs",
      price: 26797,
      image: "https://m.media-amazon.com/images/I/31ReOB6prML._AC_UL640_FMwebp_QL65_.jpg",
      category: "sofa",
      ratings: 4.8
    },
    {
      _id: "21",
      brand: "RM",
      title: "RM Home Two Seater Sofa Leatherette Grey",
      description: "Best Quality of Leatherate material High Comfort & Durability Easy to move & clean Meet performance & safety ,as we always care for our product.you never get sharp corners in our product which is harmfull for our kids",
      price: 9999,
      image: "https://m.media-amazon.com/images/I/219TvfE79sS._AC_UL640_FMwebp_QL65_.jpg",
      category: "",
      ratings: 4.2
    },
    {
      _id: "22",
      brand: "FurnitureKraft",
      title: "Metallika Centerville Three Seater Sofa cum Bed with Mattress (Glossy Finish, Brown, Metal) By FurnitureKraft",
      description: "ood Quality Metal structure for Strong & more steadiness, Easy to clean, Maintenance free, with long lasting Powder coating Paint Well-designed Indian furniture brand to occupy exact space of your Modern Bedroom & enrich your Bedroom lifestyle Product Dimension: Length (194.6 cm), Width (65.5 cm), Height (80 cm). Getting extra space under the bed, to create storage for your valuables 3 Years Warrantee Make you enjoy all your desires to use our Products peacefully & comfortably Easy to attached and Detached products, first time Free assembling",
      price: 24599,
      image: "https://m.media-amazon.com/images/I/91aFS+JbfnL._AC_UL640_FMwebp_QL65_.jpg",
      category: "sofa",
      ratings: 3.6
    },
    {
      _id: "23",
      brand: "Funskool",
      title: "Funskool Games - Scotland Yard, A Compelling Detective And Strategy,Animal Board Game for Kids & Family, 2 - 3 Players, 10 & Above(Multicolor)",
      description: "Toys and Games A breath taking game of dodging, racing, cornering and chasing One of the players takes on the role of Mister X Job is to move from point to point around the map of London taking taxis, buses or subways Set includes a playing board, log book, playing pieces, cards and travel tickets Great family game",
      price: 363,
      image: "https://m.media-amazon.com/images/I/714qUGKefOL._AC_UL640_FMwebp_QL65_.jpg",
      category: "games",
      ratings: 4.2
    },
    {
      _id: "24",
      brand: "Skillmatics",
      title: "Skillmatics Card Game : Guess in 10 Marvel Edition | Gifts for Ages 8 and Up | Super Fun Spider-Man, Iron Man Game | Avengers Card Set",
      description: "QUICK GAME OF SMART QUESTIONS - Ask up to 10 questions to guess the Marvel character on the Game Card! Can she fly? Is he a part of the Avengers? Be the first player to win 7 Game Cards! SIMPLE GAMEPLAY - Divide yourselves up in teams, or play one on one, ask smart questions to guess the Marvel characters on the cards correctly! It's that simple! STRATEGIZE YOUR WAY TO VICTORY - Use Clue Cards and Bonus Questions to win more cards. First one to win 7 cards wins the game! WHAT'S INSIDE - Game includes 52 Game Cards, 6 Clue Cards, 1 Card Holder and a handy box to store it all. The box size is portable & travel friendly. PERFECT GIFT - This game is the perfect gift for any Marvel fan! Filled with interesting facts and trivia about the Avengers, Guardians of the Galaxy, and more. Marvel fans are sure to have a super fun time! FUN FOR THE WHOLE FAMILY - Combine Movie Night and Family Game Night and test your knowledge of your favorite Marvel characters. Guess in 10 is an exciting game that can be thoroughly enjoyed by all ages 8 and up! BUILD KEY SKILLS - Guess in 10s age-appropriate content and simple gameplay builds key skills such as Communication, Decision Making, Problem Solving and Creative Thinking Skills.",
      price: 578,
      image: "https://m.media-amazon.com/images/I/81tVIN0FubS._AC_UL640_FMwebp_QL65_.jpg",
      category: "games",
      ratings: 4.2
    },
    {
      _id: "25",
      brand: "Amisha",
      title: "Amisha Gift Gallery Video Games for Kids Wireless 4GB Video Game for Kids, 4k Ultra HD Classic Games",
      description: "Upgrated -Smart Game Chip: wireless TV game console built-in more than 10000 Games,more than 9 Emulators are installed , and a 64GBTF card is attached which support you to game search functions, and can save/read game records.Use upgraded game chips to support 8-bit, 16-bit, 32-bit, 64-bit, 128-bit emulators. It perfectly meets your needs for image quality and game fluency. 2.4GHz Wireless Controllers, Support Two-Player Games:Equipped with two 2.4G wireless joysticks, Sensitive without delay, get rid of the shackles of the thread.the connection distance of the controller is 8-10 meters,Plug and play, comfortable feel, you can better Enjoy the fun of classic nostalgic games with family or friends. HDMI Output:This video game console supports HDMI connection ,Please make sure your screen has an HDMI input port.it has 1080P HD image quality, and can enjoy lively and interesting video games on the big screen. Light and Easy to Carry:The protable mini game console has lightweight and compact body. Only 102mm long, 30 grams weight. does not take up space, and is easy to carry.special game rocker for arcade ,high sensitivity andantiskid design, comfortable feel, you can better share your fun with family or friends. Best Gift:game console is a perfect festival/ christmas/ thanksgiving/ halloween/ birthday gift for men, boy, dad, kids, husband and friends.If you are not completely satisfied with the game console, please contact us,",
      price: 3895,
      image: "https://m.media-amazon.com/images/I/71fJrlAe8NL._AC_UL640_FMwebp_QL65_.jpg",
      category: "games",
      ratings: 4.7
    },
    {
      _id: "26",
      brand: "GIFTEO",
      title: "GIFTEO Video Game for Kids, Handheld Sup 400 in 1 Mario, Super Mario, Contra and Other 400 Games",
      description: "Package Contain: Pack of 1 Mario (400 in 1) Handheld Video Game. Display: 3 inches TFT Color Screen, Supports upto 4-5 hours of Continuous playing after one charge. Mini Handheld Design: Compact Size and Lightweight, Convenient to carry, enjoy your game anywhere anytime. Adapted AV Cable: Compatible with TV system, so that you can enjoy retro vivid and exciting games on a big screen too. The game console built-in 400 classic games such as Red fortress, contra, Tank Wars, tetris, etc. Perfect Gift: Kids, Children, Retro game lovers taking one back to happy childhood days",
      price: 672,
      image: "https://m.media-amazon.com/images/I/61DdEbUdo0L._AC_UL640_FMwebp_QL65_.jpg",
      category: "games",
      ratings: 3.2
    },
    {
      _id: "27",
      brand: "Lifelong",
      title: "Lifelong 26T Freeride Cycle with Dual Disc Suspension",
      description: "This Lifelong cycle comes with V-Brakes for Effortless Braking system built for your ease of use and maintenance, and excellent braking power. Specially designed to provide proper braking control on all terrains Warranty: This product comes with 6 months warranty| It features V-brakes The cycle has a sturdy and reliable steel frame that can brave rough riding conditions and terrains. The top-notch construction quality ensures that the bike has a long lifespan Easily adjustable saddle height and an attractive grip offer superior comfort and well cushioned ride. The seat height can be adjusted without using any tools Safety: Lifelong Shimano Gear cycles are ergonomically designed that are safe to ride and are comfortable for long rides as well. Its top-notch construction quality ensures that the bike has a long lifespan Low Maintenance: High quality components ensure that the bike is very low maintenance",
      price: 3452,
      image: "https://m.media-amazon.com/images/I/81VZgPyUj4L._AC_UY436_FMwebp_QL65_.jpg",
      category: "cycle",
      ratings: 4.2
    },
    {
      _id: "28",
      brand: "Lifelong",
      title: "",
      description: "This Lifelong cycle comes with V-Brakes for Effortless Braking system built for your ease of use and maintenance, and excellent braking power. Specially designed to provide proper braking control on all terrains Warranty: This product comes with 6 months warranty| It features V-brakes The cycle has a sturdy and reliable steel frame that can brave rough riding conditions and terrains. The top-notch construction quality ensures that the bike has a long lifespan Easily adjustable saddle height and an attractive grip offer superior comfort and well cushioned ride. The seat height can be adjusted without using any tools Safety: Lifelong Shimano Gear cycles are ergonomically designed that are safe to ride and are comfortable for long rides as well. Its top-notch construction quality ensures that the bike has a long lifespan Low Maintenance: High quality components ensure that the bike is very low maintenance",
      price: 4999,
      image: "https://m.media-amazon.com/images/I/718Y5OV9AzL._AC_UY436_FMwebp_QL65_.jpg",
      category: "cycle",
      ratings: 4.2
    },
    {
      _id: "29",
      brand: "Decsix",
      title: "Decsix Folding Mountain Bike, 26 inch 21 Speed Full Suspension MTB Bicycle for Adult",
      description: "This Decsix cycle comes with V-Brakes for Effortless Braking system built for your ease of use and maintenance, and excellent braking power. Specially designed to provide proper braking control on all terrains Warranty: This product comes with 6 months warranty| It features V-brakes The cycle has a sturdy and reliable steel frame that can brave rough riding conditions and terrains. The top-notch construction quality ensures that the bike has a long lifespan Easily adjustable saddle height and an attractive grip offer superior comfort and well cushioned ride. The seat height can be adjusted without using any tools Safety: Decsix Shimano Gear cycles are ergonomically designed that are safe to ride and are comfortable for long rides as well. Its top-notch construction quality ensures that the bike has a long lifespan Low Maintenance: High quality components ensure that the bike is very low maintenance",
      price: 3479,
      image: "https://m.media-amazon.com/images/I/81cHNPztKcL._AC_UY436_FMwebp_QL65_.jpg",
      category: "cycle",
      ratings: 4.2
    },
    {
      _id: "30",
      brand: "Blaupunkt",
      title: "Blaupunkt BH51 ANC Moksha Bluetooth Wireless On Ear Headphones with 32 Hrs* Long Playtime I 25dB Active Noise Cancellation",
      description: "Battery: Rockerz 370 offers a playback time of up to 12 hours.. Frequency Response 20Hz-20KHz,Sensitivity (dB) 79dB±3DB,Impedance 32Ω. Driver Type:Moving Coil Driver Bluetooth: It has Bluetooth v5.0 with a range of 10m and is compatible with Android & iOS ANC: NA. No. of Mic: 1. Other Inclusions: Micro USB Charging Cable, Warranty Card, User Manual Lightweight Ergonomic Design with Easy Controls Instant Voice Assistant. Drivers: 40mm Drivers with boAt Signature Sound. Cozy Padded Earcups.",
      price: 2999,
      image: "https://m.media-amazon.com/images/I/71qU1XCAIGL._AC_UY436_FMwebp_QL65_.jpg",
      category: "headphones electronics earphones",
      ratings: 4.2
    },
    {
      _id: "31",
      brand: "boAt",
      title: "boAt Rockerz 370 On Ear Bluetooth Headphones with Upto 12 Hours Playtime, Cozy Padded Earcups and Bluetooth v5.0(Buoyant Black)",
      description: "Battery: Rockerz 370 offers a playback time of up to 12 hours.. Frequency Response 20Hz-20KHz,Sensitivity (dB) 79dB±3DB,Impedance 32Ω. Driver Type:Moving Coil Driver Bluetooth: It has Bluetooth v5.0 with a range of 10m and is compatible with Android & iOS ANC: NA. No. of Mic: 1. Other Inclusions: Micro USB Charging Cable, Warranty Card, User Manual Lightweight Ergonomic Design with Easy Controls Instant Voice Assistant. Drivers: 40mm Drivers with boAt Signature Sound. Cozy Padded Earcups.",
      price: 899,
      image: "https://m.media-amazon.com/images/I/61kWB+uzR2L._AC_UY436_FMwebp_QL65_.jpg",
      category: "headphones electronics earphones",
      ratings: 4.2
    },
    {
      _id: "32",
      brand: "boAt",
      title: "boAt Rockerz 450 Bluetooth On Ear Headphones with Mic, Upto 15 Hours Playback",
      description: "Battery: Rockerz 370 offers a playback time of up to 12 hours.. Frequency Response 20Hz-20KHz,Sensitivity (dB) 79dB±3DB,Impedance 32Ω. Driver Type:Moving Coil Driver Bluetooth: It has Bluetooth v5.0 with a range of 10m and is compatible with Android & iOS ANC: NA. No. of Mic: 1. Other Inclusions: Micro USB Charging Cable, Warranty Card, User Manual Lightweight Ergonomic Design with Easy Controls Instant Voice Assistant. Drivers: 40mm Drivers with boAt Signature Sound. Cozy Padded Earcups.",
      price: 1199,
      image: "https://m.media-amazon.com/images/I/51xxA+6E+xL._AC_UY436_FMwebp_QL65_.jpg",
      category: "headphones electronics earphones",
      ratings: 4.2
    },
    {
      _id: "33",
      brand: "boAt",
      title: "boAt Wave Call Smart watch electronics, Smart Talk with Advanced Dedicated",
      description: "Bluetooth Calling- Wave Call comes with a premium built-in speaker and bluetooth calling via which you can stay connected to your friends, family, and colleagues Dial Pad- Its dial pad is super responsive and convenient. You can also save upto 10 contacts in this smart watch Screen Size- Wave Call comes with a 1.69” HD Display that features a bold, bright, and highly responsive 2.5D curved touch interface Resolution- With 550 nits of brightness get sharper color resolution that brightens your virtual world exponentially.",
      price: 1699,
      image: "https://m.media-amazon.com/images/I/614AipEWSIL._AC_UL640_FMwebp_QL65_.jpg",
      category: "watch electronics",
      ratings: 4.5
    },
    {
      _id: "34",
      brand: "boAt",
      title: "boAt Wave Call Smart watch electronics, Smart Talk with Advanced Dedicated",
      description: "Bluetooth Calling- Wave Call comes with a premium built-in speaker and bluetooth calling via which you can stay connected to your friends, family, and colleagues Dial Pad- Its dial pad is super responsive and convenient. You can also save upto 10 contacts in this smart watch Screen Size- Wave Call comes with a 1.69” HD Display that features a bold, bright, and highly responsive 2.5D curved touch interface Resolution- With 550 nits of brightness get sharper color resolution that brightens your virtual world exponentially.",
      price: 3254,
      image: "https://m.media-amazon.com/images/I/61akt30bJsL._AC_UL640_FMwebp_QL65_.jpg",
      category: "watch electronics",
      ratings: 4.2
    },
    {
      _id: "35",
      brand: "boAt",
      title: "boAt Wave Call Smart watch electronics, Smart Talk with Advanced Dedicated",
      description: "Bluetooth Calling- Wave Call comes with a premium built-in speaker and bluetooth calling via which you can stay connected to your friends, family, and colleagues Dial Pad- Its dial pad is super responsive and convenient. You can also save upto 10 contacts in this smart watch Screen Size- Wave Call comes with a 1.69” HD Display that features a bold, bright, and highly responsive 2.5D curved touch interface Resolution- With 550 nits of brightness get sharper color resolution that brightens your virtual world exponentially.",
      price: 2399,
      image: "https://m.media-amazon.com/images/I/71A+muc-1zL._AC_UL640_FMwebp_QL65_.jpg",
      category: "watch electronics",
      ratings: 4.2
    },
    {
      _id: "36",
      brand: "Cadbury",
      title: "Cadbury Diwali Silk potli pack, 343 g",
      description: "A special collection of delicious Cadbury chocolates to surprise your loved ones.",
      price: 457,
      image: "https://m.media-amazon.com/images/I/717vPEhcWhL._AC_UL640_FMwebp_QL65_.jpg",
      category: "chocolates snacks sweets",
      ratings: 4.2
    },
    {
      _id: "37",
      brand: "Cadbury",
      title: "Cadbury Celebrations Premium Selections Chocolates Gift Pack, Assorted, 268 g",
      description: "This assorted pack contains 1 unit of 5-Star 3D-42g, 2 unit of Cadbury Dairy Milk-23g, 1 units of Cadbury Dairy Milk Crackle-36g, 2 units of Cadbury Dairy Milk Fruit & Nut-36g and 2 units of Cadbury Dairy Milk Roasted Almond-36g",
      price: 285,
      image: "https://m.media-amazon.com/images/I/71Ye-tdw68L._AC_UL640_FMwebp_QL65_.jpg",
      category: "chocolates snacks sweets",
      ratings: 4.6
    },
    {
      _id: "38",
      brand: "Amul",
      title: "Amul Chocomini Chocolate, 250 g",
      description: "This assorted pack contains 1 unit of 5-Star 3D-42g, 2 unit of Amul Dairy Milk-23g, 1 units of Amul Dairy Milk Crackle-36g, 2 units of Amul Dairy Milk Fruit & Nut-36g and 2 units of Amul Dairy Milk Roasted Almond-36g",
      price: 125,
      image: "https://m.media-amazon.com/images/I/71KZQkANkFS._AC_UL640_FMwebp_QL65_.jpg",
      category: "chocolates snacks sweets",
      ratings: 4.6
    },
    {
      _id: "39",
      brand: "Cadbury",
      title: "Cadbury Choclairs Gold , 605g (110 Units * 5.5 g EACH)",
      description: "This assorted pack contains 1 unit of 5-Star 3D-42g, 2 unit of Cadbury Dairy Milk-23g, 1 units of Cadbury Dairy Milk Crackle-36g, 2 units of Cadbury Dairy Milk Fruit & Nut-36g and 2 units of Cadbury Dairy Milk Roasted Almond-36g",
      price: 195,
      image: "https://m.media-amazon.com/images/I/61isy7ImN6L._AC_UL640_FMwebp_QL65_.jpg",
      category: "chocolates snacks sweets",
      ratings: 4.6
    },
    {
      _id: "40",
      brand: "Lakme",
      title: "Lakme 9 to 5 CC Cream Mini, 01 - Beige, Light Face Makeup",
      description: "Provides UV Protection. Organic Type : Synthetic Moisturizes Conceals Gives Smooth Coverage Lightens Skin Evens skin tone",
      price: 109,
      image: "https://m.media-amazon.com/images/I/51IgR2yRK2L._AC_UL640_FMwebp_QL65_.jpg",
      category: "beauty products cosmetics",
      ratings: 4.4
    },
    {
      _id: "41",
      brand: "Maybelline",
      title: "Maybelline New York Concealer, Dark Circles and Blemish Eraser, Ultra Blendable",
      description: "Provides UV Protection. Organic Type : Synthetic Moisturizes Conceals Gives Smooth Coverage Lightens Skin Evens skin tone",
      price: 419,
      image: "https://m.media-amazon.com/images/I/41WuCjoKfsL._AC_UL640_FMwebp_QL65_.jpg",
      category: "beauty products cosmetics",
      ratings: 4.1
    },
    {
      _id: "42",
      brand: "TrustBasket",
      title: "TrustBasket Organic Vermicompost Fertilizer Manure for Plants - 10 KG",
      description: "Buy Original, sold and fulfilled by Trust basket*** Improves Soil Aeration Enriches Soil With Micro-Organisms (Adding Enzymes Such As Phosphatase And Cellulase) Microbial Activity In Worm Castings Is 10 To 20 Times Higher Than In The Soil And Organic Matter That The Worm Ingests Attracts Deep-Burrowing Earthworms Already Present In The Soil",
      price: 529,
      image: "https://m.media-amazon.com/images/I/81TiEahKSOL._AC_UL640_FMwebp_QL65_.jpg",
      category: "home and garden home garden fertilizers pesticides",
      ratings: 4.3
    },
    {
      _id: "43",
      brand: "U-Plant",
      title: "U-Plant Organic Manure with NPK for Plants & Home Gardening - 900 gm",
      description: "Buy Original, sold and fulfilled by Trust basket*** Improves Soil Aeration Enriches Soil With Micro-Organisms (Adding Enzymes Such As Phosphatase And Cellulase) Microbial Activity In Worm Castings Is 10 To 20 Times Higher Than In The Soil And Organic Matter That The Worm Ingests Attracts Deep-Burrowing Earthworms Already Present In The Soil",
      price: 254,
      image: "https://m.media-amazon.com/images/I/61VJtf-xHrL._AC_UL640_FMwebp_QL65_.jpg",
      category: "home and garden home garden fertilizers pesticides",
      ratings: 4.3
    },
    {
      _id: "44",
      brand: "DARIT",
      title: "DARIT Tooth Rake Garden Tool, Cast- Duty Gardening Rake",
      description: "High strength and very sharp, cutting effortlessly, even if after a lot of cutting never worrying about becoming dull. Ergonomic Design: Lightweight Stainless Steel ergonomic handles with rubber cushioning for a comfortable yet solid grasp. Great for trimming a variety of bushes and hedges. They are excellent universal shear and are very good gardening tool Ultra Sharp Blades: These quality snips come with stainless steel precision-sharpened blades and are ready to tackle all of your deadheading, trimming, and shaping needs for your roses, annuals, vegetable and small flower gardens",
      price: 500,
      image: "https://m.media-amazon.com/images/I/71XfFyPirjL._AC_UL640_FMwebp_QL65_.jpg",
      category: "home and garden home garden fertilizers pesticides",
      ratings: 2.3
    },
    {
      _id: "45",
      brand: "DeoDap",
      title: "DeoDap Stainless Steel Garden Plant Branch Scissors",
      description: "High strength and very sharp, cutting effortlessly, even if after a lot of cutting never worrying about becoming dull. Ergonomic Design: Lightweight Stainless Steel ergonomic handles with rubber cushioning for a comfortable yet solid grasp. Great for trimming a variety of bushes and hedges. They are excellent universal shear and are very good gardening tool Ultra Sharp Blades: These quality snips come with stainless steel precision-sharpened blades and are ready to tackle all of your deadheading, trimming, and shaping needs for your roses, annuals, vegetable and small flower gardens",
      price: 304,
      image: "https://m.media-amazon.com/images/I/4178g4Gr1lL._AC_UL640_FMwebp_QL65_.jpg",
      category: "home and garden home garden fertilizers pesticides",
      ratings: 2.7
    },
    {
      _id: "46",
      brand: "By M.R. Dileep",
      title: "Tourism: Concepts, Theory and Practice",
      description: "thread of murder running through the colourless skein of life and our duty is to unravel it and isolate it and expose every inch of it.?Sherlock Holmes Consulting Detective 221B Baker Street London.This is where begins a historical partnership between Dr. Watson?the archetypal gentleman from the Victorian era?and the eccentric, legendary sleuth, Sherlock Holmes. Join them as they gather clues, ranging from bloodstains and footprints to cigarette ash and wedding rings and arrive at unusual and surprising conclusions.",
      price: 498,
      image: "https://m.media-amazon.com/images/I/81KuNk0DZQL._AC_UY436_FMwebp_QL65_.jpg",
      category: "books",
      ratings: 4.7
    },
    {
      _id: "47",
      brand: "Arthur Conan Doyle (Author)",
      title: "The Complete Novels of Sherlock Holmes",
      description: "thread of murder running through the colourless skein of life and our duty is to unravel it and isolate it and expose every inch of it.?Sherlock Holmes Consulting Detective 221B Baker Street London.This is where begins a historical partnership between Dr. Watson?the archetypal gentleman from the Victorian era?and the eccentric, legendary sleuth, Sherlock Holmes. Join them as they gather clues, ranging from bloodstains and footprints to cigarette ash and wedding rings and arrive at unusual and surprising conclusions.",
      price: 139,
      image: "https://m.media-amazon.com/images/I/81StezluKUS._AC_UY436_FMwebp_QL65_.jpg",
      category: "books",
      ratings: 3.7
    },
    {
      _id: "48",
      brand: "By James Allen",
      title: "As a Man Thinketh",
      description: "thread of murder running through the colourless skein of life and our duty is to unravel it and isolate it and expose every inch of it.?Sherlock Holmes Consulting Detective 221B Baker Street London.This is where begins a historical partnership between Dr. Watson?the archetypal gentleman from the Victorian era?and the eccentric, legendary sleuth, Sherlock Holmes. Join them as they gather clues, ranging from bloodstains and footprints to cigarette ash and wedding rings and arrive at unusual and surprising conclusions.",
      price: 67,
      image: "https://m.media-amazon.com/images/I/81tEgsxpNZS._AC_UY436_FMwebp_QL65_.jpg",
      category: "books",
      ratings: 3.7
    },
    {
      _id: "49",
      brand: "UE Premium",
      title: "UE Premium Petrol Fuel Treatment and Injector Cleaner - 354 ml Car Care/Car",
      description: "Keeps engine clean and free of deposits Enhances mielage and effeciency of older engine Enhances life of fuel tank and engine parts Petrol fuel tank additive is a multi functional additive with unique detergent dispersant formula for all petrol engines. Avoid eye and skin contact. Avoid prolonged breathing of vapour. Wash hands thoroughly after handling. Use in a well ventilated area. Keep container closed when not in use. Do not injest.",
      price: 139,
      image: "https://m.media-amazon.com/images/I/511G1xSDKFL._AC_UL640_FMwebp_QL65_.jpg",
      category: "automotive",
      ratings: 4.1
    },
    {
      _id: "50",
      brand: "UE Elite",
      title: "UE Elite Dashboard and Polish Cleaner For All Cars and Bike - Dry to touch and Rich",
      description: "Keeps engine clean and free of deposits Enhances mielage and effeciency of older engine Enhances life of fuel tank and engine parts Petrol fuel tank additive is a multi functional additive with unique detergent dispersant formula for all petrol engines. Avoid eye and skin contact. Avoid prolonged breathing of vapour. Wash hands thoroughly after handling. Use in a well ventilated area. Keep container closed when not in use. Do not injest.",
      price: 139,
      image: "https://m.media-amazon.com/images/I/51fYHuEGypL._AC_UL640_FMwebp_QL65_.jpg",
      category: "automotive",
      ratings: 3.2
    }
  ]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(productData)
}
