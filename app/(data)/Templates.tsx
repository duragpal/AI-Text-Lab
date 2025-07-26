export default [
  // --- Blog Tools ---
  {
    name: "Blog Title",
    desc: "Generate a list of catchy and SEO-friendly blog titles based on your topic.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4186/4186534.png",
    slug: "generate-blog-title",
    aiPromptTemplate: `Act as a creative blog writer. Generate 5 catchy blog titles based on the provided niche and outline.

**Niche:** {niche}
**Outline:** {outline}

**Instructions:**
- Provide only a Markdown bulleted list of the 5 titles.
- Do not add any extra text or explanations.`,
    form: [
      {
        label: "Enter your blog niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter a brief blog outline (optional)",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Content",
    desc: "Generate a full blog post from a topic and outline, complete with headings and paragraphs.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4905/4905454.png",
    slug: "blog-content-generation",
    aiPromptTemplate: `Act as a professional blogger and SEO expert. Write a comprehensive and engaging blog post on the given topic, using the provided outline as a guide.

**Topic:** {topic}
**Outline:** {outline}

**Instructions:**
- Format the entire post in well-structured Markdown.
- Use headings, paragraphs, and lists where appropriate.`,
    form: [
      {
        label: "Enter your blog topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter a brief blog outline (optional)",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Topic Ideas",
    desc: "Brainstorm a list of engaging blog post ideas based on your niche.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/11497/11497847.png",
    slug: "blog-topic-idea",
    aiPromptTemplate: `Act as a content strategist. Generate 5 creative and engaging blog topic ideas for the following niche.

**Niche:** {niche}

**Instructions:**
- Provide only a Markdown bulleted list.
- Do not write descriptions for the ideas, only the titles.`,
    form: [
      {
        label: "Enter your Niche",
        field: "input",
        name: "niche",
        required: true,
      },
    ],
  },

  // --- YouTube Tools ---
  {
    name: "YouTube SEO Title",
    desc: "Generate viral, SEO-optimized titles for your YouTube videos.",
    category: "YouTube Tools",
    icon: "https://cdn-icons-png.flaticon.com/128/402/402075.png",
    slug: "youtube-seo-title",
    aiPromptTemplate: `Act as a YouTube SEO expert. Generate 5 viral, SEO-optimized YouTube video titles based on the provided keywords and outline.

**Keywords:** {keywords}
**Outline:** {outline}

**Instructions:**
- Provide only a Markdown numbered list of the 5 titles.
- The titles should be catchy and create curiosity.`,
    form: [
      {
        label: "Enter your video topic keywords",
        field: "input",
        name: "keywords",
        required: true,
      },
      {
        label: "Enter a brief video outline (optional)",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "YouTube Description",
    desc: "Create a compelling YouTube video description with emojis and relevant details.",
    category: "YouTube Tool",
    icon: "https://cdn-icons-png.flaticon.com/128/2111/2111748.png",
    slug: "youtube-description",
    aiPromptTemplate: `Act as a YouTube content creator. Generate an engaging YouTube video description with relevant emojis based on the video topic and outline.

**Topic:** {topic}
**Outline:** {outline}

**Instructions:**
- Keep the description concise (4-5 lines).
- Strategically include emojis to increase engagement.
- Format the output in Markdown.`,
    form: [
      {
        label: "Enter your video topic/title",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter a brief video outline (optional)",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "YouTube Tags",
    desc: "Generate a list of relevant, high-ranking tags for your YouTube video.",
    category: "YouTube Tool",
    icon: "https://cdn-icons-png.flaticon.com/128/4674/4674918.png",
    slug: "youtube-tag",
    aiPromptTemplate: `Act as a YouTube SEO expert. Generate 15 relevant YouTube tags based on the video title and outline.

**Title:** {title}
**Outline:** {outline}

**Instructions:**
- Provide the tags as a single, comma-separated string (e.g., tag1, tag2, tag3).
- Do not use bullet points or numbers.`,
    form: [
      {
        label: "Enter your YouTube video title",
        field: "input",
        name: "title",
        required: true,
      },
      {
        label: "Enter a brief video outline (optional)",
        field: "textarea",
        name: "outline",
      },
    ],
  },

  // --- Writing & Rewriting Tools ---
  {
    name: "Rewrite Article (Plagiarism Free)",
    desc: "Rewrite an article to be unique and bypass AI detectors while preserving the core message.",
    icon: "https://cdn-icons-png.flaticon.com/128/3131/3131607.png",
    category: "Rewriting Tool",
    slug: "rewrite-article",
    aiPromptTemplate: `Act as a professional editor. Rewrite the following article to be unique and plagiarism-free while preserving the original meaning and tone.

**Original Article:** {article}

**Instructions:**
- Format the output in clean Markdown.
- Ensure the rewritten content is substantially different from the original to pass plagiarism checks.`,
    form: [
      {
        label: "Paste your Article/Blog post or any other content to rewrite.",
        field: "textarea",
        name: "article",
        required: true,
      },
    ],
  },
  {
    name: "Text Improver",
    desc: "Refine your writing by fixing grammar, eliminating errors, and improving word choices.",
    icon: "https://cdn-icons-png.flaticon.com/128/1686/1686815.png",
    category: "Writing Assistant",
    slug: "text-improver",
    aiPromptTemplate: `Act as an expert English editor. Rewrite the following text to be grammatically perfect, clear, and professional.

**Original Text:** {textToImprove}

**Instructions:**
- Correct all grammatical errors, spelling mistakes, and punctuation issues.
- Improve sentence structure and word choice for clarity and impact.
- Format the output in clean Markdown.`,
    form: [
      {
        label: "Enter text that you want to rewrite or improve",
        field: "textarea",
        name: "textToImprove",
        required: true,
      },
    ],
  },
  {
    name: "Add Emojis to Text",
    desc: "Add relevant and engaging emojis to your text to make it more visually appealing.",
    icon: "https://cdn-icons-png.flaticon.com/128/2584/2584606.png",
    category: "Fun Tool",
    slug: "add-emoji-to-text",
    aiPromptTemplate: `Rewrite the following text, adding relevant emojis to enhance its tone and readability.

**Original Text:** {text}

**Instructions:**
- Integrate emojis naturally within the text.
- Do not change the original meaning of the text.`,
    form: [
      {
        label: "Enter your text to add emojis to",
        field: "textarea",
        name: "text",
        required: true,
      },
    ],
  },
  {
    name: "English Grammar Check",
    desc: "Correct grammatical errors and improve the professionalism of your English text.",
    icon: "https://cdn-icons-png.flaticon.com/128/12596/12596700.png",
    category: "Writing Assistant",
    slug: "english-grammer-checker",
    aiPromptTemplate: `Act as an expert English proofreader. Correct all grammatical errors in the following text.

**Original Text:** {inputText}

**Instructions:**
- Rewrite the text with perfect grammar.
- Only output the corrected text.`,
    form: [
      {
        label: "Enter text to correct the grammar",
        field: "textarea",
        name: "inputText",
        required: true,
      },
    ],
  },

  // --- Social Media ---
  {
    name: "Instagram Post Generator",
    desc: "Generate complete Instagram post captions based on your keywords.",
    category: "Social Media",
    icon: "https://cdn-icons-png.flaticon.com/128/15713/15713420.png",
    slug: "instagram-post-generator",
    aiPromptTemplate: `Act as a social media manager. Generate 3 engaging Instagram post captions based on the following keywords.

**Keywords:** {keywords}

**Instructions:**
- Each caption should have a different tone (e.g., funny, inspirational, informative).
- Include relevant emojis and a call-to-action in each caption.
- Include 3-5 relevant hashtags for each caption.
- Format the output in Markdown, using headings for each post.`,
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
    name: "Instagram Hashtag Generator",
    desc: "Generate a list of trending and relevant hashtags for your Instagram posts.",
    category: "Social Media",
    icon: "https://cdn-icons-png.flaticon.com/128/7045/7045432.png",
    slug: "instagram-hash-tag-generator",
    aiPromptTemplate: `Act as an Instagram growth expert. Generate 15 relevant and trending hashtags based on the provided keywords.

**Keywords:** {keywords}

**Instructions:**
- Provide the hashtags as a single, space-separated string starting with '#' (e.g., #hashtag1 #hashtag2 #hashtag3).
- Do not use bullet points or commas.`,
    form: [
      {
        label: "Enter Keywords for your Instagram hashtag",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  
  // --- Coding Tools ---
  {
    name: "Write Code",
    desc: "AI Model to generate programming code in any language.",
    icon: "https://cdn-icons-png.flaticon.com/128/6062/6062646.png",
    category: "Coding",
    slug: "write-code",
    aiPromptTemplate: `Act as an expert {codeLanguage} developer. Your task is to write a clean, efficient code snippet in {codeLanguage} based on the user's request.

**Request:** {codeDescription}

**Output Instructions:**
- Generate only the raw code.
- Do not include any explanations or introductory text.
- Format the entire response as a single Markdown code block with the correct language identifier.`,
    form: [
      {
        label: "Enter code description",
        field: "textarea",
        name: "codeDescription",
        required: true,
      },
      {
        label: "Enter Programming Language",
        field: "input",
        name: "codeLanguage",
        required: true,
      },
    ],
  },
  {
    name: "Explain Code",
    desc: "Get a detailed, line-by-line explanation of any programming code snippet.",
    icon: "https://cdn-icons-png.flaticon.com/128/8488/8488751.png",
    category: "Coding",
    slug: "explain-code",
    aiPromptTemplate: `Act as a senior software developer and mentor. Explain the following code snippet line-by-line in a clear and concise way.

**Code Snippet:**
\`\`\`
{codeToExplain}
\`\`\`

**Instructions:**
- Provide the explanation in well-structured Markdown.
- Break down complex parts into simple terms.
- Use bullet points for line-by-line explanations.`,
    form: [
      {
        label: "Enter code which you want to understand",
        field: "textarea",
        name: "codeToExplain",
        required: true,
      },
    ],
  },
  {
    name: "Code Bug Detector",
    desc: "Analyze your code, find bugs, and get detailed solutions and fixes.",
    icon: "https://cdn-icons-png.flaticon.com/128/4426/4426267.png",
    category: "Coding",
    slug: "code-bug-detector",
    aiPromptTemplate: `Act as an expert code debugger. Analyze the following code snippet to find any bugs or errors. Provide a detailed explanation of the bug and the corrected code.

**Code with potential bug:**
\`\`\`
{codeInput}
\`\`\`

**Instructions:**
- Clearly identify the bug(s).
- Explain why it is a bug.
- Provide the corrected, working code snippet in a Markdown code block.`,
    form: [
      {
        label: "Enter code which you want to debug",
        field: "textarea",
        name: "codeInput",
        required: true,
      },
    ],
  },

  // --- Marketing Tools ---
  {
    name: "Tagline Generator",
    desc: "Create catchy and memorable taglines for your brand or product.",
    icon: "https://cdn-icons-png.flaticon.com/128/2178/2178616.png",
    category: "Marketing",
    slug: "tagline-generator",
    aiPromptTemplate: `Act as a senior branding strategist. Generate 10 catchy and memorable taglines for the business product described below.

**Product/Brand Name:** {productName}
**Product/Market Details:** {outline}

**Instructions:**
- The taglines should be short, impactful, and easy to remember.
- Provide the output as a Markdown numbered list.`,
    form: [
      {
        label: "Product/Brand Name",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "What are you selling/marketing?",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "Product Description",
    desc: "Create captivating and keyword-rich e-commerce product descriptions.",
    icon: "https://cdn-icons-png.flaticon.com/128/679/679922.png",
    category: "Marketing",
    slug: "product-description",
    aiPromptTemplate: `Act as an expert e-commerce copywriter. Write a compelling and SEO-friendly product description for the following product.

**Product Name:** {productName}
**Product Details:** {outline}

**Instructions:**
- The description should be persuasive and highlight key benefits.
- Use a friendly and engaging tone.
- Format the output in Markdown, including a bulleted list of key features.`,
    form: [
      {
        label: "Product Name",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "Provide key product details and features",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
];