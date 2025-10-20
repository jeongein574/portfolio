import { type ExperienceShowcaseListItemProps } from "@/components/experience/experience-showcase-list-item";

export const EXPERIENCE: ExperienceShowcaseListItemProps[] = [
  {
    title: "Quantitative Research Analyst",
    organisation: {
      name: "Korea Investment & Securities",
      href: "https://www.kisusa.com/",
    },
    date: "Apr 2025 - Aug 2025",
    location: "Seoul",
    description:
      "Analyzed global AI adoption data (1.2k+ firms) to estimate 20–35% cost and time savings per use case. Modeled department-level ROI and operational efficiency impact across 8 business functions; presented findings on Korean real estate trends and 2025–26 asset forecasts.",
  },
  {
    title: "Computer Systems Data Researcher",
    organisation: {
      name: "CMU School of Computer Science",
      href: "https://dl.acm.org/doi/10.1145/3478432.3499123",
    },
    date: "May 2025 – Jun 2025",
    location: "Pittsburgh",
    description: `
      Analyzed 170K+ online exam logs (2016–2019) in R, uncovering nonlinear score-time trends and engagement thresholds via Welch’s t-test and Cohen’s d. Findings informed instructional design changes in CMU’s largest CS systems class.
      <a 
        href="/computer_systems_research.pdf" 
        target="_blank" 
        rel="noopener noreferrer" 
        style="color:var(--accent); text-decoration:underline; margin-left:6px; font-weight:500;"
      >
        Read paper →
      </a>
    `,
  },
  {
    title: "AI Security Researcher",
    organisation: {
      name: "Information System Security Lab",
      href: "https://issl.korea.ac.kr/",
    },
    date: "May 2024 – Sep 2024",
    location: "Seoul",
    description:
      "Researched LLM jailbreak techniques and contributed backdoor attack code for federated unlearning. Proposed a unified framework for classifying and generating jailbreak prompts to mitigate AI security risks.",
  },
];
