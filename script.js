// Data for AI Tools
const aiTools = [
    { id: 'chatgpt', name: 'ChatGPT', category: 'Text & Writing', icon: '💬', shortDesc: 'Versatile conversational AI for content, analysis, and coding.', limitSummary: 'Limited GPT-4o messages', capabilities: 'Offers conversational AI, web search, basic data analysis, and can process image/file uploads. Generates articles, social media content, and provides coding assistance.', free_limits: 'Free tier has rate limits on GPT-4o (approx. 10-60 messages/5 hrs), defaulting to less powerful models after. No custom GPT creation is allowed.', pros: 'Highly flexible, easy to use, understands context for personalized responses.', cons: 'Responses can be inaccurate or outdated; requires fact-checking. Advanced features are restricted.', link: 'https://chat.openai.com/' },
    { id: 'claude', name: 'Claude', category: 'Text & Writing', icon: '✍️', shortDesc: 'Creative AI chatbot with natural, polished outputs.', limitSummary: 'Variable daily message limit', capabilities: 'Engages in natural conversations, generates text, offers coding help, and analyzes content with web search support. "Artifacts" feature allows in-chat document drafting.', free_limits: 'Free tier has a fluctuating daily message limit (approx. 40-100 messages) based on demand. Slower responses are possible during peak traffic.', pros: 'Natural, human-like conversational flow and strong context retention.', cons: 'Lacks native image/video generation and may sometimes not complete tasks fully.', link: 'https://claude.ai/' },
    { id: 'voila', name: 'Voila AI', category: 'Text & Writing', icon: '🔮', shortDesc: 'AI assistant integrated into your browser and workflow.', limitSummary: '250 requests total', capabilities: 'Functions as a browser extension to summarize, rewrite, or translate content from any website, document, or image. Includes tools for email drafting, content generation, and more.', free_limits: 'The free plan is strictly limited to 250 requests in total.', pros: 'Seamless integration saves time by automating various writing and research tasks.', cons: 'Users have reported minor bugs and occasional inconsistencies.', link: 'https://www.voila.ai/' },
    { id: 'copyai', name: 'Copy.ai', category: 'Text & Writing', icon: '📄', shortDesc: 'Extensive suite of tools for marketing and sales copy.', limitSummary: '2,000 words / month', capabilities: 'Provides over 90 specialized AI tools for generating marketing emails, social media captions, product descriptions, ad copy, and more. Supports content repurposing and tone adjustment.', free_limits: 'Limited to 2,000 words per month and 200 one-time Workflow Credits. Customer support is limited.', pros: 'Simple interface and diverse templates streamline content creation for marketers.', cons: 'Can occasionally lag or produce awkward content; less effective for long-form articles.', link: 'https://www.copy.ai/' },
    { id: 'typliai', name: 'Typli.ai', category: 'Text & Writing', icon: '✒️', shortDesc: 'Vast collection of over 185 unique AI writing tools.', limitSummary: '10k words & 20 images / month', capabilities: 'Features a massive range of writing tools, from formal letters to creative content like recipes and workout plans. Includes a ChatGPT Rewriter and multi-language translation.', free_limits: 'Provides 10,000 words and 20 image generations per month.', pros: 'Handles a wide variety of subjects and includes a convenient integrated SEO checker.', cons: 'Generated content can sometimes be off-topic or buggy.', link: 'https://typli.ai/' },
    { id: 'wordtune', name: 'Wordtune', category: 'Text & Writing', icon: '🔄', shortDesc: 'AI writing assistant for rephrasing and improving clarity.', limitSummary: '10 rewrites / day', capabilities: 'Focuses on enhancing written communication by rephrasing sentences, adjusting tone, and improving clarity. Can also summarize documents, articles, webpages, and YouTube videos.', free_limits: 'The free version is limited to 10 "rewrites" or "spices," 3 AI prompts, and 3 summaries per day.', pros: 'User-friendly interface helps improve the flow and clarity of writing.', cons: 'Suggestions can sometimes feel formulaic; not ideal for extensive content creation.', link: 'https://www.wordtune.com/' },
    { id: 'grammarly', name: 'Grammarly', category: 'Text & Writing', icon: '✅', shortDesc: 'Essential tool for grammar, spelling, and punctuation checks.', limitSummary: 'Basic checks & 100 AI prompts/month', capabilities: 'Provides fundamental checks for grammar, spelling, and punctuation with options for different English dialects. Includes a basic tone detector and integrates with most platforms.', free_limits: 'Offers basic error flagging but lacks detailed explanations. Generative AI is limited to 100 prompts per month. No plagiarism checker.', pros: 'Highly accurate for basic error detection with helpful real-time feedback.', cons: 'Advanced features like plagiarism checking and genre-specific suggestions are behind a paywall.', link: 'https://www.grammarly.com/' },
    { id: 'dalle3', name: 'DALL-E 3', category: 'Image & Design', icon: '🎨', shortDesc: 'High-quality image generation via ChatGPT.', limitSummary: 'Daily generation limits', capabilities: 'Accessible through a free ChatGPT account, it translates detailed text prompts into accurate and nuanced images. Allows for iterative refinement through conversation.', free_limits: 'Image generation is subject to daily limits and rate limits that are stricter than paid plans. The exact cap varies based on system load.', pros: 'Intuitive prompting, high-quality output, and seamless integration with ChatGPT.', cons: 'Limits can be unpredictable and are lower than for paid users.', link: 'https://openai.com/dall-e-3' },
    { id: 'ideogram', name: 'Ideogram', category: 'Image & Design', icon: '🔠', shortDesc: 'Excels at rendering clear and accurate text in images.', limitSummary: '40 images / week', capabilities: 'A free-to-use image generator specializing in designs, logos, and posters. Its standout feature is superior and reliable text rendering within images. Includes a "Canvas" for editing.', free_limits: 'Provides 10 "slow credits" per week, equating to about 40 images. All generated images are public by default.', pros: 'A "game changer" for typography-based designs like logos and T-shirts.', cons: 'Can struggle with generating multiple people accurately in one scene.', link: 'https://ideogram.ai/' },
    { id: 'recraft', name: 'Recraft AI', category: 'Image & Design', icon: '💠', shortDesc: 'Generates editable vector graphics (SVG) from text.', limitSummary: '50 credits / day (public images)', capabilities: 'Transforms text prompts into editable raster and vector graphics (SVG, PNG, JPG, Lottie). Includes an image upscaler, background remover, and other editing tools.', free_limits: 'Offers 50 free credits daily. All generated images are public, and ownership is retained by Recraft. Commercial use is permitted with limitations.', pros: 'Fast, high-quality, and precise, especially for vector graphics and photorealism.', cons: 'No private generations on the free tier; ownership is retained by the platform.', link: 'https://www.recraft.ai/' },
    { id: 'freepik', name: 'Freepik Generator', category: 'Image & Design', icon: '🖼️', shortDesc: 'Intuitive generator with multiple AI models and styles.', limitSummary: '20 images / day', capabilities: 'Converts text prompts into visual outputs using several advanced AI models. Offers presets for style, color, and perspective to simplify prompt engineering.', free_limits: 'Users can generate up to 20 images per day on the free tier.', pros: 'Intuitive and user-friendly, making it easy to create a variety of high-quality graphics.', cons: 'The image upscaling feature can be slower than other functions.', link: 'https://www.freepik.com/ai/image-generator' },
    { id: 'canva', name: 'Canva Magic Studio', category: 'Image & Design', icon: '✨', shortDesc: 'Suite of AI design tools integrated within Canva.', limitSummary: 'Limited use of Magic features', capabilities: 'A collection of AI-powered tools within Canva, including "Magic Design" for creating templates, "Magic Edit" for modifying images with text, and "Magic Eraser" for removing objects.', free_limits: 'Many features are freemium. For example, "Magic Write" is limited to 25 lifetime uses. Free users may not have exclusive rights to AI-generated outputs.', pros: 'Simplifies graphic design for non-designers, automating many creative tasks.', cons: 'Key features are limited or paid; commercial rights may be restricted on free tier.', link: 'https://www.canva.com/magic-studio/' },
    { id: 'adobespeech', name: 'Adobe Speech Enhancer', category: 'Audio Processing', icon: '🎙️', shortDesc: 'Cleans up spoken audio by removing noise and echo.', limitSummary: '1 hour / day', capabilities: 'Uses AI to isolate the speech track in an audio file, dramatically improving clarity to sound like a studio recording. It is very user-friendly and web-based.', free_limits: 'Limited to 1 hour of enhancement per day, with a max file duration of 30 minutes and size of 500 MB. Files must be processed one at a time.', pros: 'Incredibly useful for podcasters and content creators to get high-quality audio easily.', cons: 'Enhancement is applied at 100% intensity with no fine-tuning controls.', link: 'https://podcast.adobe.com/enhance' },
    { id: 'vocalremover', name: 'Vocal Remover', category: 'Audio Processing', icon: '🎤', shortDesc: 'Separates vocals from music to create karaoke tracks.', limitSummary: '10 min duration / file', capabilities: 'A completely free tool that uses AI to split audio tracks into instrumental (karaoke) and acapella (vocals only) versions. Processing is very fast, taking about 10 seconds per song.', free_limits: 'Limited to processing one file at a time, with a maximum duration of 10 minutes.', pros: 'A high-quality, fast, and cost-free tool for audio editors and hobbyists.', cons: 'Supports only MP3 and WAV for output, with a strict duration limit.', link: 'https://vocalremover.org/' },
    { id: 'mubert', name: 'Mubert', category: 'Audio Processing', icon: '🎵', shortDesc: 'Generates royalty-free music from text prompts.', limitSummary: 'Attribution required for use', capabilities: 'Creates original music tracks based on prompts describing mood, genre, and duration. It can also generate music based on a reference audio example.', free_limits: 'Allows generation and use of MP3 tracks for personal, non-commercial projects, provided a link to mubert.com is added wherever the music is used (e.g., "Music by mubert.com" in video descriptions).', pros: 'Useful for quickly generating background audio without copyright issues.', cons: 'Music can sometimes lack human creativity; mobile app can be buggy.', link: 'https://mubert.com/' },
    { id: 'suno', name: 'Suno AI', category: 'Audio Processing', icon: '🎶', shortDesc: 'Creates full songs with vocals from text prompts.', limitSummary: '10 songs / day (no commercial rights)', capabilities: 'Generates complete songs—including vocals, lyrics, and music—in multiple languages from a simple text description. Users can provide their own lyrics in "Custom Mode."', free_limits: 'Provides 50 credits daily, enough for about 10 songs. Does not grant commercial use rights; copyright ownership for generated music remains with Suno AI.', pros: 'Innovative and fun for creating unique songs without musical knowledge.', cons: 'Ownership of music is retained by Suno on the free tier; occasional errors reported.', link: 'https://www.suno.ai/' },
    { id: 'veed', name: 'VEED.IO', category: 'Video Creation & Editing', icon: '📹', shortDesc: 'Complete AI video production studio with many tools.', limitSummary: 'Watermarked exports, 10 min length', capabilities: 'Offers a wide range of AI-powered video tools, including a screen recorder, teleprompter, webcam recorder, and a slides-to-video converter. AI-powered features include Auto Subtitle Generator, AI Avatars, Text to Video AI, Magic Cut, and background noise removal.', free_limits: 'Exports include a VEED watermark and are limited to 720p. Max video length is 10 minutes. Monthly limits on subtitles (30 min) and storage (2GB). AI avatars and voice translation features are available for 1 minute each per month.', pros: 'Simple interface with highly accurate auto-subtitle generation. Suitable for social media, presentations, and fast rendering.', cons: 'Watermarking is a major drawback; can lag or crash with large files. Templates can be labor-intensive to customize.', link: 'https://www.veed.io/' },
    { id: 'invideo', name: 'Invideo AI', category: 'Video Creation & Editing', icon: '🎬', shortDesc: 'Edit videos using simple text commands.', limitSummary: 'Watermarked exports, 10 min/week', capabilities: 'Allows users to edit videos with natural language commands. Features include text-to-video conversion, AI-powered templates, and human-sounding AI voice-overs.', free_limits: 'Limited to 10 video minutes and 4 exports per week. Exports include both Invideo and stock media watermarks. 10GB storage. Generative features are not available in the free plan.', pros: 'User-friendly with a large template library and fast rendering. Human-sounding voiceovers are a significant advantage.', cons: 'Restrictive watermarking; AI can sometimes generate irrelevant visuals. Can experience slowdowns with complex edits or longer videos.', link: 'https://invideo.io/ai/' },
    { id: 'tabnine', name: 'Tabnine', category: 'Coding Assistance', icon: '💻', shortDesc: 'AI code completion assistant for your IDE.', limitSummary: 'Basic completions only', capabilities: 'Integrates with major IDEs to provide AI-powered code completions as you type. An integrated AI chat can answer coding questions and explain code.', free_limits: 'The free version offers only basic, short code completions based on permissively open-source licensed code. Advanced features like full-function completions and learning from your code are paid.', pros: 'Increases productivity by reducing repetitive typing and eliminating syntax errors. Strong privacy focus with offline mode and private codebase training options.', cons: 'AI-generated code may still require manual review. Most advanced features are reserved for paid plans.', link: 'https://www.tabnine.com/' },
];

// DOM Elements
const toolsGrid = document.getElementById('tools-grid');
const filtersContainer = document.getElementById('filters');
const toolDetailModal = new bootstrap.Modal(document.getElementById('toolDetailModal')); // Bootstrap Modal instance
const modalTitle = document.getElementById('toolDetailModalLabel');
const modalContentBody = document.getElementById('modal-content-body');
const toolLinkBtn = document.getElementById('toolLink');
const chartFilter = document.getElementById('chart-filter');
const darkModeToggle = document.getElementById('darkModeToggle');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

let activeFilter = 'All';
let limitsChart;

// --- Core Functions ---

// Renders AI tool cards based on the active filter
function renderTools(filter = 'All') {
    toolsGrid.innerHTML = ''; // Clear existing cards
    const filteredTools = filter === 'All' ? aiTools : aiTools.filter(tool => tool.category === filter);

    filteredTools.forEach(tool => {
        const col = document.createElement('div');
        col.className = 'col';
        col.innerHTML = `
            <div class="card h-100 p-4 d-flex flex-column" data-id="${tool.id}">
                <div class="card-body flex-grow-1">
                    <div class="d-flex justify-content-between align-items-start mb-3">
                        <h3 class="card-title h5 fw-semibold text-dark">${tool.name}</h3>
                        <span class="fs-3 text-primary">${tool.icon}</span>
                    </div>
                    <p class="card-text text-secondary mb-4">${tool.shortDesc}</p>
                </div>
                <div class="mt-auto pt-3 border-top border-light">
                    <span class="badge text-bg-warning-subtle text-primary fw-medium py-1 px-3 rounded-pill">
                       Limit: ${tool.limitSummary}
                    </span>
                </div>
            </div>
        `;
        toolsGrid.appendChild(col);
    });
}

// Creates filter buttons dynamically
function createFilters() {
    const categories = ['All', ...new Set(aiTools.map(tool => tool.category))];
    filtersContainer.innerHTML = ''; // Clear existing filters
    categories.forEach(category => {
        const button = document.createElement('button');
        button.className = `filter-btn btn btn-sm ${category === activeFilter ? 'active' : ''}`;
        button.textContent = category;
        button.dataset.filter = category;
        filtersContainer.appendChild(button);
    });
}

// Handles filter button clicks
function handleFilterClick(e) {
    const target = e.target.closest('.filter-btn');
    if (!target) return;

    activeFilter = target.dataset.filter;
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    target.classList.add('active');
    renderTools(activeFilter);
}

// Opens the Bootstrap modal with tool details
function openToolDetailModal(toolId) {
    const tool = aiTools.find(t => t.id === toolId);
    if (!tool) return;

    modalTitle.textContent = `${tool.icon} ${tool.name}`;
    modalContentBody.innerHTML = `
        <div class="row g-4">
            <div class="col-12">
                <h4 class="h6 fw-semibold text-primary mb-2">Capabilities</h4>
                <p class="text-secondary">${tool.capabilities}</p>
            </div>
            <div class="col-12">
                <h4 class="h6 fw-semibold text-primary mb-2">Free Tier Limitations</h4>
                <p class="text-secondary">${tool.free_limits}</p>
            </div>
            <div class="col-md-6">
                <div class="card h-100 p-3 border-success-subtle bg-success-subtle">
                   <h5 class="h6 fw-semibold text-success mb-1">Pros</h5>
                   <p class="card-text text-secondary small">${tool.pros}</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card h-100 p-3 border-danger-subtle bg-danger-subtle">
                   <h5 class="h6 fw-semibold text-danger mb-1">Cons</h5>
                   <p class="card-text text-secondary small">${tool.cons}</p>
                </div>
            </div>
        </div>
    `;
    toolLinkBtn.href = tool.link;
    toolDetailModal.show();
}

// Sets up the Chart.js instance
function setupChart() {
    const ctx = document.getElementById('limitsChart').getContext('2d');
    limitsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [],
            datasets: [{
                label: '',
                data: [],
                backgroundColor: 'rgba(217, 119, 6, 0.6)', // Amber-700 with transparency
                borderColor: 'rgba(217, 119, 6, 1)', // Solid Amber-700
                borderWidth: 1,
                borderRadius: 5,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false, // Allows chart to resize freely within its container
            indexAxis: 'y', // Horizontal bars
            scales: {
                x: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: ''
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)' // Light grid lines
                    },
                    ticks: {
                        color: 'var(--text-dark)'
                    }
                },
                y: {
                    ticks: {
                        autoSkip: false,
                        color: 'var(--text-dark)'
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.x !== null) {
                                label += context.parsed.x + ' ' + context.dataset.unit;
                            }
                            return label;
                        }
                    }
                }
            }
        }
    });
}

// Updates the chart data based on category selection
function updateChart(category) {
    let data, unit, label;

    switch (category) {
        case 'image':
            data = aiTools.filter(t => t.category === 'Image & Design' && (t.limitSummary.includes('images') || t.limitSummary.includes('credits')))
                          .map(t => ({ label: t.name, value: parseInt(t.limitSummary) }));
            unit = 'per day/week';
            label = 'Image/Credit Limit';
            break;
        case 'audio':
             data = [
                { label: 'Adobe Speech Enhancer', value: 60 }, // 1 hour = 60 minutes
                { label: 'Vocal Remover', value: 10 },
                { label: 'Mubert', value: 1 }, // Assuming 1 track per attribution required for free tier
                { label: 'Suno AI', value: 10 }, // 10 songs
            ];
            unit = 'minutes / songs / tracks per day';
            label = 'Audio Limit';
            break;
        case 'video':
            data = [
                { label: 'VEED.IO', value: 10 },
                { label: 'Invideo AI', value: 10 }, // 10 mins per week
            ];
            unit = 'minutes per week/export';
            label = 'Video Limit';
            break;
        case 'text':
        default:
            data = [
                { label: 'Copy.ai', value: 2000 },
                { label: 'Typli.ai', value: 10000 },
                { label: 'Wordtune', value: 10 }, // Rewrites
                { label: 'Voila AI', value: 250 }, // Requests
                { label: 'Grammarly', value: 100 } // AI prompts
            ];
            unit = 'words/requests/prompts per month/day';
            label = 'Text/Request Limit';
    }

    limitsChart.data.labels = data.map(d => d.label);
    limitsChart.data.datasets[0].data = data.map(d => d.value);
    limitsChart.data.datasets[0].label = label;
    limitsChart.data.datasets[0].unit = unit;
    limitsChart.options.scales.x.title.text = `${label} (${unit})`;

    // Update chart colors for dark mode if active
    const isDarkMode = document.body.classList.contains('dark-mode');
    limitsChart.data.datasets[0].backgroundColor = isDarkMode ? 'rgba(245, 158, 11, 0.6)' : 'rgba(217, 119, 6, 0.6)';
    limitsChart.data.datasets[0].borderColor = isDarkMode ? 'rgba(245, 158, 11, 1)' : 'rgba(217, 119, 6, 1)';
    
    // Update grid and tick colors based on theme
    limitsChart.options.scales.x.grid.color = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)';
    limitsChart.options.scales.y.grid.color = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)';
    limitsChart.options.scales.x.ticks.color = isDarkMode ? 'var(--text-dark)' : 'var(--text-dark)';
    limitsChart.options.scales.y.ticks.color = isDarkMode ? 'var(--text-dark)' : 'var(--text-dark)';


    limitsChart.update();
}

// Toggles dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    // Store user preference
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
    } else {
        localStorage.setItem('theme', 'light');
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
    }
    // Update chart colors immediately on theme change
    updateChart(chartFilter.value);
}

// Smooth scroll to section and update active nav link
function navigateToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop - document.querySelector('.navbar').offsetHeight, // Adjust for fixed header
            behavior: 'smooth'
        });

        // Update active class on nav links
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
                link.classList.add('active');
            }
        });
    }
}

// --- Event Listeners ---
document.addEventListener('DOMContentLoaded', () => {
    // Initialize filters and tools
    createFilters();
    renderTools();
    setupChart();
    updateChart('text'); // Initial chart load

    // Apply saved theme preference
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
    } else {
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
    }

    // Event listeners
    filtersContainer.addEventListener('click', handleFilterClick);

    toolsGrid.addEventListener('click', (e) => {
        const card = e.target.closest('.card');
        if (card) {
            openToolDetailModal(card.dataset.id);
        }
    });

    chartFilter.addEventListener('change', (e) => updateChart(e.target.value));

    darkModeToggle.addEventListener('click', toggleDarkMode);

    // Navbar navigation click listener for smooth scrolling
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1); // Get section ID without '#'
            navigateToSection(targetId);
        });
    });

    // Handle initial scroll to section if hash is present in URL
    if (window.location.hash) {
        navigateToSection(window.location.hash.substring(1));
    }
});

// Optional: Update active nav link on scroll
window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + document.querySelector('.navbar').offsetHeight + 10; // Add some offset

    document.querySelectorAll('section').forEach(section => {
        if (section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${section.id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});
