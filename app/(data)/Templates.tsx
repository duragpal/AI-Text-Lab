export default [
  {
    name: "Blog Title",
    desc: "An AI tool that generate blog title depends on yout blog information",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4186/4186534.png",
    aiPrompt:
      "Give me 5 blog topic idea in bullet wise only based on give niche & outline and give me result in Rich text editor format",
    slug: "generate-blog-title",
    form: [
      {
        label: "Enter your blog niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter blog outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Content",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4905/4905454.png",
    slug: "blog-content-generation",
    aiPrompt:
      "Generate Blog Content based on topic and outline in rich text editor format",
    form: [
      {
        label: "Enter your blog topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter blog Outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Topic Ideas",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/11497/11497847.png",
    slug: "blog-topic-idea",
    aiPrompt:
      "Generate top 5 Blog Topic Ideas in bullet point only, (no Description) based on niche in rich text editor format",
    form: [
      {
        label: "Enter your Niche",
        field: "input",
        name: "niche",
        required: true,
      },
    ],
  },
  {
    name: "Youtube SEO Title",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Youtube Tools",
    icon: "https://cdn-icons-png.flaticon.com/128/402/402075.png",
    slug: "youtube-seo-title",
    aiPrompt:
      "Give me Best SEO optimized high ranked 5 title ideas bullet wise only bases on keywords and outline and give me result in HTML tags format",
    form: [
      {
        label: "Enter your youtube video topic keyowords",
        field: "input",
        name: "keywords",
        required: true,
      },
      {
        label: "Enter youtube description Outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Youtube Description",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Youtube Tool",
    icon: "https://cdn-icons-png.flaticon.com/128/2111/2111748.png",
    slug: "youtube-description",
    aiPrompt:
      "Generate Youtube description with emoji under 4-5 lines based on topic and outline in rich text editor format",
    form: [
      {
        label: "Enter your blog topic/title",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter youtube Outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Youtube Tags",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Youtube Tool",
    icon: "https://cdn-icons-png.flaticon.com/128/4674/4674918.png",
    slug: "youtube-tag",

    aiPrompt:
      "Generate 10 Youtube tags in bullet point based on title and outline in rich text editor format",

    form: [
      {
        label: "Enter your youtube title",
        field: "input",
        name: "title",
        required: true,
      },
      {
        label: "Enter youtube video Outline here (Optional)",
        field: "textarea",
        name: "outline",
      },
    ],
  },

  {
    name: "Rewrite Article (Plagiarism Free)",
    desc: "Use this tool to rewrite existing Article or Blog Post which can bypass AI detectors and also make it plagiarism free.",
    icon: "https://cdn-icons-png.flaticon.com/128/3131/3131607.png",
    category: "Rewriting Tool",
    slug: "rewrite-article",
    aiPrompt:
      "Rewrite give article without any Plagiarism in rich text editor format",
    form: [
      {
        label:
          "🤖 Provide your Article/Blogpost or any other content to rewrite.",
        field: "textarea",
        name: "article",
        required: true,
      },
    ],
  },
  {
    name: "Text Improver",
    desc: "This handy tool refines your writing, eliminating errors and redundancies for a clear, readable result. It also offers a comprehensive tone analysis and suggests better word choices.",
    icon: "https://cdn-icons-png.flaticon.com/128/1686/1686815.png",
    category: "Writing Assistant",
    slug: "text-improver",
    aiPrompt:
      "Given textToImprove, Rewrite text without any grammar mistake and professionally in rich text editor format",
    form: [
      {
        label: "Enter text that you want to re-write or improve",
        field: "textarea",
        name: "textToImprove",
      },
    ],
  },
  {
    name: "Add Emojis to Text",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    icon: "https://cdn-icons-png.flaticon.com/128/2584/2584606.png",
    category: "blog",
    slug: "add-emoji-to-text",
    aiPrompt:
      "Add Emoji to outline text depends on outline and rewrite it in rich text editor format",
    form: [
      {
        label: "Enter your text to add emojis",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Post Generator",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    icon: "https://cdn-icons-png.flaticon.com/128/15713/15713420.png",
    category: "blog",

    slug: "instagram-post-generator",
    aiPrompt:
      "Generate 3 Instagram post depends on a given keywords and give output in  in rich text editor format",
    form: [
      {
        label: "Enter Keywords for your post",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Hash Tag Generator",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    icon: "https://cdn-icons-png.flaticon.com/128/7045/7045432.png",
    category: "blog",

    slug: "instagram-hash-tag-generator",
    aiPrompt:
      "Generate 15 Instagram hash tag depends on a given keywords and give output in  in rich text editor format",
    form: [
      {
        label: "Enter Keywords for your instagram hastag",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Post/Reel Idea",
    desc: "An AI tool that generate New and trending instagram idea depends on your niche",
    icon: "https://cdn-icons-png.flaticon.com/128/1029/1029183.png",
    category: "instagram",

    slug: "instagram-post-idea-generator",
    aiPrompt:
      "Generate 5-10 Instagram idea depends on niche with latest trend and give output in  in rich text editor format",
    form: [
      {
        label: "Enter Keywords / Niche for your instagram idea",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "English Grammer Check",
    desc: "AI Model to Correct your english grammer by providing the text",
    icon: "https://cdn-icons-png.flaticon.com/128/12596/12596700.png",
    category: "english",

    slug: "english-grammer-checker",
    aiPrompt:
      "Rewrite the inputText by correcting the grammer and give output in  in rich text editor format",
    form: [
      {
        label: "Enter text to correct the grammer",
        field: "input",
        name: "inputText",
        required: true,
      },
    ],
  },
  {
    name: "Write Code",
    desc: "AI Model to generate programming code in any language",
    icon: "https://cdn-icons-png.flaticon.com/128/6062/6062646.png",
    category: "Coding",

    slug: "write-code",
    aiPrompt:
      "Depends on user codeDescription write a code and give output in  in rich text editor format in code block ",
    form: [
      {
        label: "Enter description of code you want along with Programming Lang",
        field: "textarea",
        name: "codeDesscripton",
        required: true,
      },
    ],
  },
  {
    name: "Explain Code",
    desc: "AI Model to explain programming code in any language",
    icon: "https://cdn-icons-png.flaticon.com/128/8488/8488751.png",
    category: "Coding",

    slug: "explain-code",
    aiPrompt:
      "Depends on user codeDescription explain code line by line and give output in  in rich text editor format in code block ",
    form: [
      {
        label: "Enter code which you want to understand",
        field: "textarea",
        name: "codeDesscripton",
        required: true,
      },
    ],
  },
  {
    name: "Code Bug Detector",
    desc: "This tool analyzes your input, like error messages and code snippets, to pinpoint and fix bugs, offering detailed solutions and alternatives in a straightforward, user-friendly way.",
    icon: "https://cdn-icons-png.flaticon.com/128/4426/4426267.png",
    category: "code-bug-detector",

    slug: "code-bug-detector",
    aiPrompt:
      "Depends on user codeInput find bug in code and give solution and give output in  in rich text editor format in code block ",
    form: [
      {
        label: "Enter code which you want to test bug",
        field: "textarea",
        name: "codeInput",
        required: true,
      },
    ],
  },
  {
    name: "Tagline Generator",
    desc: "Struggling to find the perfect tagline for your brand? Let our AI-tool assist you in creating a tagline that stands out.",
    icon: "https://cdn-icons-png.flaticon.com/128/2178/2178616.png",
    category: "Marketting",

    slug: "tagline-generator",
    aiPrompt:
      "Depends on user productName and outline generate catchy 5-10 tagline for the business product and give output  in rich text editor format ",
    form: [
      {
        label: "Product/Brand Name",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "What you are selling / Marketting",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "Product Description",
    desc: "This is your AI-powered SEO expert, creating captivating and keyword-rich e-commerce product descriptions to boost your online sales.",
    icon: "https://cdn-icons-png.flaticon.com/128/679/679922.png",
    category: "Marketting",

    slug: "product-description",
    aiPrompt:
      "Depends on user productName and description generate small description for product for e-commer business give output  in rich text editor format  ",
    form: [
      {
        label: "Product Name",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "Product Details",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "Social Media Post Creator",
    desc: "Create engaging social media posts for various platforms.",
    category: "Social Media",
    icon: "https://cdn-icons-png.flaticon.com/128/1384/1384060.png",
    slug: "social-media-post-creator",
    aiPrompt:
      "Generate an engaging social media post for the given platform and topic.",
    form: [
      {
        label: "Select platform",
        field: "select",
        name: "platform",
        options: ["Facebook", "Twitter", "Instagram"],
        required: true,
      },
      { label: "Enter topic", field: "input", name: "topic", required: true },
    ],
  },
  {
    name: "Email Subject Line Generator",
    desc: "Create compelling email subject lines to increase open rates.",
    category: "Email",
    icon: "https://cdn-icons-png.flaticon.com/128/732/732200.png",
    slug: "email-subject-line-generator",
    aiPrompt:
      "Generate 5 compelling email subject lines based on the given email content.",
    form: [
      {
        label: "Enter email content",
        field: "textarea",
        name: "content",
        required: true,
      },
    ],
  },
  {
    name: "Product Description Generator",
    desc: "Generate detailed product descriptions for your e-commerce site.",
    category: "E-commerce",
    icon: "https://cdn-icons-png.flaticon.com/128/263/263115.png",
    slug: "product-description-generator",
    aiPrompt:
      "Generate a detailed product description based on the given product details.",
    form: [
      {
        label: "Enter product name",
        field: "input",
        name: "product_name",
        required: true,
      },
      {
        label: "Enter product details",
        field: "textarea",
        name: "product_details",
        required: true,
      },
    ],
  },
  {
    name: "Ad Copy Generator",
    desc: "Create persuasive ad copy for your campaigns.",
    category: "Advertising",
    icon: "https://cdn-icons-png.flaticon.com/128/1008/1008987.png",
    slug: "ad-copy-generator",
    aiPrompt: "Generate persuasive ad copy for the given product or service.",
    form: [
      {
        label: "Enter product/service name",
        field: "input",
        name: "product_service",
        required: true,
      },
      {
        label: "Enter target audience",
        field: "input",
        name: "target_audience",
        required: true,
      },
    ],
  },
  {
    name: "Landing Page Content Generator",
    desc: "Create optimized content for your landing pages.",
    category: "Web",
    icon: "https://cdn-icons-png.flaticon.com/128/2645/2645897.png",
    slug: "landing-page-content-generator",
    aiPrompt:
      "Generate optimized content for a landing page based on the given details.",
    form: [
      {
        label: "Enter product/service name",
        field: "input",
        name: "product_service",
        required: true,
      },
      {
        label: "Enter key features/benefits",
        field: "textarea",
        name: "features_benefits",
        required: true,
      },
    ],
  },
  {
    name: "Resume Bullet Points Generator",
    desc: "Generate impactful bullet points for your resume.",
    category: "Career",
    icon: "https://cdn-icons-png.flaticon.com/128/1674/1674651.png",
    slug: "resume-bullet-points-generator",
    aiPrompt:
      "Generate impactful resume bullet points based on the given job role and achievements.",
    form: [
      {
        label: "Enter job role",
        field: "input",
        name: "job_role",
        required: true,
      },
      {
        label: "Enter key achievements",
        field: "textarea",
        name: "achievements",
        required: true,
      },
    ],
  },
  {
    name: "Cover Letter Generator",
    desc: "Create personalized cover letters for job applications.",
    category: "Career",
    icon: "https://cdn-icons-png.flaticon.com/128/2633/2633366.png",
    slug: "cover-letter-generator",
    aiPrompt:
      "Generate a personalized cover letter based on the given job role and company.",
    form: [
      {
        label: "Enter job role",
        field: "input",
        name: "job_role",
        required: true,
      },
      {
        label: "Enter company name",
        field: "input",
        name: "company_name",
        required: true,
      },
      {
        label: "Enter your key skills",
        field: "textarea",
        name: "key_skills",
        required: true,
      },
    ],
  },
  {
    name: "YouTube Video Title Generator",
    desc: "Generate catchy titles for your YouTube videos.",
    category: "YouTube",
    icon: "https://cdn-icons-png.flaticon.com/128/174/174883.png",
    slug: "youtube-video-title-generator",
    aiPrompt:
      "Generate 5 catchy YouTube video titles based on the given video topic.",
    form: [
      {
        label: "Enter video topic",
        field: "input",
        name: "video_topic",
        required: true,
      },
    ],
  },
  {
    name: "YouTube Video Description Generator",
    desc: "Create detailed descriptions for your YouTube videos.",
    category: "YouTube",
    icon: "https://cdn-icons-png.flaticon.com/128/174/174883.png",
    slug: "youtube-video-description-generator",
    aiPrompt:
      "Generate a detailed YouTube video description based on the given video topic.",
    form: [
      {
        label: "Enter video topic",
        field: "input",
        name: "video_topic",
        required: true,
      },
      {
        label: "Enter key points",
        field: "textarea",
        name: "key_points",
        required: true,
      },
    ],
  },
  {
    name: "Podcast Episode Title Generator",
    desc: "Generate interesting titles for your podcast episodes.",
    category: "Podcast",
    icon: "https://cdn-icons-png.flaticon.com/128/2070/2070733.png",
    slug: "podcast-episode-title-generator",
    aiPrompt:
      "Generate 5 interesting podcast episode titles based on the given topic.",
    form: [
      {
        label: "Enter episode topic",
        field: "input",
        name: "episode_topic",
        required: true,
      },
    ],
  },
  {
    name: "Podcast Episode Description Generator",
    desc: "Create detailed descriptions for your podcast episodes.",
    category: "Podcast",
    icon: "https://cdn-icons-png.flaticon.com/128/2070/2070733.png",
    slug: "podcast-episode-description-generator",
    aiPrompt:
      "Generate a detailed podcast episode description based on the given topic.",
    form: [
      {
        label: "Enter episode topic",
        field: "input",
        name: "episode_topic",
        required: true,
      },
      {
        label: "Enter key points",
        field: "textarea",
        name: "key_points",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Caption Generator",
    desc: "Create catchy captions for your Instagram posts.",
    category: "Social Media",
    icon: "https://cdn-icons-png.flaticon.com/128/174/174855.png",
    slug: "instagram-caption-generator",
    aiPrompt:
      "Generate a catchy Instagram caption based on the given image description.",
    form: [
      {
        label: "Enter image description",
        field: "textarea",
        name: "image_description",
        required: true,
      },
    ],
  },
  {
    name: "Facebook Ad Copy Generator",
    desc: "Create effective ad copy for your Facebook ads.",
    category: "Social Media",
    icon: "https://cdn-icons-png.flaticon.com/128/733/733547.png",
    slug: "facebook-ad-copy-generator",
    aiPrompt:
      "Generate effective ad copy for a Facebook ad based on the given product or service.",
    form: [
      {
        label: "Enter product/service name",
        field: "input",
        name: "product_service",
        required: true,
      },
      {
        label: "Enter target audience",
        field: "input",
        name: "target_audience",
        required: true,
      },
    ],
  },
  {
    name: "Twitter Tweet Generator",
    desc: "Create engaging tweets for your Twitter account.",
    category: "Social Media",
    icon: "https://cdn-icons-png.flaticon.com/128/733/733579.png",
    slug: "twitter-tweet-generator",
    aiPrompt: "Generate an engaging tweet based on the given topic.",
    form: [
      {
        label: "Enter tweet topic",
        field: "input",
        name: "tweet_topic",
        required: true,
      },
    ],
  },
  {
    name: "LinkedIn Post Generator",
    desc: "Create professional posts for your LinkedIn profile.",
    category: "Social Media",
    icon: "https://cdn-icons-png.flaticon.com/128/174/174857.png",
    slug: "linkedin-post-generator",
    aiPrompt: "Generate a professional LinkedIn post based on the given topic.",
    form: [
      {
        label: "Enter post topic",
        field: "input",
        name: "post_topic",
        required: true,
      },
    ],
  },
  {
    name: "Sales Email Generator",
    desc: "Create persuasive sales emails to boost conversions.",
    category: "Email",
    icon: "https://cdn-icons-png.flaticon.com/128/732/732200.png",
    slug: "sales-email-generator",
    aiPrompt:
      "Generate a persuasive sales email based on the given product or service.",
    form: [
      {
        label: "Enter product/service name",
        field: "input",
        name: "product_service",
        required: true,
      },
      {
        label: "Enter target audience",
        field: "input",
        name: "target_audience",
        required: true,
      },
    ],
  },
  {
    name: "Welcome Email Generator",
    desc: "Create welcoming emails for new subscribers.",
    category: "Email",
    icon: "https://cdn-icons-png.flaticon.com/128/732/732200.png",
    slug: "welcome-email-generator",
    aiPrompt:
      "Generate a welcoming email for new subscribers based on the given details.",
    form: [
      {
        label: "Enter your brand name",
        field: "input",
        name: "brand_name",
        required: true,
      },
      {
        label: "Enter welcome message details",
        field: "textarea",
        name: "message_details",
        required: true,
      },
    ],
  },
  {
    name: "Follow-up Email Generator",
    desc: "Create effective follow-up emails for your clients.",
    category: "Email",
    icon: "https://cdn-icons-png.flaticon.com/128/732/732200.png",
    slug: "follow-up-email-generator",
    aiPrompt: "Generate a follow-up email based on the given context.",
    form: [
      {
        label: "Enter context details",
        field: "textarea",
        name: "context_details",
        required: true,
      },
    ],
  },
  {
    name: "Newsletter Content Generator",
    desc: "Create engaging content for your newsletters.",
    category: "Email",
    icon: "https://cdn-icons-png.flaticon.com/128/732/732200.png",
    slug: "newsletter-content-generator",
    aiPrompt: "Generate engaging newsletter content based on the given topic.",
    form: [
      {
        label: "Enter newsletter topic",
        field: "input",
        name: "newsletter_topic",
        required: true,
      },
      {
        label: "Enter key points",
        field: "textarea",
        name: "key_points",
        required: true,
      },
    ],
  },
  {
    name: "Product Review Generator",
    desc: "Generate detailed product reviews.",
    category: "E-commerce",
    icon: "https://cdn-icons-png.flaticon.com/128/263/263115.png",
    slug: "product-review-generator",
    aiPrompt:
      "Generate a detailed product review based on the given product details.",
    form: [
      {
        label: "Enter product name",
        field: "input",
        name: "product_name",
        required: true,
      },
      {
        label: "Enter product details",
        field: "textarea",
        name: "product_details",
        required: true,
      },
    ],
  },
  {
    name: "Job Description Generator",
    desc: "Create detailed job descriptions for open positions.",
    category: "HR",
    icon: "https://cdn-icons-png.flaticon.com/128/1674/1674651.png",
    slug: "job-description-generator",
    aiPrompt:
      "Generate a detailed job description based on the given job role and responsibilities.",
    form: [
      {
        label: "Enter job role",
        field: "input",
        name: "job_role",
        required: true,
      },
      {
        label: "Enter job responsibilities",
        field: "textarea",
        name: "job_responsibilities",
        required: true,
      },
    ],
  },
  {
    name: "Interview Questions Generator",
    desc: "Generate a list of interview questions for candidates.",
    category: "HR",
    icon: "https://cdn-icons-png.flaticon.com/128/1674/1674651.png",
    slug: "interview-questions-generator",
    aiPrompt:
      "Generate a list of interview questions based on the given job role.",
    form: [
      {
        label: "Enter job role",
        field: "input",
        name: "job_role",
        required: true,
      },
    ],
  },
  {
    name: "Customer Testimonial Generator",
    desc: "Create compelling customer testimonials.",
    category: "Marketing",
    icon: "https://cdn-icons-png.flaticon.com/128/1484/1484722.png",
    slug: "customer-testimonial-generator",
    aiPrompt:
      "Generate a compelling customer testimonial based on the given customer feedback.",
    form: [
      {
        label: "Enter customer feedback",
        field: "textarea",
        name: "customer_feedback",
        required: true,
      },
    ],
  },
  {
    name: "Case Study Generator",
    desc: "Create detailed case studies for your projects.",
    category: "Marketing",
    icon: "https://cdn-icons-png.flaticon.com/128/2645/2645897.png",
    slug: "case-study-generator",
    aiPrompt:
      "Generate a detailed case study based on the given project details.",
    form: [
      {
        label: "Enter project name",
        field: "input",
        name: "project_name",
        required: true,
      },
      {
        label: "Enter project details",
        field: "textarea",
        name: "project_details",
        required: true,
      },
    ],
  },
  {
    name: "Business Plan Generator",
    desc: "Create comprehensive business plans.",
    category: "Business",
    icon: "https://cdn-icons-png.flaticon.com/128/2461/2461800.png",
    slug: "business-plan-generator",
    aiPrompt:
      "Generate a comprehensive business plan based on the given business details.",
    form: [
      {
        label: "Enter business name",
        field: "input",
        name: "business_name",
        required: true,
      },
      {
        label: "Enter business details",
        field: "textarea",
        name: "business_details",
        required: true,
      },
    ],
  },
  {
    name: "Mission Statement Generator",
    desc: "Create a powerful mission statement for your business.",
    category: "Business",
    icon: "https://cdn-icons-png.flaticon.com/128/2461/2461800.png",
    slug: "mission-statement-generator",
    aiPrompt:
      "Generate a mission statement based on the given business values and goals.",
    form: [
      {
        label: "Enter business values",
        field: "textarea",
        name: "business_values",
        required: true,
      },
      {
        label: "Enter business goals",
        field: "textarea",
        name: "business_goals",
        required: true,
      },
    ],
  },
  {
    name: "Value Proposition Generator",
    desc: "Create a strong value proposition for your business.",
    category: "Business",
    icon: "https://cdn-icons-png.flaticon.com/128/2461/2461800.png",
    slug: "value-proposition-generator",
    aiPrompt:
      "Generate a value proposition based on the given product/service details.",
    form: [
      {
        label: "Enter product/service details",
        field: "textarea",
        name: "product_service_details",
        required: true,
      },
    ],
  },
  {
    name: "Executive Summary Generator",
    desc: "Create a concise executive summary for your business plan.",
    category: "Business",
    icon: "https://cdn-icons-png.flaticon.com/128/2461/2461800.png",
    slug: "executive-summary-generator",
    aiPrompt:
      "Generate an executive summary based on the given business plan details.",
    form: [
      {
        label: "Enter business plan details",
        field: "textarea",
        name: "business_plan_details",
        required: true,
      },
    ],
  },
  {
    name: "Company Profile Generator",
    desc: "Create a detailed company profile.",
    category: "Business",
    icon: "https://cdn-icons-png.flaticon.com/128/2461/2461800.png",
    slug: "company-profile-generator",
    aiPrompt: "Generate a company profile based on the given company details.",
    form: [
      {
        label: "Enter company name",
        field: "input",
        name: "company_name",
        required: true,
      },
      {
        label: "Enter company details",
        field: "textarea",
        name: "company_details",
        required: true,
      },
    ],
  },
];
