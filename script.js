// Government portals data with comprehensive list of schemes and laws
const portals = [
    // Governance & Law
    {
        name: "Fundamental Rights (Articles 12-35)",
        url: "https://www.india.gov.in/my-government/indian-constitution/constitution-india/fundamental-rights",
        description: "Fundamental rights guaranteed by the Constitution of India including Right to Equality, Right to Freedom, Right against Exploitation, Right to Freedom of Religion, Cultural and Educational Rights, and Right to Constitutional Remedies.",
        category: "governance"
    },
    {
        name: "15 Important Articles of the Constitution",
        url: "https://www.indiatoday.in/education-today/gk-current-affairs/story/15-important-articles-of-the-constitution-every-indian-should-know-2711860-2025-04-20",
        description: "India Today explainer covering fifteen must-know constitutional articles with plain-language summaries and significance.",
        category: "governance"
    },
    {
        name: "Fundamental Rights: Citizens vs. Non-Citizens",
        url: "https://www.drishtijudiciary.com/to-the-point/ttp-constitution-of-india/fundamental-rights-available-to-citizens-and-non-citizens",
        description: "Drishti Judiciary quick notes detailing which fundamental rights apply to citizens, non-citizens, or both.",
        category: "governance"
    },
    {
        name: "Fundamental Rights – BYJU'S",
        url: "https://byjus.com/free-ias-prep/fundamental-rights/",
        description: "Concise IAS prep notes on the scope, features, and landmark cases related to fundamental rights.",
        category: "governance"
    },
    {
        name: "Fundamental Rights of Indian Citizens",
        url: "https://www.indiafilings.com/learn/fundamental-rights-of-indian-citizen/",
        description: "IndiaFilings guide summarizing each fundamental right, related articles, and protections offered.",
        category: "governance"
    },
    {
        name: "Fundamental Rights – Vajiram & Ravi",
        url: "https://vajiramandravi.com/upsc-exam/fundamental-rights/",
        description: "UPSC-focused overview with constitutional provisions, exceptions, and exam pointers.",
        category: "governance"
    },
    {
        name: "Fundamental Rights in India (Wikipedia)",
        url: "https://en.wikipedia.org/wiki/Fundamental_rights_in_India",
        description: "Comprehensive Wikipedia article covering history, classification, and amendments of fundamental rights.",
        category: "governance"
    },
    {
        name: "Fundamental Duties – StudyIQ",
        url: "https://www.studyiq.com/articles/fundamental-duties/",
        description: "StudyIQ breakdown of Article 51A duties, background of the 42nd Amendment, and key FAQs.",
        category: "governance"
    },
    {
        name: "Fundamental Duties of an Indian Citizen",
        url: "https://vajiramandravi.com/current-affairs/fundamental-duties-of-an-indian-citizen/",
        description: "Editorial-style note linking fundamental duties with recent current affairs and exam-ready pointers.",
        category: "governance"
    },
    {
        name: "11 Fundamental Duties – Next IAS",
        url: "https://www.nextias.com/blog/fundamental-duties/",
        description: "Next IAS article listing all 11 fundamental duties with memory aids and constitutional references.",
        category: "governance"
    },
    {
        name: "Fundamental Duties – Drishti Judiciary",
        url: "https://www.drishtijudiciary.com/to-the-point/ttp-constitution-of-india/fundamental-duties",
        description: "Point-wise coverage of Article 51A duties, their importance, and Supreme Court observations.",
        category: "governance"
    },
    {
        name: "Fundamental Duties Handbook (PDF)",
        url: "https://judiciary.karnataka.gov.in/kjablr/assets/articles/FundamentalDuties.pdf",
        description: "Karnataka Judiciary booklet detailing each fundamental duty with constitutional references.",
        category: "governance"
    },
    {
        name: "Right to Information Act, 2005",
        url: "https://rti.gov.in/",
        description: "Empowers citizens to request information from public authorities, promoting transparency and accountability in government functioning.",
        category: "governance"
    },
    {
        name: "RTI Act 2005 (Official PDF)",
        url: "https://rti.gov.in/RTI%20Act,%202005%20(Amended)-English%20Version.pdf",
        description: "Authoritative text of the amended RTI Act for reference and citation.",
        category: "governance"
    },
    {
        name: "Impact of RTI on Transparency",
        url: "http://psychologyandeducation.net/pae/index.php/pae/article/download/7787/6175",
        description: "Empirical study evaluating RTI's effect on transparency and accountability in governance.",
        category: "governance"
    },
    {
        name: "RTI & Ancient Indian Culture",
        url: "http://juniperpublishers.com/asm/pdf/ASM.MS.ID.555593.pdf",
        description: "Paper linking RTI principles with ancient Indian traditions of information sharing.",
        category: "governance"
    },
    {
        name: "RTI Dispute Resolution Mechanisms",
        url: "https://www.substantivejustice.id/index.php/sucila/article/download/122/55",
        description: "Comparative study on improving dispute resolution for public information requests.",
        category: "governance"
    },
    {
        name: "RTI Act, 2005 – SEBI",
        url: "https://www.sebi.gov.in/rti-act-2005.html",
        description: "SEBI information corner explaining RTI provisions, contact points, and disclosure obligations for market regulators.",
        category: "governance"
    },
    {
        name: "10 Laws Every Indian Should Know",
        url: "https://narendrasinghsolanki.com/2024/08/22/10-laws-every-indian-should-be-aware-of/",
        description: "Blog rundown of ten essential Indian laws, their scope, and why awareness matters for citizens.",
        category: "governance"
    },
    {
        name: "Important Rights & Laws – FreeLaw",
        url: "https://www.freelaw.in/legalarticles/Important-Rights-and-Laws-Every-Indian-should-know",
        description: "FreeLaw article highlighting key constitutional rights and everyday legal safeguards for Indians.",
        category: "governance"
    },
    {
        name: "Important Rights & Laws – Lloyd Law College",
        url: "https://www.lloydlawcollege.edu.in/blog/important-rights-and-laws-every-indian-should-know.html",
        description: "Lloyd Law College blog summarizing essential rights and protections every citizen should be aware of.",
        category: "governance"
    },
    {
        name: "19 Laws & Rights Every Indian Must Know",
        url: "https://www.vedantu.com/general-knowledge/19-laws-and-rights-must-be-known-to-every-indian",
        description: "Vedantu explainer covering nineteen crucial laws with real-life applicability.",
        category: "governance"
    },
    {
        name: "Top 10 Important Laws – Toprankers",
        url: "https://www.toprankers.com/important-laws-that-every-one-should-know",
        description: "Toprankers list highlighting ten fundamental Indian laws with exam-friendly notes.",
        category: "governance"
    },
    {
        name: "Important Rights & Laws – LinkedIn Insight",
        url: "https://www.linkedin.com/pulse/important-rights-laws-every-indian-should-know-sharma-phd-dhc-itwxc",
        description: "LinkedIn article distilling key rights and how citizens can invoke them in daily life.",
        category: "governance"
    },
    {
        name: "Know India – Fundamental Rights",
        url: "https://knowindia.india.gov.in/profile/fundamental-rights.php",
        description: "Official Know India profile describing each fundamental right with historical context.",
        category: "governance"
    },
    {
        name: "World Report 2025: India",
        url: "https://www.hrw.org/world-report/2025/country-chapters/india",
        description: "Human Rights Watch assessment covering civil liberties, minority rights, and governance trends in 2025.",
        category: "governance"
    },
    {
        name: "7 Priorities for India's Government in 2025",
        url: "https://www.youtube.com/watch?v=cIGL52QomiM",
        description: "Video explainer outlining key governance and policy priorities for the year 2025.",
        category: "governance"
    },
    {
        name: "Protection of Women from Domestic Violence Act, 2005",
        url: "https://wcd.nic.in/acts/protection-women-domestic-violence-act-2005",
        description: "Provides protection to women from domestic violence including physical, emotional, verbal, sexual, and economic abuse.",
        category: "governance"
    },
    {
        name: "Domestic Violence Act – Tamil Nadu Social Welfare",
        url: "https://www.tnsocialwelfare.tn.gov.in/en/social-legislations/protection-of-womens-from-domestic-violence-act",
        description: "State social welfare portal offering helplines, protection officer contacts, and application steps.",
        category: "governance"
    },
    {
        name: "Domestic Violence – International Perspectives",
        url: "https://research-information.bris.ac.uk/ws/files/84185199/Solanki_Gangoli_Defining_Domestic_Violence_and_Women_s_Autonomy_in_Law.pdf",
        description: "Comparative legal study on defining domestic violence and women's autonomy.",
        category: "governance"
    },
    {
        name: "Domestic Violence Act – IndiaCode Portal",
        url: "https://www.indiacode.nic.in/handle/123456789/2021",
        description: "India Code portal page with amendments, notifications, and downloads for the Act.",
        category: "governance"
    },
    {
        name: "Domestic Violence Act – Odisha Portal",
        url: "https://cdnbbsr.s3waas.gov.in/s3ec03333cb763facc6ce398ff83845f22/uploads/2024/09/2024091127.pdf",
        description: "Regional resource summarizing provisions and local support structures under the Act.",
        category: "governance"
    },
    {
        name: "Domestic Violence Act – State & NGO Partnerships",
        url: "http://ojs.pnb.ac.id/index.php/SOSHUM/article/download/1429/1095",
        description: "Research on collaborative intervention models involving state agencies and NGOs.",
        category: "governance"
    },
    {
        name: "Legal Awareness to Combat Violence",
        url: "http://www.scirp.org/journal/PaperDownload.aspx?paperID=59686",
        description: "Article emphasizing legal literacy as a tool for women facing violence.",
        category: "governance"
    },
    {
        name: "Defining Domestic Violence & Autonomy",
        url: "https://research-information.bris.ac.uk/ws/files/84185199/Solanki_Gangoli_Defining_Domestic_Violence_and_Women_s_Autonomy_in_Law.pdf",
        description: "Scholarly examination of how law conceptualizes domestic violence and women's autonomy.",
        category: "governance"
    },
    {
        name: "Domestic Violence in India – IJFMR",
        url: "https://www.ijfmr.com/papers/2024/5/29156.pdf",
        description: "Recent IJFMR paper detailing key challenges in combating domestic violence.",
        category: "governance"
    },
    {
        name: "IPV During COVID-19",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7365082/",
        description: "Medical review of intimate partner violence trends during the pandemic.",
        category: "governance"
    },
    {
        name: "Violence Against Women & Early Marriage",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8608238/",
        description: "Gynecologists’ survey on violence and early marriage in India.",
        category: "governance"
    },
    {
        name: "IPV in India – Patterns & Causes",
        url: "https://ijsra.net/sites/default/files/IJSRA-2024-0930.pdf",
        description: "Study identifying causes and prevention strategies for intimate partner violence.",
        category: "governance"
    },
    {
        name: "Help-seeking for IPV – NFHS Data",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9764516/",
        description: "Analysis of formal help-seeking patterns using NFHS-3 and NFHS-4 data.",
        category: "governance"
    },
    {
        name: "Domestic Violence Act – UN Women Database",
        url: "https://data.unwomen.org/global-database-on-violence-against-women/country-profile/India/measures/Protection%20of%20Women%20from%20Domestic%20Violence%20Act",
        description: "UN Women profile summarizing India's domestic violence legislation and enforcement status.",
        category: "governance"
    },
    {
        name: "Scheduled Caste and Scheduled Tribe (Prevention of Atrocities) Act, 1989",
        url: "https://socialjustice.gov.in/SCST/acts",
        description: "Prevents atrocities against members of Scheduled Castes and Scheduled Tribes and provides for special courts for the trial of such offenses.",
        category: "governance"
    },
    {
        name: "SC/ST (Prevention of Atrocities) Act (Wikipedia)",
        url: "https://en.wikipedia.org/wiki/Scheduled_Caste_and_Scheduled_Tribe_(Prevention_of_Atrocities)_Act,_1989",
        description: "Wikipedia coverage of objectives, offenses, and amendments to the SC/ST (PoA) Act.",
        category: "governance"
    },
    {
        name: "SC/ST (PoA) Act – India Code PDF",
        url: "http://tribal.nic.in/actRules/SCSTpoaact1989.pdf",
        description: "Full India Code PDF of the SC/ST (PoA) Act with amendments.",
        category: "governance"
    },
    {
        name: "SC/ST Act – Govt. Compendium",
        url: "https://www.indiacode.nic.in/bitstream/123456789/15338/1/scheduled_castes_and_the_scheduled_tribes.pdf",
        description: "Comprehensive compendium on SC/ST protections and provisions.",
        category: "governance"
    },
    {
        name: "PoA Act Quick Reference",
        url: "https://anagrasarkalyan.gov.in/documnts/07-07-2017-09-57-52.pdf",
        description: "Highlights key sections and procedures under the Prevention of Atrocities Act.",
        category: "governance"
    },
    {
        name: "SC/ST (PoA) Act – CVMC",
        url: "https://www.cvmc.in/about/",
        description: "Community Vigilance Monitoring Committee page outlining awareness initiatives and grievance support under the Act.",
        category: "governance"
    },
    {
        name: "SC/ST (PoA) Act – Vajiram & Ravi",
        url: "https://vajiramandravi.com/current-affairs/scheduled-caste-and-scheduled-tribe-prevention-of-atrocities-act-1989/",
        description: "Current affairs summary highlighting recent amendments, statistics, and exam angles.",
        category: "governance"
    },
    {
        name: "Diversity & Inclusion for Innovation-led Growth",
        url: "https://www.qeios.com/read/XZUPSA/pdf",
        description: "Research paper discussing inclusive policies that spur innovation in Indian organizations.",
        category: "governance"
    },
    {
        name: "National Public Health Act – Need for Legislation",
        url: "https://www.ijfmr.com/papers/2023/3/4029.pdf",
        description: "Policy paper arguing for a comprehensive national public health law in India.",
        category: "governance"
    },
    {
        name: "SDG-5: Gender Equality Progress & Hurdles",
        url: "https://www.ijfmr.com/papers/2024/2/16046.pdf",
        description: "IJFMR analysis of India's progress and challenges toward Sustainable Development Goal 5.",
        category: "governance"
    },
    {
        name: "Impact of RTI on Transparency",
        url: "http://psychologyandeducation.net/pae/index.php/pae/article/download/7787/6175",
        description: "Empirical study evaluating RTI's effect on transparency and accountability in governance.",
        category: "governance"
    },
    {
        name: "Climate Change Policy – G20 Presidency",
        url: "https://www.ijfmr.com/papers/2023/3/3695.pdf",
        description: "Paper examining India's climate commitments and opportunities during its G20 presidency.",
        category: "governance"
    },
    {
        name: "India's COVID-19 Resurgence – Urgent Actions",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8148651/",
        description: "Medical commentary recommending governance and health-system measures during the 2021 wave.",
        category: "governance"
    },
    {
        name: "Consumer Protection Act, 2019",
        url: "https://consumeraffairs.gov.in/act-and-rules/consumer-protection-act",
        description: "Protects consumers from unfair trade practices and establishes consumer dispute redressal commissions at district, state, and national levels.",
        category: "governance"
    },
    {
        name: "Consumer Protection Act – 2025 Amendments",
        url: "https://sklegalconsultancy.in/consumer-protection-act-2025/",
        description: "SK Legal explainer on the latest consumer protection amendments, new penalties, and e-commerce obligations.",
        category: "governance"
    },
    {
        name: "Consumer Protection Act in India – STA Law",
        url: "https://www.stalawfirm.com/en/blogs/view/consumer-protection-act-in-india.html",
        description: "Law firm blog covering consumer dispute forums, filing process, and recent case studies.",
        category: "governance"
    },
    {
        name: "Consumer Protection Law in Digital Age",
        url: "https://acr-journal.com/article/consumer-protection-law-in-india-challenges-and-prospects-in-the-digital-age-1544/",
        description: "Academic review discussing consumer protection enforcement amid rapid digitization.",
        category: "governance"
    },
    {
        name: "Consumer Protection Acts Portal",
        url: "https://consumeraffairs.gov.in/pages/consumer-protection-acts",
        description: "Official list of all consumer protection laws, rules, and notifications.",
        category: "governance"
    },
    {
        name: "World Consumer Rights Day 2025",
        url: "https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/mar/doc2025314520301.pdf",
        description: "PIB note on the 2025 theme and initiatives for consumer rights.",
        category: "governance"
    },
    {
        name: "E-Commerce Laws in India (2025 Guide)",
        url: "https://www.lloydlawcollege.edu.in/blog/ecommerce-laws-india-2025-consumer-guide.html",
        description: "Lloyd Law College guide detailing 2025 consumer protections for online marketplaces and digital sellers.",
        category: "governance"
    },
    {
        name: "Prevention of Corruption Act, 1988",
        url: "https://www.indiacode.nic.in/bitstream/123456789/15302/1/pc_act,_1988.pdf",
        description: "An Act to consolidate and amend the law relating to the prevention of corruption and for matters connected therewith.",
        category: "governance"
    },
    {
        name: "Anti-Corruption Laws Compendium",
        url: "https://www.mcrhrdi.gov.in/Group12012/Anti-Corruption%20Laws%20in%20India.pdf",
        description: "Training compendium summarizing India's anti-corruption statutes and procedures.",
        category: "governance"
    },
    {
        name: "Prevention of Corruption Act (Wikipedia)",
        url: "https://en.wikipedia.org/wiki/Prevention_of_Corruption_Act,_1988",
        description: "Wikipedia summary covering the statute's evolution, key amendments, and enforcement agencies.",
        category: "governance"
    },
    {
        name: "Corruption Laws in India – PRS",
        url: "https://prsindia.org/files/parliament/discussion_papers/1302844978_PRS%20Note%20on%20corruption%20laws.pdf",
        description: "PRS legislative brief comparing PCA with allied anti-corruption laws and proposed reforms.",
        category: "governance"
    },
    {
        name: "Environment Protection Act, 1986",
        url: "https://www.indiacode.nic.in/bitstream/123456789/4316/1/ep_act_1986.pdf",
        description: "An Act to provide for the protection and improvement of environment and for matters connected therewith.",
        category: "governance"
    },
    {
        name: "Environment (Protection) Act PDF",
        url: "https://www.indiacode.nic.in/bitstream/123456789/6196/1/the_environment_protection_act,1986.pdf",
        description: "Alternate India Code PDF for quick reference to EPA provisions.",
        category: "governance"
    },
    {
        name: "Environment Protection Act (Wikipedia)",
        url: "https://en.wikipedia.org/wiki/Environment_Protection_Act,_1986",
        description: "Wikipedia entry outlining the Act's background, powers, and implementation timeline.",
        category: "governance"
    },
    {
        name: "Environment Act – Greenleaf Envirotech",
        url: "https://greenleafenvirotech.in/the-umbrella-act-environment-protection-act-1986/",
        description: "Article explaining why the EPA is called the umbrella legislation and how industries must comply.",
        category: "governance"
    },
    {
        name: "Environment Act – iPleaders",
        url: "https://blog.ipleaders.in/environment-protection-act-1986-2/",
        description: "Detailed legal analysis of EPA provisions, penalties, and landmark judgments.",
        category: "governance"
    },
    {
        name: "Environment Act – Drishti IAS",
        url: "https://www.drishtiias.com/paper3/environment-protection-act-1986",
        description: "UPSC-oriented note summarizing salient features, amendments, and exam pointers.",
        category: "governance"
    },
    // Employment
    {
        name: "Mahatma Gandhi NREGA (MGNREGA)",
        url: "https://nrega.nic.in/",
        description: "Guarantees 100 days of wage employment in a financial year to rural households whose adult members volunteer to do unskilled manual work.",
        category: "employers"
    },
    {
        name: "MGNREGA – Wikipedia",
        url: "https://en.wikipedia.org/wiki/Mahatma_Gandhi_National_Rural_Employment_Guarantee_Act,_2005",
        description: "Wikipedia entry covering the origins, funding, and impact assessments of the MGNREGA programme.",
        category: "employment"
    },
    {
        name: "MGNREGA – Jamshedpur District",
        url: "https://jamshedpur.nic.in/scheme/mahatma-gandhi-national-rural-employment-guarantee-act-mgnrega/",
        description: "District portal detailing eligibility, works undertaken, and contact info for MGNREGA implementation in Jamshedpur.",
        category: "employment"
    },
    {
        name: "MGNREGA – Uttarakhand",
        url: "https://ukrd.uk.gov.in/scheme/mahatma-gandhi-national-rural-employment-guarantee-act/",
        description: "Uttarakhand Rural Development portal describing scheme benefits, process, and status tracking.",
        category: "employment"
    },
    {
        name: "MGNREGS – Haryana",
        url: "https://haryanarural.gov.in/mahatma-gandhi-national-rural-employment-guarantee-scheme-mgnregs/",
        description: "Haryana rural portal summarizing guidelines, circulars, and progress dashboards for the scheme.",
        category: "employment"
    },
    {
        name: "MGNREGA – Tamil Nadu Rural Development",
        url: "https://www.tnrd.tn.gov.in/schemes/cen_nrega_13.html",
        description: "Tamil Nadu Rural Development page with scheme overview, job card info, and district-level assets.",
        category: "employment"
    },
    {
        name: "Minimum Wages Act, 1948",
        url: "https://labour.gov.in/wage-policy",
        description: "Fixes minimum rates of wages in certain employments to prevent exploitation of workers and ensure a minimum standard of living.",
        category: "employment"
    },
    {
        name: "Rights under Minimum Wages Act (PDF)",
        url: "https://cnlu.ac.in/wp-content/uploads/2025/04/Rights-Of-Employees-Employer-In-Reference-With-Minimum-Wages-Act-1948-by-Kalp-Aggarwal.pdf",
        description: "CNLU research paper detailing rights and obligations of employees and employers under the Act.",
        category: "employment"
    },
    {
        name: "Minimum Wages & Salary Structures – India Guide",
        url: "https://www.india-briefing.com/doing-business-guide/india/human-resources-and-payroll/minimum-wage",
        description: "India Briefing guide explaining minimum wage bands, compliance steps, and payroll structuring.",
        category: "employment"
    },
    {
        name: "Minimum Wages in India – iPleaders",
        url: "https://blog.ipleaders.in/minimum-salary-in-india-as-per-labour-law/",
        description: "Article summarizing minimum wage applicability across sectors and states with legal references.",
        category: "employment"
    },
    {
        name: "Minimum Wages Act 1948 – ClearTax",
        url: "https://cleartax.in/s/minimum-wages-act",
        description: "ClearTax explainer covering rules, applicability, and penalties for non-compliance.",
        category: "employment"
    },
    {
        name: "Employees' Provident Fund (EPF)",
        url: "https://www.epfindia.gov.in/",
        description: "Retirement benefits scheme for employees in the organized sector providing financial security during retirement.",
        category: "employment"
    },
    {
        name: "Employees' State Insurance (ESI)",
        url: "https://www.esic.nic.in/",
        description: "Self-financing social security and health insurance scheme for Indian workers providing medical and cash benefits.",
        category: "employment"
    },
    {
        name: "Payment of Gratuity Act, 1972",
        url: "https://labour.gov.in/payment-gratuity-act-1972-0",
        description: "Provides for payment of gratuity to employees after they complete five years of continuous service in an establishment.",
        category: "employment"
    },
    // Technology & Education
    {
        name: "Digital India",
        url: "https://digitalindia.gov.in/",
        description: "A flagship program to transform India into a digitally empowered society and knowledge economy.",
        category: "technology"
    },
    {
        name: "SWAYAM (Study Webs of Active Learning)",
        url: "https://swayam.gov.in/",
        description: "Offers online courses from school to post-graduation level for students, teachers, and lifelong learners.",
        category: "students"
    },
    {
        name: "Aadhaar",
        url: "https://uidai.gov.in/",
        description: "A 12-digit unique identity number issued to Indian residents based on their biometric and demographic data.",
        category: "technology"
    },
    {
        name: "Aadhaar Biometric Authentication – Protean",
        url: "https://www.proteantech.in/articles/aadhaar-biometric-authentication-02-06-2025/",
        description: "Article describing how Aadhaar-based biometric authentication is modernizing service delivery.",
        category: "technology"
    },
    {
        name: "Aadhaar Risks – PMC Article",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5741784/",
        description: "Scholarly critique discussing privacy and exclusion concerns in Aadhaar implementation.",
        category: "technology"
    },
    {
        name: "Aadhaar Act 2016 (PDF)",
        url: "https://uidai.gov.in/images/Aadhaar_Act_2016_as_amended.pdf",
        description: "Official PDF of the Aadhaar Act as amended, including authentication and data protection clauses.",
        category: "technology"
    },
    {
        name: "UIDAI Biometric Devices",
        url: "https://uidai.gov.in/en/ecosystem/authentication-devices-documents/biometric-devices.html",
        description: "UIDAI page listing certified biometric devices and specifications for authentication ecosystem partners.",
        category: "technology"
    },
    {
        name: "Aadhaar Press Release – PIB",
        url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2067940",
        description: "PIB note highlighting Aadhaar's scale, innovations, and social impact metrics.",
        category: "technology"
    },
    {
        name: "Make in India – Overview PDF",
        url: "https://mea.gov.in/Images/attach/Make_in_India_Initiative.pdf",
        description: "MEA brochure detailing objectives, focus sectors, and investment facilitation under Make in India.",
        category: "technology"
    },
    {
        name: "Make in India – PIB Press Note",
        url: "https://www.pib.gov.in/PressNoteDetails.aspx?NoteId=153203&ModuleId=3",
        description: "PIB note on reforms accelerating India's manufacturing competitiveness.",
        category: "technology"
    },
    {
        name: "Make in India – PM India Portal",
        url: "https://www.pmindia.gov.in/en/major_initiatives/make-in-india/",
        description: "Prime Minister's website summarizing achievements, policy pillars, and investor resources.",
        category: "technology"
    },
    {
        name: "Make in India (Wikipedia)",
        url: "https://en.wikipedia.org/wiki/Make_in_India",
        description: "Wikipedia article covering program history, milestones, and critiques.",
        category: "technology"
    },
    {
        name: "Make in India – IBEF",
        url: "https://www.ibef.org/economy/make-in-india",
        description: "IBEF insight on sector-wise opportunities, FDI flows, and state initiatives under Make in India.",
        category: "technology"
    },
    {
        name: "Make in India – BYJU'S",
        url: "https://byjus.com/free-ias-prep/make-in-india/",
        description: "BYJU'S UPSC prep note detailing objectives, advantages, and challenges of the Make in India mission.",
        category: "technology"
    },
    {
        name: "National Education Policy 2020 – Opportunities",
        url: "https://www.ijfmr.com/papers/2023/3/4133.pdf",
        description: "Paper analyzing opportunities and challenges in rolling out NEP 2020 reforms.",
        category: "technology"
    },
    {
        name: "National Digital Health Mission (NDHM)",
        url: "https://ndhm.gov.in/",
        description: "Aims to create a national digital health ecosystem that supports universal health coverage in an efficient, accessible, and affordable manner.",
        category: "technology"
    },
    // Citizen Services
    {
        name: "Pradhan Mantri Jan Dhan Yojana (PMJDY)",
        url: "https://pmjdy.gov.in/",
        description: "National Mission for Financial Inclusion to ensure access to financial services like banking, insurance, and pension.",
        category: "welfare"
    },
    {
        name: "PMJDY (Wikipedia)",
        url: "https://en.wikipedia.org/wiki/Pradhan_Mantri_Jan_Dhan_Yojana",
        description: "Wikipedia summary covering scheme launch, coverage stats, and milestones.",
        category: "citizen"
    },
    {
        name: "11 Years of PMJDY – PIB",
        url: "https://www.pib.gov.in/PressNoteDetails.aspx?NoteId=155102&ModuleId=3",
        description: "PIB note highlighting financial inclusion gains and new features after 11 years of PMJDY.",
        category: "citizen"
    },
    {
        name: "PMJDY – PM India Portal",
        url: "https://www.pmindia.gov.in/en/major_initiatives/pradhan-mantri-jan-dhan-yojana/",
        description: "Prime Minister's site detailing mission pillars, achievements, and citizen benefits.",
        category: "citizen"
    },
    {
        name: "PMJDY Scheme Details",
        url: "https://www.pmjdy.gov.in/scheme",
        description: "Official scheme page covering eligibility, account features, and insurance covers.",
        category: "citizen"
    },
    {
        name: "Ayushman Bharat - Pradhan Mantri Jan Arogya Yojana (AB-PMJAY)",
        url: "https://pmjay.gov.in/",
        description: "World's largest health insurance scheme providing health coverage of ₹5 lakh per family per year for secondary and tertiary care hospitalization.",
        category: "welfare"
    },
    {
        name: "Goods and Services Tax (GST)",
        url: "https://www.gst.gov.in/",
        description: "A comprehensive indirect tax on the supply of goods and services throughout India, replacing multiple cascading taxes.",
        category: "citizen"
    },
    {
        name: "GST Collection Analysis FY 2022-23",
        url: "https://www.ijfmr.com/papers/2023/5/7198.pdf",
        description: "Research paper analyzing GST collections, sectoral contributions, and compliance trends.",
        category: "citizen"
    },
    {
        name: "One Nation One Tax – GST Impact",
        url: "https://www.journals.resaim.com/ijresm/article/download/391/364",
        description: "Academic article reviewing GST's macroeconomic impact and implementation challenges.",
        category: "citizen"
    },
    {
        name: "India Goods and Services Tax – Guide",
        url: "https://www.india-briefing.com/doing-business-guide/india/taxation-and-accounting/country-wise-tax-structure/goods-and-services-tax-gst",
        description: "India Briefing guide on GST registration, filing timelines, and compliance essentials for businesses.",
        category: "citizen"
    },
    {
        name: "GST Law Explained – ClearTax",
        url: "https://cleartax.in/s/gst-law-goods-and-services-tax",
        description: "ClearTax explainer covering GST rates, returns, e-invoicing, and penalties.",
        category: "citizen"
    },
    {
        name: "Pradhan Mantri Awas Yojana (PMAY)",
        url: "https://pmaymis.gov.in/",
        description: "Housing for All by 2022 mission providing affordable housing to the urban and rural poor.",
        category: "citizen"
    },
    {
        name: "Sukanya Samriddhi Yojana (SSY)",
        url: "https://www.india.gov.in/spotlight/sukanya-samriddhi-account",
        description: "Small savings scheme for the girl child that encourages parents to build a fund for the future education and marriage expenses.",
        category: "citizen"
    },
    {
        name: "Pradhan Mantri Mudra Yojana (PMMY)",
        url: "https://www.mudra.org.in/",
        description: "Provides loans up to ₹10 lakh to non-corporate, non-farm small/micro enterprises for income-generating activities.",
        category: "entrepreneurs"
    },
    {
        name: "Atal Pension Yojana (APY)",
        url: "https://www.jansamarth.in/at/apy",
        description: "Pension scheme focused on the unorganized sector workers to provide them with a fixed pension after 60 years of age.",
        category: "citizen"
    },
    {
        name: "Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY)",
        url: "https://www.jansuraksha.gov.in/",
        description: "Life insurance cover of ₹2 lakhs in case of death due to any reason for just ₹436 per year premium.",
        category: "citizen"
    },
    {
        name: "Stand Up India Scheme",
        url: "https://www.standupmitra.in/",
        description: "Facilitates bank loans between ₹10 lakh and ₹1 crore to at least one Scheduled Caste (SC) or Scheduled Tribe (ST) borrower and at least one woman borrower per bank branch for setting up a greenfield enterprise.",
        category: "entrepreneurs"
    },
    {
        name: "myScheme Portal",
        url: "https://www.myscheme.gov.in",
        description: "Government meta-portal that personalizes and surfaces eligible central and state schemes for citizens.",
        category: "citizen"
    },
    {
        name: "Income Tax Compliance Requirements",
        url: "https://www.kanakkupillai.com/learn/major-compliance-requirements-under-income-tax-india/",
        description: "Guide outlining key income-tax filings, due dates, and documentation for individuals and SMEs.",
        category: "citizen"
    },
    {
        name: "Indian Tax Law Penalties Overview",
        url: "https://www.ricago.com/blog/indian-tax-law-penalties-an-evaluation-of-compliance-risk",
        description: "Article summarizing major penalty provisions under the Income Tax Act and how to mitigate compliance risk.",
        category: "citizen"
    },
    {
        name: "Non-Resident Individual Guide (AY 2025-26)",
        url: "http://www.incometax.gov.in/iec/foportal/help/individual/return-applicable-0",
        description: "Income Tax portal help page clarifying filing categories and forms for NRIs for AY 2025-26.",
        category: "citizen"
    },
    {
        name: "Motor Vehicles Act, 1988 – Complete Guide",
        url: "https://www.royalsundaram.in/motor-101/rto/indian-motor-vehicles-act",
        description: "Royal Sundaram explainer covering licensing rules, traffic offenses, and insurance requirements under the MV Act.",
        category: "citizen"
    },
    {
        name: "Motor Vehicles Act (Wikipedia)",
        url: "https://en.wikipedia.org/wiki/Motor_Vehicles_Act",
        description: "Wikipedia entry outlining the Motor Vehicles Act evolution and major amendments including 2019 update.",
        category: "citizen"
    },
    {
        name: "Motor Vehicles Act 2019 – Reliance General",
        url: "https://www.reliancegeneral.co.in/insurance/knowledge-center/blogs/motor-vehicle-act-2019-traffic-violation-rules-and-fines.aspx",
        description: "Reliance General blog summarizing updated penalties and traffic violation rules post-2019 amendment.",
        category: "citizen"
    },
    {
        name: "Motor Vehicles Act – iPleaders",
        url: "https://blog.ipleaders.in/motor-vehicle-act-1988/",
        description: "Comprehensive breakdown of MV Act provisions, authorities, and case law.",
        category: "citizen"
    },
    {
        name: "Motor Vehicles Act – Paytm Guide",
        url: "https://paytm.com/blog/driving-licence/motor-vehicles-act-1988/",
        description: "Paytm guide listing common traffic offenses, fines, and compliance tips for drivers.",
        category: "citizen"
    },
    {
        name: "Pradhan Mantri Kisan Maan Dhan Yojana (PM-KMY)",
        url: "https://pmkmy.gov.in/",
        description: "Pension scheme for all landholding Small and Marginal Farmers (SMFs) in the country to provide them with a minimum pension of ₹3,000 per month.",
        category: "citizen"
    },
    {
        name: "Pradhan Mantri Shram Yogi Maan-dhan (PM-SYM)",
        url: "https://maandhan.in/shramyogi",
        description: "Pension scheme for unorganized sector workers providing them with an assured monthly pension of ₹3,000 from the age of 60 years.",
        category: "welfare"
    },
    
    // Karnataka State Portals
    {
        name: "BESCOM - Bangalore Electricity Supply Company",
        url: "https://www.bescom.co.in/",
        description: "Online electricity bill payment, new connection, complaint registration, and power outage reporting for Bangalore.",
        category: "karnataka-electricity"
    },
    {
        name: "BESCOM Complaint Portal",
        url: "https://www.bescom.co.in/en/complaint-registration",
        description: "Register complaints for power outages, billing issues, meter problems, and track complaint status online.",
        category: "karnataka-electricity"
    },
    {
        name: "BMTC - Bangalore Metropolitan Transport Corporation",
        url: "https://www.mybmtc.com/",
        description: "Bus pass services, route information, timings, and online ticket booking for Bangalore city buses.",
        category: "karnataka-transport"
    },
    {
        name: "KSRTC - Karnataka State Road Transport Corporation",
        url: "https://www.ksrtc.in/",
        description: "Online bus ticket booking, route information, and schedules for Karnataka state transport buses.",
        category: "karnataka-transport"
    },
    {
        name: "Karnataka One - Citizen Services Portal",
        url: "https://www.karnataka.gov.in/",
        description: "Unified portal for all Karnataka government services including certificates, licenses, and welfare schemes.",
        category: "karnataka-services"
    },
    {
        name: "Sakala Services Karnataka",
        url: "https://sakala.karnataka.gov.in/",
        description: "Time-bound delivery of government services including certificates, licenses, and various applications.",
        category: "karnataka-services"
    },
    {
        name: "Bhoomi - Karnataka Land Records",
        url: "https://landrecords.karnataka.gov.in/",
        description: "View and download land records, RTC (Record of Rights), mutation status, and property documents.",
        category: "karnataka-land"
    },
    {
        name: "Karnataka Transport Department",
        url: "https://transport.karnataka.gov.in/",
        description: "Driving license, vehicle registration, road tax payment, and transport-related services.",
        category: "karnataka-services"
    },
    
    // Defense Services
    {
        name: "Indian Army Recruitment",
        url: "https://joinindianarmy.nic.in/",
        description: "Join Indian Army - recruitment notifications, online applications, admit cards, and results for various posts.",
        category: "defense-army"
    },
    {
        name: "Indian Navy Recruitment",
        url: "https://www.joinindiannavy.gov.in/",
        description: "Indian Navy recruitment portal for officers and sailors, including application process and eligibility criteria.",
        category: "defense-navy"
    },
    {
        name: "Indian Air Force Recruitment",
        url: "https://indianairforce.nic.in/",
        description: "Join Indian Air Force - career opportunities, recruitment notifications, and online application portal.",
        category: "defense-airforce"
    },
    {
        name: "Ex-Servicemen Contributory Health Scheme (ECHS)",
        url: "https://echs.gov.in/",
        description: "Healthcare scheme for ex-servicemen and their dependents providing comprehensive medical facilities.",
        category: "defense-welfare"
    },
    
    // Educational Schemes
    {
        name: "National Scholarship Portal",
        url: "https://scholarships.gov.in/",
        description: "One-stop solution for various scholarships provided by Central and State Governments for students.",
        category: "students"
    },
    {
        name: "PM Scholarship Scheme",
        url: "https://www.ksb.gov.in/",
        description: "Scholarships for wards of ex-servicemen, ex-coast guard personnel, and police personnel killed in action.",
        category: "students"
    },
    {
        name: "Post Matric Scholarship for SC Students",
        url: "https://scholarships.gov.in/",
        description: "Financial assistance to SC students studying in post-matriculation or post-secondary stages.",
        category: "students"
    },
    {
        name: "Pre-Matric Scholarship for Minorities",
        url: "https://scholarships.gov.in/",
        description: "Scholarship scheme for students belonging to minority communities studying in classes I to X.",
        category: "students"
    },
    {
        name: "Merit-cum-Means Scholarship",
        url: "https://scholarships.gov.in/",
        description: "Scholarship for economically weaker sections of minority communities pursuing professional and technical courses.",
        category: "students"
    },
    {
        name: "AICTE Pragati Scholarship for Girls",
        url: "https://www.aicte-india.org/",
        description: "Scholarship for girl students pursuing technical education in AICTE approved institutions.",
        category: "students"
    },
    {
        name: "UGC NET - National Eligibility Test",
        url: "https://ugcnet.nta.nic.in/",
        description: "National level examination for determining eligibility for Assistant Professor and JRF in Indian universities.",
        category: "students"
    },
    {
        name: "NEET - National Eligibility cum Entrance Test",
        url: "https://neet.nta.nic.in/",
        description: "All India entrance examination for admission to undergraduate medical courses in India.",
        category: "students"
    },
    {
        name: "JEE Main - Joint Entrance Examination",
        url: "https://jeemain.nta.nic.in/",
        description: "National level engineering entrance exam for admission to NITs, IIITs, and other technical institutions.",
        category: "students"
    },
    
    // Farmer Schemes
    {
        name: "PM-KISAN - Pradhan Mantri Kisan Samman Nidhi",
        url: "https://pmkisan.gov.in/",
        description: "Income support scheme providing ₹6,000 per year to all farmer families in three equal installments.",
        category: "welfare"
    },
    {
        name: "Kisan Credit Card (KCC)",
        url: "https://www.india.gov.in/spotlight/kisan-credit-card-kcc",
        description: "Credit facility for farmers to meet short-term credit requirements for cultivation and other needs.",
        category: "entrepreneurs"
    },
    {
        name: "PM Fasal Bima Yojana",
        url: "https://pmfby.gov.in/",
        description: "Crop insurance scheme providing financial support to farmers in case of crop failure due to natural calamities.",
        category: "welfare"
    },
    {
        name: "Soil Health Card Scheme",
        url: "https://soilhealth.dac.gov.in/",
        description: "Provides soil health cards to farmers with information on nutrient status and recommendations.",
        category: "entrepreneurs"
    },
    {
        name: "e-NAM - National Agriculture Market",
        url: "https://www.enam.gov.in/",
        description: "Online trading platform for agricultural commodities connecting farmers with buyers across India.",
        category: "entrepreneurs"
    },
    {
        name: "Kisan Call Centre",
        url: "https://mkisan.gov.in/",
        description: "Toll-free helpline (1800-180-1551) providing agricultural advice and information to farmers.",
        category: "entrepreneurs"
    },
    
    // Backward Classes & Social Welfare
    {
        name: "National Commission for Backward Classes",
        url: "https://ncbc.nic.in/",
        description: "Constitutional body for safeguarding rights and interests of socially and educationally backward classes.",
        category: "governance"
    },
    {
        name: "Post Matric Scholarship for OBC Students",
        url: "https://scholarships.gov.in/",
        description: "Financial assistance to OBC students for pursuing post-matriculation studies.",
        category: "students"
    },
    {
        name: "Dr. Ambedkar Central Sector Scheme",
        url: "https://www.socialjustice.gov.in/",
        description: "Interest subsidy on educational loans for OBC students pursuing higher education.",
        category: "students"
    },
    {
        name: "National Overseas Scholarship for SC Students",
        url: "https://www.socialjustice.gov.in/",
        description: "Financial assistance for SC students to pursue higher education abroad.",
        category: "students"
    },
    {
        name: "Pre-Matric Scholarship for SC Students",
        url: "https://scholarships.gov.in/",
        description: "Scholarship for SC students studying in classes IX and X to reduce dropout rates.",
        category: "students"
    },
    
    // Identity Documents & Services
    {
        name: "Aadhaar - UIDAI Portal",
        url: "https://uidai.gov.in/",
        description: "Apply for new Aadhaar, update details, download e-Aadhaar, and check enrollment status.",
        category: "id-aadhaar"
    },
    {
        name: "Aadhaar Update Online",
        url: "https://myaadhaar.uidai.gov.in/",
        description: "Update Aadhaar details online including address, mobile number, email, and biometric information.",
        category: "id-aadhaar"
    },
    {
        name: "PAN Card - NSDL Portal",
        url: "https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html",
        description: "Apply for new PAN card, make corrections, and track application status online.",
        category: "id-pan"
    },
    {
        name: "PAN Card - UTI Portal",
        url: "https://www.utiitsl.com/UTIITSL_SITE/",
        description: "Alternative portal for PAN card application, reprint, and correction services.",
        category: "id-pan"
    },
    {
        name: "Voter ID - National Voters Service Portal",
        url: "https://www.nvsp.in/",
        description: "Apply for new voter ID, make corrections, track application, and search your name in electoral roll.",
        category: "id-voter"
    },
    {
        name: "Passport Seva - Passport Application",
        url: "https://www.passportindia.gov.in/",
        description: "Apply for new passport, renewal, and track application status through Passport Seva Kendra.",
        category: "id-passport"
    },
    {
        name: "Driving License Online Application",
        url: "https://parivahan.gov.in/parivahan/",
        description: "Apply for learning license, permanent driving license, and renewal services online.",
        category: "id-driving"
    },
    {
        name: "Vehicle Registration - Parivahan",
        url: "https://vahan.parivahan.gov.in/",
        description: "Vehicle registration, RC transfer, duplicate RC, and vehicle information services.",
        category: "id-driving"
    },
    
    // Additional Important Portals
    {
        name: "DigiLocker - Digital Document Storage",
        url: "https://www.digilocker.gov.in/",
        description: "Store and access important documents like Aadhaar, PAN, driving license digitally.",
        category: "digital-digilocker"
    },
    {
        name: "UMANG - Unified Mobile App",
        url: "https://web.umang.gov.in/",
        description: "Single platform to access over 1,200 central and state government services.",
        category: "digital-umang"
    },
    {
        name: "e-District Services",
        url: "https://edistrict.gov.in/",
        description: "Online application for various certificates like birth, death, income, caste, and domicile.",
        category: "digital-edistrict"
    },
    {
        name: "Income Tax e-Filing Portal",
        url: "https://www.incometax.gov.in/",
        description: "File income tax returns, view tax credit, download Form 16, and track refund status.",
        category: "digital-edistrict"
    },
    {
        name: "EPFO - Employee Provident Fund",
        url: "https://www.epfindia.gov.in/",
        description: "Check PF balance, withdraw PF online, transfer PF, and update KYC details.",
        category: "employment-epfo"
    },
    {
        name: "ESIC - Employee State Insurance",
        url: "https://www.esic.nic.in/",
        description: "Medical and cash benefits for employees, online registration, and claim services.",
        category: "employment-epfo"
    },
    {
        name: "Startup India",
        url: "https://www.startupindia.gov.in/",
        description: "Register your startup, access funding, mentorship, and various benefits for entrepreneurs.",
        category: "business-startup"
    },
    {
        name: "MSME Registration - Udyam",
        url: "https://udyamregistration.gov.in/",
        description: "Online registration for Micro, Small and Medium Enterprises with various benefits.",
        category: "business-msme"
    },
    {
        name: "GeM - Government e-Marketplace",
        url: "https://gem.gov.in/",
        description: "Online marketplace for government procurement of goods and services.",
        category: "business-msme"
    },
    {
        name: "National Career Service Portal",
        url: "https://www.ncs.gov.in/",
        description: "Job search, career counseling, vocational guidance, and skill development information.",
        category: "employment-jobs"
    },
    {
        name: "Skill India - NSDC",
        url: "https://www.skillindia.gov.in/",
        description: "Skill development programs, training courses, and certification for employability.",
        category: "education-skill"
    },
    {
        name: "Pradhan Mantri Kaushal Vikas Yojana (PMKVY)",
        url: "https://www.pmkvyofficial.org/",
        description: "Skill training program with monetary rewards for youth to enhance employability.",
        category: "education-skill"
    },
    {
        name: "National Health Portal",
        url: "https://www.nhp.gov.in/",
        description: "Comprehensive health information, disease prevention, and wellness resources.",
        category: "welfare-health"
    },
    {
        name: "Co-WIN - COVID Vaccination",
        url: "https://www.cowin.gov.in/",
        description: "Register for COVID-19 vaccination, book slots, and download vaccination certificate.",
        category: "welfare-health"
    },
    {
        name: "Jal Jeevan Mission",
        url: "https://jaljeevanmission.gov.in/",
        description: "Providing functional household tap connection to every rural household by 2024.",
        category: "welfare"
    },
    {
        name: "Swachh Bharat Mission",
        url: "https://swachhbharatmission.gov.in/",
        description: "Clean India campaign for sanitation, waste management, and toilet construction.",
        category: "welfare"
    },
    {
        name: "Beti Bachao Beti Padhao",
        url: "https://wcd.nic.in/bbbp-schemes",
        description: "Campaign to address declining child sex ratio and promote education for girl child.",
        category: "welfare"
    },
    {
        name: "Sukanya Samriddhi Yojana",
        url: "https://www.india.gov.in/spotlight/sukanya-samriddhi-account",
        description: "Small savings scheme for girl child with attractive interest rates and tax benefits.",
        category: "welfare"
    },

    // Grievance Redressal & Citizen Services
    {
        name: "CPGRAMS - Centralized Public Grievance Redress and Monitoring System",
        url: "https://pgportal.gov.in/",
        description: "Central portal for lodging and tracking grievances against any government department. Citizens can submit complaints online and monitor their status in real-time.",
        category: "governance-grievance"
    },
    {
        name: "myScheme Portal - Scheme Eligibility Checker",
        url: "https://www.myscheme.gov.in/",
        description: "One-stop platform to discover government schemes you're eligible for. Answer simple questions about your profile and get personalized scheme recommendations across education, health, agriculture, and social welfare.",
        category: "welfare-schemes"
    },
    {
        name: "National Legal Services Authority (NALSA)",
        url: "https://nalsa.gov.in/",
        description: "Free legal aid and assistance for marginalized sections of society including women, children, SC/ST, persons with disabilities, and those below poverty line. Access to legal advice, representation, and awareness programs.",
        category: "governance-legal"
    },
    {
        name: "IndiaFilings - How-to Guides for Government Services",
        url: "https://www.indiafilings.com/learn/",
        description: "Comprehensive step-by-step guides for common government services including company registration, GST filing, trademark registration, PAN card application, and more. Practical tutorials with document checklists.",
        category: "digital-guides"
    },
    {
        name: "ClearTax - Tax Filing & Government Service Guides",
        url: "https://cleartax.in/s/",
        description: "Easy-to-follow guides for income tax filing, GST registration, PAN card services, Aadhaar updates, and other financial compliance. Includes calculators, forms, and deadline reminders.",
        category: "digital-guides"
    },
    {
        name: "State Legal Services Authorities",
        url: "https://nalsa.gov.in/state-legal-services-authority",
        description: "Directory of state-wise legal services authorities providing free legal aid, Lok Adalats (people's courts), legal awareness camps, and assistance in settling disputes.",
        category: "governance-legal"
    },
    {
        name: "Tele-Law Services",
        url: "https://doj.gov.in/tele-law/",
        description: "Free legal advice through video conferencing at Common Service Centers (CSCs). Connect with panel lawyers for consultation on civil, criminal, and revenue matters.",
        category: "governance-legal"
    },
    {
        name: "Nyaya Bandhu - Pro Bono Legal Services",
        url: "https://doj.gov.in/nyaya-bandhu/",
        description: "Mobile app connecting citizens with volunteer lawyers for free legal advice. Available in multiple languages with features for document sharing and case tracking.",
        category: "governance-legal"
    },
    {
        name: "Grievance Redressal - Ministry Wise",
        url: "https://www.india.gov.in/grievance-redressal",
        description: "Directory of grievance redressal mechanisms across all central government ministries and departments. Find the right authority to address your specific complaint.",
        category: "governance-grievance"
    },
    {
        name: "Jeevan Pramaan - Digital Life Certificate",
        url: "https://jeevanpramaan.gov.in/",
        description: "Biometric-enabled digital life certificate for pensioners. Submit life certificate from home using Aadhaar authentication, eliminating the need to visit banks or offices.",
        category: "welfare-pension"
    }
];

// DOM Elements - will be initialized after DOM loads
let cardsContainer, searchInput, categoryFilter, prevBtn;
let nextBtn, pageInfo, downloadBtn, totalPortalsElement, activeFiltersElement;
let customDropdown, dropdownToggle, dropdownList, dropdownSelected;
let dropdownOptions = [];
let isDropdownOpen = false;
let loader, ariaLive;

// internal state for dropdown keyboard navigation
let dropdownActiveIndex = 0;

// Pagination variables
let currentPage = 1;
const cardsPerPage = 10;
let filteredPortals = [...portals];

// Initialize the app
function init() {
    // Get all DOM elements after DOM is loaded
    cardsContainer = document.getElementById('cardsContainer');
    searchInput = document.getElementById('searchInput');
    categoryFilter = document.getElementById('categoryFilter');
    prevBtn = document.getElementById('prevBtn');
    nextBtn = document.getElementById('nextBtn');
    pageInfo = document.getElementById('pageInfo');
    downloadBtn = document.getElementById('downloadBtn');
    totalPortalsElement = document.getElementById('totalPortals');
    activeFiltersElement = document.getElementById('activeFilters');
    customDropdown = document.getElementById('customCategoryDropdown');
    dropdownToggle = document.getElementById('dropdownToggle');
    dropdownList = document.getElementById('dropdownList');
    dropdownSelected = document.getElementById('dropdownSelected');
    loader = document.getElementById('loader');
    ariaLive = document.getElementById('ariaLive');
    
    console.log('All elements loaded:', {
        cardsContainer, searchInput, categoryFilter, prevBtn, nextBtn,
        dropdownToggle, dropdownList, customDropdown
    });
    
    renderCards();
    setupEventListeners();
    initCustomDropdown();
    initMobileMenu();
    updateStats();
}

function initMobileMenu() {
    // Mobile bottom navigation - AI Assistant button
    const mobileAiBtn = document.getElementById('mobile-ai-assistant-btn');
    const desktopAiBtn = document.getElementById('ai-assistant-btn');
    
    if (mobileAiBtn && desktopAiBtn) {
        mobileAiBtn.addEventListener('click', () => {
            // Trigger the same chatbot functionality as desktop
            desktopAiBtn.click();
        });
    }
    
    // Mobile category dropdown functionality
    const mobileDropdown = document.getElementById('mobileCategoryDropdown');
    const mobileDropdownToggle = document.getElementById('mobileDropdownToggle');
    const mobileDropdownList = document.getElementById('mobileDropdownList');
    const mobileDropdownSelected = document.getElementById('mobileDropdownSelected');
    
    if (mobileDropdown && mobileDropdownToggle && mobileDropdownList) {
        // Copy dropdown options from desktop dropdown
        const desktopDropdownList = document.getElementById('dropdownList');
        if (desktopDropdownList) {
            mobileDropdownList.innerHTML = desktopDropdownList.innerHTML;
        }
        
        // Toggle dropdown
        mobileDropdownToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = mobileDropdownList.style.display === 'block';
            mobileDropdownList.style.display = isOpen ? 'none' : 'block';
            mobileDropdown.setAttribute('aria-expanded', !isOpen);
        });
        
        // Handle category selection
        mobileDropdownList.addEventListener('click', (e) => {
            const option = e.target.closest('.category-option');
            if (option) {
                const category = option.dataset.cat;
                const text = option.innerHTML;
                
                // Update mobile dropdown display
                mobileDropdownSelected.innerHTML = text;
                mobileDropdownList.querySelectorAll('.category-option').forEach(opt => {
                    opt.classList.remove('selected');
                });
                option.classList.add('selected');
                
                // Update desktop dropdown to match
                const desktopDropdownSelected = document.getElementById('dropdownSelected');
                if (desktopDropdownSelected) {
                    desktopDropdownSelected.innerHTML = text;
                }
                
                // Trigger filter
                currentCategory = category;
                currentPage = 1;
                renderCards();
                
                // Close dropdown
                mobileDropdownList.style.display = 'none';
                mobileDropdown.setAttribute('aria-expanded', 'false');
            }
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileDropdown.contains(e.target)) {
                mobileDropdownList.style.display = 'none';
                mobileDropdown.setAttribute('aria-expanded', 'false');
            }
        });
    }
}

function initCustomDropdown() {
    console.log('Initializing dropdown...', dropdownToggle, dropdownList);
    if (!dropdownToggle || !dropdownList) {
        console.error('Dropdown elements not found!');
        return;
    }
    
    // Get only category options, not headings
    dropdownOptions = dropdownList ? Array.from(dropdownList.querySelectorAll('.category-option')) : [];
    console.log('Found dropdown options:', dropdownOptions.length);
    
    if (!dropdownOptions.length) {
        console.error('No dropdown options found!');
        return;
    }

    // Ensure each option has an id and proper tabindex for roving focus
    dropdownOptions.forEach((option, i) => {
        if (!option.id) option.id = `dropdown-option-${i}`;
        option.setAttribute('role', 'option');
        option.tabIndex = i === 0 ? 0 : -1;
    });

    dropdownToggle.addEventListener('click', (event) => {
        console.log('Dropdown toggle clicked!');
        event.preventDefault();
        event.stopPropagation();
        toggleDropdown();
    });

    // Click and keyboard handlers for options
    dropdownOptions.forEach((option, i) => {
        option.addEventListener('click', () => selectCategory(option));
        option.addEventListener('keydown', (event) => {
            switch (event.key) {
                case 'Enter':
                case ' ':
                    event.preventDefault();
                    selectCategory(option);
                    break;
                case 'ArrowDown':
                    event.preventDefault();
                    moveDropdownIndex(1);
                    break;
                case 'ArrowUp':
                    event.preventDefault();
                    moveDropdownIndex(-1);
                    break;
                case 'Home':
                    event.preventDefault();
                    setDropdownIndex(0);
                    break;
                case 'End':
                    event.preventDefault();
                    setDropdownIndex(dropdownOptions.length - 1);
                    break;
                case 'Escape':
                    closeDropdown();
                    dropdownToggle.focus();
                    break;
            }
        });
    });

    // Close when clicking outside
    document.addEventListener('click', (event) => {
        if (isDropdownOpen && customDropdown && !customDropdown.contains(event.target)) {
            closeDropdown();
        }
    });

    // Close with Escape also when focus is outside options
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && isDropdownOpen) {
            closeDropdown();
            dropdownToggle.focus();
        }
    });
}

function setDropdownIndex(idx) {
    idx = Math.max(0, Math.min(idx, dropdownOptions.length - 1));
    // update tabIndex and focus
    dropdownOptions.forEach((opt, i) => {
        opt.tabIndex = i === idx ? 0 : -1;
        opt.classList.toggle('focused', i === idx);
    });
    dropdownActiveIndex = idx;
    dropdownOptions[idx].focus();
}

function moveDropdownIndex(delta) {
    const next = (dropdownActiveIndex + delta + dropdownOptions.length) % dropdownOptions.length;
    setDropdownIndex(next);
}

function toggleDropdown() {
    console.log('Toggle dropdown called, isOpen:', isDropdownOpen);
    if (isDropdownOpen) {
        closeDropdown();
    } else {
        openDropdown();
    }
}

function openDropdown() {
    console.log('Opening dropdown...');
    if (!dropdownList) {
        console.error('Dropdown list not found!');
        return;
    }
    dropdownList.style.display = 'block';
    dropdownToggle.setAttribute('aria-expanded', 'true');
    customDropdown && customDropdown.setAttribute('aria-expanded', 'true');
    isDropdownOpen = true;
    console.log('Dropdown opened, display:', dropdownList.style.display);
    // focus first selectable option
    dropdownOptions = dropdownList ? Array.from(dropdownList.querySelectorAll('.category-option')) : [];
    dropdownActiveIndex = dropdownOptions.findIndex(o => o.classList.contains('selected')) || 0;
    setTimeout(() => setDropdownIndex(dropdownActiveIndex), 0);
}

function closeDropdown() {
    console.log('Closing dropdown...');
    if (!dropdownList) return;
    dropdownList.style.display = 'none';
    dropdownToggle.setAttribute('aria-expanded', 'false');
    customDropdown && customDropdown.setAttribute('aria-expanded', 'false');
    isDropdownOpen = false;
}

function selectCategory(option) {
    if (!option) return;
    
    // Update selected state
    dropdownOptions.forEach(opt => opt.classList.toggle('selected', opt === option));
    
    // Update dropdown display text
    if (dropdownSelected) {
        dropdownSelected.innerHTML = option.innerHTML;
    }
    
    // Get category value and update filter
    const value = option.getAttribute('data-cat') || '';
    console.log('Selected category:', value); // Debug log
    
    if (categoryFilter) {
        categoryFilter.value = value;
        console.log('Category filter updated to:', categoryFilter.value); // Debug log
    }
    
    // Trigger filtering
    filterPortals();
    closeDropdown();
    
    // Announce selection for screen readers
    const categoryName = option.textContent.trim();
    if (ariaLive) ariaLive.textContent = `${categoryName} selected.`;
}

// Render cards based on current page and filters
function renderCards() {
    // Render a page of cards using a DocumentFragment for efficient updates
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const portalsToShow = filteredPortals.slice(startIndex, endIndex);

    // Clear existing content efficiently
    while (cardsContainer.firstChild) cardsContainer.removeChild(cardsContainer.firstChild);

    if (portalsToShow.length === 0) {
        const noResults = document.createElement('div');
        noResults.className = 'no-results';
        noResults.innerHTML = `
            <i class="fas fa-search" style="font-size: 3rem; color: #ccc; margin-bottom: 1rem;"></i>
            <h3>No matching portals found</h3>
            <p>Try adjusting your search or filter criteria</p>
        `;
        cardsContainer.appendChild(noResults);
        if (ariaLive) ariaLive.textContent = 'No matching portals found.';
        updatePagination();
        updateStats();
        return;
    }

    const frag = document.createDocumentFragment();
    portalsToShow.forEach(portal => {
        const card = createCard(portal);
        frag.appendChild(card);
    });
    cardsContainer.appendChild(frag);

    // Announce result range and counts
    if (ariaLive) ariaLive.textContent = `Showing ${filteredPortals.length} results. Page ${currentPage}.`;

    updatePagination();
    updateStats();
}

// Create a card element
function createCard(portal) {
    const card = document.createElement('article');
    card.className = 'card';
    card.setAttribute('role', 'article');
    card.tabIndex = 0; // make card keyboard-focusable
    
    const categoryClass = `category-${portal.category}`;
    const categoryName = getCategoryName(portal.category);
    const icon = getCategoryIcon(portal.category);
    
    card.innerHTML = `
        <div class="card-header ${categoryClass}">
            <h3>${portal.name}</h3>
        </div>
        <div class="card-body">
            <span class="card-category">
                ${icon} ${categoryName}
            </span>
            <p class="card-description">${portal.description}</p>
            <div class="card-footer">
                <button class="card-link card-details-btn">
                    Learn More
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                </button>
            </div>
        </div>
    `;
    
    // Add click event to open modal
    const detailsBtn = card.querySelector('.card-details-btn');
    if (detailsBtn) {
        detailsBtn.addEventListener('click', () => {
            openPortalModal(portal);
        });
    }

    // Support keyboard activation on the card itself
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            // If focus is on a control inside card, let it handle it
            const active = document.activeElement;
            if (active && card.contains(active) && active.classList && active.classList.contains('card-details-btn')) return;
            e.preventDefault();
            openPortalModal(portal);
        }
    });
    
    return card;
}

// Get category display name
function getCategoryName(category) {
    const categories = {
        // Karnataka State
        'karnataka-electricity': 'BESCOM - Electricity',
        'karnataka-transport': 'Transport Services',
        'karnataka-land': 'Land Records',
        'karnataka-services': 'Karnataka Services',
        // Defense
        'defense-army': 'Indian Army',
        'defense-navy': 'Indian Navy',
        'defense-airforce': 'Indian Air Force',
        'defense-welfare': 'Ex-Servicemen',
        // Education
        'education-scholarships': 'Scholarships',
        'education-entrance': 'Entrance Exams',
        'education-skill': 'Skill Development',
        'education-online': 'Online Learning',
        // Farmers
        'farmer-income': 'PM-KISAN',
        'farmer-credit': 'Kisan Credit',
        'farmer-insurance': 'Crop Insurance',
        'farmer-market': 'e-NAM Market',
        // Identity
        'id-aadhaar': 'Aadhaar',
        'id-pan': 'PAN Card',
        'id-voter': 'Voter ID',
        'id-passport': 'Passport',
        'id-driving': 'Driving License',
        // Employment
        'employment-jobs': 'Job Portals',
        'employment-epfo': 'EPFO & ESIC',
        'business-startup': 'Startup India',
        'business-msme': 'MSME',
        // Welfare
        'welfare-health': 'Health Schemes',
        'welfare-pension': 'Pension Schemes',
        'welfare-women': 'Women Welfare',
        'welfare-backward': 'SC/ST/OBC',
        // Digital
        'digital-digilocker': 'DigiLocker',
        'digital-umang': 'UMANG',
        'digital-edistrict': 'e-District',
        // Governance
        'governance-rights': 'Rights & Duties',
        'governance-rti': 'RTI Act',
        'governance-laws': 'Laws',
        // Legacy support
        'students': 'For Students',
        'employers': 'For Employers',
        'entrepreneurs': 'For Entrepreneurs',
        'citizens': 'For Citizens',
        'governance': 'Governance & Law',
        'welfare': 'Welfare Schemes',
        'employment': 'For Employers',
        'technology': 'For Students',
        'citizen': 'For Citizens'
    };
    return categories[category] || category;
}

// Get category icon
function getCategoryIcon(category) {
    const icons = {
        'students': '🎓',
        'employers': '💼',
        'entrepreneurs': '🚀',
        'citizens': '👥',
        'governance': '🏛️',
        'welfare': '🤝',
        // Legacy support
        'employment': '💼',
        'technology': '🎓',
        'citizen': '👥'
    };
    return icons[category] || '🔗';
}

// Update pagination controls
function updatePagination() {
    const totalPages = Math.ceil(filteredPortals.length / cardsPerPage);
    
    // Update page info
    pageInfo.textContent = `Page ${currentPage} of ${totalPages || 1}`;
    
    // Update button states
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages || totalPages === 0;
    
    // Show pagination controls unless there are no results at all
    const pagination = document.querySelector('.pagination');
    if (pagination) {
        pagination.style.display = totalPages === 0 ? 'none' : 'flex';
    }

    // update aria-live with pagination info
    if (ariaLive) ariaLive.textContent = `Page ${currentPage} of ${totalPages || 1}`;
}

// Update stats in the stats bar
function updateStats() {
    totalPortalsElement.textContent = filteredPortals.length;
    const activeFilters = (searchInput.value ? 1 : 0) + (categoryFilter.value ? 1 : 0);
    activeFiltersElement.textContent = activeFilters;
    // Safely update lastUpdated only if the element exists (may be removed from DOM)
    const lastUpdatedEl = document.getElementById('lastUpdated');
    if (lastUpdatedEl) {
        lastUpdatedEl.textContent = new Date().toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    }
}

// Make searchInput announce results and set ARIA attributes
if (searchInput) {
    searchInput.setAttribute('aria-controls', 'cardsContainer');
    searchInput.setAttribute('aria-describedby', 'ariaLive');
}

// Filter portals based on search and category
function filterPortals() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    
    console.log('Filtering - Search:', searchTerm, 'Category:', selectedCategory); // Debug log
    
    // show loader and mark busy for screen readers
    if (loader) loader.classList.add('active');
    if (cardsContainer) cardsContainer.setAttribute('aria-busy', 'true');

    // small timeout to allow loader to be painted for slow devices
    setTimeout(() => {
        filteredPortals = portals.filter(portal => {
            const matchesSearch = searchTerm === '' || 
                                portal.name.toLowerCase().includes(searchTerm) || 
                                portal.description.toLowerCase().includes(searchTerm);

            const matchesCategory = !selectedCategory || portal.category === selectedCategory;

            return matchesSearch && matchesCategory;
        });

        console.log('Filtered portals count:', filteredPortals.length); // Debug log

        // Reset to first page when filters change
        currentPage = 1;
        renderCards();

        if (loader) loader.classList.remove('active');
        if (cardsContainer) cardsContainer.setAttribute('aria-busy', 'false');

        // announce results
        if (ariaLive) {
            const count = filteredPortals.length;
            ariaLive.textContent = count === 0 ? 'No results found.' : `${count} results found.`;
        }
    }, 80);
}

// Download current view as image
function downloadCurrentView() {
    const container = document.querySelector('.container');
    
    // Elements to hide during screenshot
    const elementsToHide = document.querySelectorAll('.pagination, .filters, .stats-bar');
    elementsToHide.forEach(el => el.style.visibility = 'hidden');
    
    // Add a title for the screenshot
    const title = document.createElement('div');
    title.className = 'screenshot-title';
    title.textContent = `Indian Government Portals - Page ${currentPage}`;
    container.prepend(title);
    
    // Add a class to style the container for the screenshot
    container.classList.add('screenshot-mode');
    
    // Use html2canvas to capture the container
    html2canvas(container, {
        scale: 2, // Higher quality
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        logging: false
    }).then(canvas => {
        // Restore hidden elements
        elementsToHide.forEach(el => el.style.visibility = '');
        container.classList.remove('screenshot-mode');
        title.remove();
        
        // Create download link
        const link = document.createElement('a');
        const date = new Date().toISOString().split('T')[0];
        link.download = `indian-gov-portals-${date}-page-${currentPage}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    }).catch(error => {
        console.error('Error generating image:', error);
        alert('Error generating image. Please try again.');
        
        // Make sure to restore elements even if there's an error
        elementsToHide.forEach(el => el.style.visibility = '');
        container.classList.remove('screenshot-mode');
        if (title.parentNode) {
            title.remove();
        }
    });
}

// Set up event listeners
function setupEventListeners() {
    // Search input with debounce
    let searchTimeout;
    searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(filterPortals, 300);
    });
    
    // Category filter
    categoryFilter.addEventListener('change', filterPortals);
    
    // Pagination buttons
    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderCards();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
    
    nextBtn.addEventListener('click', () => {
        const totalPages = Math.ceil(filteredPortals.length / cardsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            renderCards();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
    
    // Download button (removed from UI)
    if (downloadBtn) {
        downloadBtn.addEventListener('click', downloadCurrentView);
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' && !prevBtn.disabled) {
            currentPage--;
            renderCards();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (e.key === 'ArrowRight' && !nextBtn.disabled) {
            currentPage++;
            renderCards();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
}

// Portal steps data - customize based on portal type
const portalSteps = {
    'students': [
        'Visit the official education portal',
        'Register with your academic credentials',
        'Browse available courses or scholarships',
        'Complete enrollment or application process',
        'Access learning materials and track progress'
    ],
    'employers': [
        'Register on the official employment portal',
        'Create your profile with required documents',
        'Search for relevant schemes or opportunities',
        'Apply for the scheme as per eligibility',
        'Track your application status online'
    ],
    'entrepreneurs': [
        'Visit the official business portal',
        'Check eligibility criteria for loans/schemes',
        'Prepare business plan and required documents',
        'Submit application through the portal',
        'Track approval status and receive funding'
    ],
    'citizens': [
        'Visit the official citizen services portal',
        'Check your eligibility for the scheme',
        'Gather required documents and information',
        'Submit your application online',
        'Monitor your application and receive benefits'
    ],
    'governance': [
        'Visit the official government portal',
        'Navigate to the relevant section or act',
        'Read the detailed information and guidelines',
        'Download necessary documents if required',
        'Contact the relevant department for clarification'
    ],
    'welfare': [
        'Visit the official welfare scheme portal',
        'Verify your eligibility criteria',
        'Register with Aadhaar and required documents',
        'Complete the application form online',
        'Receive benefits directly in your bank account'
    ],
    // Legacy support
    'employment': [
        'Register on the official employment portal',
        'Create your profile with required documents',
        'Search for relevant schemes or opportunities',
        'Apply for the scheme as per eligibility',
        'Track your application status online'
    ],
    'technology': [
        'Visit the official education portal',
        'Register with your academic credentials',
        'Browse available courses or scholarships',
        'Complete enrollment or application process',
        'Access learning materials and track progress'
    ],
    'citizen': [
        'Visit the official citizen services portal',
        'Check your eligibility for the scheme',
        'Gather required documents and information',
        'Submit your application online',
        'Monitor your application and receive benefits'
    ]
};

// Open portal modal with details
function openPortalModal(portal) {
    const modal = document.getElementById('portalModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalCategory = document.getElementById('modalCategory');
    const modalDescription = document.getElementById('modalDescription');
    const modalSteps = document.getElementById('modalSteps');
    const modalLink = document.getElementById('modalLink');

    // Set content
    modalTitle.textContent = portal.name;
    modalCategory.textContent = getCategoryName(portal.category);
    modalCategory.className = `modal-category category-${portal.category}`;
    modalDescription.textContent = portal.description;
    modalLink.href = portal.url;

    // Get steps based on category
    const steps = portalSteps[portal.category] || portalSteps['citizen'];

    // Clear and populate steps list
    modalSteps.innerHTML = '';
    steps.forEach(step => {
        const li = document.createElement('li');
        li.textContent = step;
        modalSteps.appendChild(li);
    });

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closePortalModal() {
    const modal = document.getElementById('portalModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Setup modal event listeners
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('portalModal');
    const modalClose = document.querySelector('.modal-close');
    const modalOverlay = document.querySelector('.modal-overlay');

    // Close button
    if (modalClose) {
        modalClose.addEventListener('click', closePortalModal);
    }

    // Overlay click
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closePortalModal);
    }

    // Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closePortalModal();
        }
    });
});

// Initialize the application when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);

/* Back-to-top button behavior */
(function(){
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    const showOffset = 300; // px scrolled before showing button
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function onScroll() {
        if (window.scrollY > showOffset) {
            btn.classList.add('show');
        } else {
            btn.classList.remove('show');
        }
    }

    // Initial state
    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });

    btn.addEventListener('click', function(e){
        e.preventDefault();
        if (reduceMotion) {
            window.scrollTo(0,0);
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        btn.blur();
    });

    // Support keyboard activation (Enter/Space)
    btn.addEventListener('keydown', function(e){
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            btn.click();
        }
    });
})();