export interface SkillCategory {
    category: string;
    subCategory?: string;
    skills: string[];
}

export var Skills: SkillCategory[] = [
    {
        category: 'Front-end',
        subCategory: 'Development',
        skills: ['HTML, CSS, JS', 'Angular JS', 'JSP', 'Vue JS', 'Electron JS']
    },

    {
        category: 'Back-end',
        subCategory: 'Development',
        skills: ['MySQL', 'PostgreSQL', 'JOOQ', 'Spark', 'Spring', 'JEE', 'Flask']
    },

    {
        category: 'Software',
        subCategory: '',
        skills: ['Git', 'Maven', 'Jira', 'Vim', 'Latex', 'Salesforce']
    },

    {
        category: 'Operating',
        subCategory: 'Systems',
        skills: ['Unix', 'ArchLinux', 'Ubuntu', 'Pop OS', 'Windows']
    },

    {
        category: 'Programming',
        subCategory: 'Languages',
        skills: ['Java', 'C', 'C++', 'Python', 'SQL / SOQL', 'Apex']
    }
]
