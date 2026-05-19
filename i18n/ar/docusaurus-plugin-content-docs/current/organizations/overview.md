---
sidebar_position: 1
title: Organization Overview
---

# Organizations

An **Organization** is the top-level container in Wordiy that holds all your projects, team members, and billing information. It's the foundation of your translation management system, providing a centralized hub where your entire team collaborates on translating applications and content.

## What is an Organization?

An organization serves as:
- A **workspace** for your team to collaborate on translations with integrated communication tools
- A **billing entity** that manages subscriptions, payments, and usage tracking
- A **permission boundary** where you control who can access what resources and perform which actions
- A **resource container** for all projects, team members, integrations, and settings

Think of an organization as your company or department's translation workspace. Within an organization, you can create multiple projects (one for each application, product, or content initiative), manage team members with different roles and permissions, and handle all billing and administrative tasks in one place.

Organizations are designed to scale from small teams working on a single project to large enterprises managing dozens of translation projects across multiple languages and geographies.

## Organization Features

### Team Management

Manage your entire translation team from a centralized location. With Wordiy's team management features, you can:

- **Invite team members** with specific roles and permissions
- **Define access levels** — Control who can create projects, manage teams, and make billing decisions
- **Manage member permissions** — Set granular permissions for each role (Owner, Manager, Translator, Reviewer, Viewer)
- **Track team activity** — View logs of who made changes, when translations were completed, and review submission history
- **Organize by projects** — Assign team members to specific projects or give them organization-wide access
- **Role-based workflows** — Enforce approval workflows where translators submit, reviewers approve, and managers export

### Billing & Subscription

Handle all billing and subscription management in one place. Track your usage and make informed decisions about your translation workflow:

- **Manage your subscription plan** — Upgrade or downgrade your plan based on team size and project needs
- **View detailed billing history** — Access invoices, payment records, and transaction history
- **Update payment methods** — Securely manage credit cards and payment information
- **Monitor usage and limits** — Track how many team members, projects, and languages you're using
- **Usage statistics** — See real-time data on translations completed, strings processed, and API calls
- **Pricing transparency** — Understand exactly what you're paying for with clear pricing breakdowns

### Project Management

Organize and manage multiple translation projects within your organization:

- **Create and organize projects** — Set up separate projects for each application, website, or product
- **Control team access** — Define which team members can access which projects
- **Manage shared settings** — Set organization-wide preferences that apply to all projects
- **Archive or delete projects** — Keep your workspace organized by archiving completed projects
- **Project templates** — Use pre-configured templates to quickly set up new projects with consistent settings
- **Bulk operations** — Import multiple projects, configure settings in bulk, and perform batch updates

### Settings & Integrations

Configure your organization to work seamlessly with your development workflow:

- **Configure organization details** — Set organization name, logo, website, and description
- **Set up integrations** — Connect with webhooks, APIs, and third-party services
- **Manage API keys** — Create and manage API keys for programmatic access to your translations
- **Configure authentication** — Set up SSO (Single Sign-On) for enterprise deployments
- **Configure notification preferences** — Control email alerts, Slack notifications, and other communication channels
- **Branding & appearance** — Customize colors, logos, and language for your team's interface

![إعدادات المؤسسة](/img/screenshots/organizations-settings.png)

## Organization Roles

Each team member in an organization has a role that determines their permissions. Understanding roles is crucial for setting up an effective translation workflow:

| Role | Permissions | Best For |
|------|-------------|----------|
| **Owner** | Full access to everything: projects, team, billing, settings | Organization founders, administrators, decision makers |
| **Manager** | Manage projects and team members (limited billing access) | Team leads, project coordinators, workflow managers |
| **Translator** | Create and edit translations in assigned projects | Content translators, localization specialists |
| **Reviewer** | Review and approve translations before export | Quality assurance, senior translators, language experts |
| **Viewer** | Read-only access to projects and translations | Stakeholders, clients, project observers |

### Detailed Role Permissions

**Owner** — Complete control and responsibility
- Create, edit, and delete projects
- Invite and remove team members
- Change team member roles
- Access and manage billing
- Update organization settings
- Access all project data and translations
- Delete the organization

**Manager** — Team and project leadership
- Create and manage projects
- Invite team members (up to plan limit)
- Change translator/reviewer/viewer roles
- View billing information (read-only)
- Update most organization settings
- Access all projects and data
- Cannot manage billing or delete organization

**Translator** — Content creation
- Create and edit translations in assigned projects
- Submit translations for review
- View project settings and strings
- Use translation memory and AI suggestions
- Leave comments and ask questions
- Cannot create projects or manage team

**Reviewer** — Quality assurance
- View all translations in assigned projects
- Approve or reject translations
- Leave detailed review comments
- Track translation progress
- Generate review reports
- Cannot edit translations or manage projects

**Viewer** — Observation and reporting
- View projects and translations
- See translation statistics and progress
- Generate reports and analytics
- View team member activity
- Cannot edit, create, or approve anything

## Getting Started with Organizations

### Dashboard - Organizations List

After logging in, you'll see your Organizations dashboard showing all organizations you're a member of:

![Dashboard - Organizations](/img/screenshots/01-dashboard-organizations.png)

This is where you can:
- View all organizations you belong to
- See organization details (projects, members, subscription status)
- Create a new organization
- Switch between organizations

### Create an Organization

Setting up your first organization is simple and takes just a few minutes:

1. **Click "New Organization"** — From the organizations dashboard, click the yellow "New Organization" button

![Create Organization Form](/img/screenshots/create-organization-form.png)

2. **Enter organization details** — Provide your organization name and optional description
3. **Verify your email** — Confirm your email address to activate the organization
4. **Configure basic settings** — Add your logo, website, and language preferences
5. **Start inviting team members** — Add translators, reviewers, and managers to your organization

Your organization is now ready! You're automatically set as the Owner with full permissions.

### Invite Team Members

Building your translation team is straightforward:

**Navigate to Organization Settings** — From the dashboard, click your organization name at the top, then go to **Settings** → **Members**

The Members page shows your current team members and provides an "Invite Member" button to add new team members to your organization.

For detailed step-by-step instructions on inviting members, selecting roles, and managing your team, see the dedicated [Invite Team Members](/docs/organizations/invite-members) guide.

### Create Your First Project

Once your organization is set up, create a project to start translating:

1. **In your organization, click "New Project"** — From the dashboard, select "Create Project"
2. **Enter project details** — Provide project name, description, and choose your base language
3. **Select base language** — Choose the language your original strings are written in (usually English)
4. **Add additional languages** — Select all target languages you want to translate into

![Projects Page](/img/screenshots/04-projects.png)

5. **Configure project settings** — Set character limits, enable placeholders, configure workflows
6. **Start uploading strings** — Import your translatable strings from your application

Once your project is set up, invite team members to start translating and collaborating.

## Organization Best Practices

### Setting Up Your Organization

- **Use clear, meaningful names** — Choose descriptive organization names that reflect your company or department
- **Add branding** — Upload your logo and configure colors to match your brand
- **Set up integrations early** — Connect with your development tools, webhooks, and APIs from the start
- **Configure notifications** — Set up email and Slack notifications so your team stays informed

### Managing Your Team

- **Define clear roles** — Assign appropriate roles based on job responsibilities and skill levels
- **Principle of least privilege** — Give team members only the permissions they need to do their job
- **Regular role reviews** — Quarterly, review team member roles and permissions to ensure they're still appropriate
- **Document responsibilities** — Create clear documentation about what each role can do and who should have that role
- **Onboarding process** — Develop a standard onboarding process for new team members

### Managing Your Projects

- **Organize by product/application** — Create separate projects for each application or product you're translating
- **Use consistent naming** — Establish naming conventions for projects, languages, and strings
- **Project templates** — Create templates for common project types to speed up setup
- **Archive completed projects** — Keep your workspace clean by archiving projects that are no longer active

### Monitoring and Optimization

- **Regular backups** — Export important projects regularly as a backup
- **Monitor usage** — Keep track of your subscription limits and team size
- **Review analytics** — Check translation progress, team velocity, and quality metrics
- **Optimize workflows** — Analyze your process and look for bottlenecks to improve efficiency
- **Plan for growth** — As your team grows, ensure your plan accommodates additional team members and projects

### Security and Compliance

- **Regular access reviews** — Periodically verify that team members have appropriate access levels
- **Audit trails** — Review logs to see who made changes and when
- **Change sensitive settings carefully** — Be cautious when changing organization settings that affect the whole team
- **Secure API keys** — Protect API keys and don't share them unnecessarily
- **Data privacy** — Understand your data retention and privacy settings

## Organization Limits

Your plan determines several limits:

- **Maximum organizations** — Number of organizations you can create (usually 1 for smaller plans)
- **Projects per organization** — How many projects you can have in each organization
- **Team members** — Maximum number of team members you can invite
- **Storage** — Total translation memory and project data storage
- **API requests** — Monthly API request limits for integrations
- **Concurrent users** — How many team members can work simultaneously

Check [Billing & Pricing](/docs/organizations/billing) for your plan's specific limits.

## Organization Structure Examples

### Small Team Example

```
Organization: "Acme Corp"
├── Owner: You
├── Team:
│   ├── Manager (1)
│   └── Translators (2-3)
└── Projects:
    └── Main Application
        ├── English → Spanish
        ├── English → French
        └── English → German
```

### Medium Team Example

```
Organization: "TechStartup Inc"
├── Owners (2)
├── Managers (3) — One per language pair
├── Translators (10-15)
├── Reviewers (3-5)
└── Projects:
    ├── Main Web App
    ├── Mobile App
    ├── Marketing Site
    └── Help Documentation
```

### Enterprise Example

```
Organization: "Global Corporation"
├── Organization Owners (2-3)
├── Regional Managers (5-10) — One per region/language
├── Project Managers (10-20) — One per major project
├── Translators (50+)
├── Reviewers (10-20)
└── Projects:
    ├── Product A
    ├── Product B
    ├── Product C
    ├── Websites (multiple)
    └── Marketing Content
```

## Next Steps

- [Create your organization](/docs/organizations/create-organization)
- [Invite team members](/docs/organizations/invite-members)
- [Manage roles and permissions](/docs/organizations/manage-roles)
- [View billing and subscription](/docs/organizations/billing)
