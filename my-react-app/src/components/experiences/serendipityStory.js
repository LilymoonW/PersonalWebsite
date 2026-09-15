import logo from '../../assets/serendipity/logo-optimized.webp'
import storefront from '../../assets/serendipity/storefront-optimized.webp'
import banner from '../../assets/serendipity/macaron-banner-optimized.webp'
import detail from '../../assets/serendipity/matcha-detail-optimized.webp'
import packaging from '../../assets/serendipity/packaging-optimized.webp'
import stack from '../../assets/serendipity/matcha-stack-optimized.webp'

export const serendipityStory = {
  kind: 'serendipity-story',
  titleLines: ['Serendipity', 'Founder'],
  brand: { primary: '#765345', secondary: '#e9cadb', logo: { src: logo, alt: 'Serendipity Macarons — Baking for Educational Equality' } },
  tags: ['Baking', 'Community & Giving'],
  overview: [
    'I loved baking for my friends. Serendipity grew out of wanting to share that joy while supporting a cause I cared about: educational inequality.',
    'I created a virtual bake sale dedicated to raising money for the Washington Education Association (WEA) Children’s Fund, which provides supplies and necessities to students from low-income families. I took the project from flavor experiments to a logo, product photography, packaging, and an online shop.',
  ],
  sections: [
    {
      id: 'inspiration', navLabel: 'Why I started', title: 'From research to something I could do',
      text: 'My research paper, The Relative Impact of Family Income Vs Per Student Expenditures on Education Outcomes in Washington, explored the relationship between family income, school spending, and student outcomes. Writing it made educational inequality feel more immediate. Serendipity became a way to act on what I had learned through something I enjoyed making and sharing.',
      gallery: [{ src: banner, span: true, alt: 'A close-up of assorted homemade macarons arranged in their packaging.', caption: 'Homemade macarons, made to share.' }],
      links: [{ label: 'Read my research paper', href: 'https://www.researchgate.net/publication/369682100_The_Relative_Impact_of_Family_Income_Vs_Per_Student_Expenditures_on_Education_Outcomes_in_Washington' }],
    },
    {
      id: 'making', navLabel: 'Flavors & photography', title: 'Making the product and its identity',
      text: 'I experimented with different macaron flavors, developing a menu that included Earl Grey, matcha, coffee macchiato, cream cheese ube, sesame, and feuilletine chocolate. I made the logo and photographed the products, giving the bake sale an identity of its own.',
      gallery: [
        { src: detail, alt: 'Matcha macarons with one opened to show the green filling.', caption: 'Showing the texture and filling in my product photography.' },
        { src: stack, alt: 'Three matcha macarons stacked on a plate against a soft pink background.', caption: 'Photographing the finished macarons for the shop.' },
      ],
    },
    {
      id: 'storefront', navLabel: 'Website & packaging', title: 'Bringing the bake sale online',
      text: 'I built the Serendipity website on Square, bringing together product photos, flavor descriptions, prices, and a build-your-own macaron box. I also ordered packaging and organized the practical details of preparing the macarons for customers.',
      gallery: [
        { src: storefront, span: true, alt: 'Serendipity’s online storefront displaying a custom macaron box and six flavors with photos, descriptions, and prices.', caption: 'The Square storefront I created for the virtual bake sale.' },
        { src: packaging, span: true, alt: 'Assorted macarons arranged in individual compartments inside a bakery box.', caption: 'Packaging the different flavors together for customers.' },
      ],
      links: [{ label: 'Visit the Serendipity website', href: 'https://serendipitybake.square.site/' }],
    },
    {
      id: 'community', navLabel: 'Teaching & community', title: 'Sharing more than macarons',
      text: 'I taught a class of six children how to bake macarons and used the class to talk about educational inequality. It was a chance to share a skill I loved while helping them understand the purpose behind the fundraiser.',
      textAfter: 'Serendipity was also featured in Greet Kirkland. Barbara Pearson’s article, “Baking Delicious Macarons for Educational Equality,” tells the story of my baking and the cause behind it.',
      links: [{ label: 'Read the Greet Kirkland feature', href: 'https://greetmag.com/locations/kirkland-wa/articles/-b74e68/' }],
    },
    {
      id: 'lessons', navLabel: 'What I learned', title: 'Start small. Let people spread the word.',
      paragraphs: [
        'I wanted everything to be perfect before putting it out into the world: the flavors, the photos, the packaging, and the website. I learned how easy it is to take on too much at once, and how valuable it can be to start with something smaller.',
        'Word of mouth mattered. Baking for friends and telling people why I was doing it were important parts of getting the project out there. My biggest takeaway was that sometimes less is more: make something with care, share it, and give yourself room to learn as you go.',
      ],
    },
  ],
}
