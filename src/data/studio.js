// Everything here is made up for the demo: the photographer, packages,
// prices and reviews. The photos are free Unsplash photos by the credited
// photographers; the function each one is filed under is made up too.

export const studio = {
  name: 'Shots by Saad',
  photographer: 'Saad Qadir',
  city: 'Lahore',
  travels: 'all over Pakistan',
};

export const FUNCTIONS = {
  mehndi: { label: 'Mehndi', tone: 'yellow' },
  nikah: { label: 'Nikah', tone: 'ink' },
  barat: { label: 'Barat', tone: 'pink' },
  walima: { label: 'Walima', tone: 'teal' },
};

export const photos = {
  'mehndi-hands': { alt: 'Hands with dark mehndi patterns held together over yellow clothes.', by: 'Vitaliy Lyubezhanin', w: 1400, h: 933 },
  'mehndi-stage': { alt: 'A bride sitting on a mehndi stage under yellow drapes and marigold flowers.', by: 'The Decor Seo', w: 1400, h: 933 },
  'mehndi-friends': { alt: 'A smiling bride in green with friends holding up their mehndi hands around her.', by: 'kabita Darlami', w: 1400, h: 931 },
  'mehndi-bride': { alt: 'A bride in a green dress showing her mehndi palms.', by: 'kabita Darlami', w: 1400, h: 2104 },
  'nikah-rings': { alt: 'A bride’s hennaed hand in the groom’s hand, a gold ring on her finger.', by: 'Khadija Yousaf', w: 1400, h: 933 },
  'nikah-henna': { alt: 'Close up of two hands covered in fine mehndi over a red carpet.', by: 'anik das', w: 1400, h: 933 },
  'barat-bride': { alt: 'A bride in a red and gold lehenga with a long dupatta, standing in a hall.', by: 'Naeem Ad', w: 1400, h: 2048 },
  'barat-lawn': { alt: 'A bride in a red lehenga on a lawn in front of a white palace.', by: 'Talha Hadi', w: 1400, h: 2097 },
  'barat-arches': { alt: 'Bride and groom in red and black holding hands under white arches.', by: 'Haseeb Rehman', w: 1400, h: 2100 },
  'barat-candle': { alt: 'A bride in red and gold lit by a candle she is holding.', by: 'Talha Hadi', w: 1400, h: 2097 },
  'barat-couple': { alt: 'The groom in a turban and the bride in red standing close in a dim room.', by: 'Haseeb Rehman', w: 1400, h: 2100 },
  'walima-bride': { alt: 'A bride in black and gold with red bangles and jewellery.', by: 'faizan khan', w: 1400, h: 2100 },
  'walima-veil': { alt: 'A bride lifting a peach dupatta over her head, wearing a gold necklace.', by: 'Naeem Ad', w: 1400, h: 1795 },
  'walima-garden': { alt: 'Bride and groom walking together on a tree lined path at sunset.', by: 'Haseeb Rehman', w: 1400, h: 2100 },
  'walima-gown': { alt: 'A bride in a deep red gown standing under a wooden pergola.', by: 'Talha Hadi', w: 1400, h: 2097 },
};

// The wedding day in the order it happens.
export const day = [
  {
    fn: 'mehndi',
    photo: 'mehndi-friends',
    note: 'Dholki songs, yellow everywhere, and everyone wants their hands in the photo.',
    we: 'We shoot the dancing, the mehndi close ups, and the family who came from far.',
  },
  {
    fn: 'nikah',
    photo: 'nikah-rings',
    note: 'The quiet one. Signatures, duas, a ring, and a lot of happy tears.',
    we: 'We stay out of the way and catch the small moments.',
  },
  {
    fn: 'barat',
    photo: 'barat-arches',
    note: 'The big entrance: baja, flowers, the doli, the whole family in the frame.',
    we: 'Two of us shoot, so nobody important is missed.',
  },
  {
    fn: 'walima',
    photo: 'walima-garden',
    note: 'Calmer, softer, and the couple finally gets to smile together.',
    we: 'We make time for a short couple shoot outside.',
  },
];

export const gallery = [
  'barat-bride',
  'mehndi-hands',
  'walima-veil',
  'mehndi-stage',
  'walima-bride',
  'barat-candle',
  'nikah-henna',
  'mehndi-bride',
  'barat-couple',
  'walima-gown',
];

export const packages = [
  {
    name: 'One function',
    price: 'Rs 65,000',
    for: 'A mehndi, a nikah or a small event',
    gets: ['1 photographer, up to 5 hours', '300+ edited photos', 'Online gallery to share with family'],
  },
  {
    name: 'Shaadi',
    price: 'Rs 160,000',
    for: 'Barat and walima',
    picked: true,
    gets: ['2 photographers on both days', '800+ edited photos', '40 page album you can hold', 'Online gallery to share with family'],
  },
  {
    name: 'Full shaadi',
    price: 'Rs 260,000',
    for: 'Mehndi, nikah, barat and walima',
    gets: [
      '2 photographers on every day',
      '1,500+ edited photos',
      '60 page album, plus 2 small albums for the parents',
      'A couple shoot before the wedding',
    ],
  },
];

export const steps = [
  { title: 'Check your date', text: 'Pick your date below and send an enquiry. We reply on WhatsApp within a day.' },
  { title: 'Lock it', text: 'A 30% advance books the date. The rest is paid on the last function.' },
  { title: 'Shaadi days', text: 'We arrive an hour early on every function and stay till the end.' },
  { title: 'Photos and album', text: 'Edited photos in 3 weeks. You pick the album photos, and it arrives in 6 weeks.' },
];

export const reviews = [
  { text: 'They were at the mehndi before the dholki started and somehow got every aunty’s best side.', who: 'Ayesha and Bilal, Lahore' },
  { text: 'The album came in five weeks. My mother keeps it on the table for guests.', who: 'Hira, Faisalabad' },
  { text: 'Prices were written down from day one. No surprise bills.', who: 'Usman, Islamabad' },
];

export const faqs = [
  { q: 'When do we get our photos?', a: 'Edited photos come in an online gallery 3 weeks after the last function. The album arrives about 6 weeks after you pick its photos.' },
  { q: 'Do you travel outside Lahore?', a: 'Yes, all over Pakistan. Travel and stay outside Lahore are charged at cost, and written into the quote.' },
  { q: 'Do you make videos too?', a: 'Saad shoots photos only. On request we bring a videographer we trust, quoted separately.' },
  { q: 'Can we choose the album photos?', a: 'Yes. You pick your favourites from the online gallery, and we design the album around them.' },
  { q: 'Is Shots by Saad real?', a: 'No. It is a demo website made to show what a photographer’s website can do. Saad, the packages, prices and reviews are made up. The photos are free Unsplash photos by the photographers credited at the bottom of the page.' },
];
