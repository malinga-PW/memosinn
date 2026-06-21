import blogImg1 from "/public/images/blog/img-1.jpg";
import blogImg2 from "/public/images/blog/img-2.jpg";
import blogImg3 from "/public/images/blog/img-3.jpg";

import blogSingleImg1 from "/public/images/blog/img-4.jpg";
import blogSingleImg2 from "/public/images/blog/img-5.jpg";
import blogSingleImg3 from "/public/images/blog/img-6.jpg";

const blogs = [
    {
        id: '1',
        title: 'Top 5 Things to Do in Hiriketiya Beach',
        slug: 'Top-5-Things-Hiriketiya-Beach',
        screens: blogImg1,
        description: 'Discover the best surf spots, local cafes, and hidden gems around Hiriketiya Beach, just a short walk from Memo\'s Inn.',
        author: 'Memos Inn',
        create_at: '25 Mar 2026',
        blogSingleImg: blogSingleImg1,
        comment: '12',
        blClass: 'format-standard-image',
    },
    {
        id: '2',
        title: 'Your Guide to Exploring Dickwella Coastline',
        slug: 'Exploring-Dickwella-Coastline',
        screens: blogImg2,
        description: 'From sunset strolls to fresh seafood dinners, here\'s everything you need to know about Dickwella beach area.',
        author: 'Memos Inn',
        create_at: '18 Mar 2026',
        blogSingleImg: blogSingleImg2,
        comment: '8',
        blClass: 'format-standard-image',
    },
    {
        id: '3',
        title: 'Why Memo\'s Inn Is the Best Budget Stay in Matara',
        slug: 'Best-Budget-Stay-Matara',
        screens: blogImg3,
        description: 'Affordable rooms, prime location near Hiriketiya Beach, and warm Sri Lankan hospitality - see why guests love us.',
        author: 'Memos Inn',
        create_at: '10 Mar 2026',
        blogSingleImg: blogSingleImg3,
        comment: '24',
        blClass: 'format-video',
    },
];
export default blogs;
