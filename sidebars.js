/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a searchable sidebar
 - provide next/previous navigation

 The sidebars can be generated from the file structure, or explicitly defined here.

 Create as many sidebars as you want.
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/overview',
        'getting-started/sign-up',
        'getting-started/first-project',
      ],
    },
    {
      type: 'category',
      label: 'Organizations',
      items: [
        'organizations/overview',
        'organizations/create-organization',
        'organizations/invite-members',
        'organizations/manage-roles',
      ],
    },
    {
      type: 'category',
      label: 'Projects',
      items: [
        'projects/overview',
        'projects/create-project',
        'projects/project-settings',
        'projects/manage-languages',
      ],
    },
    {
      type: 'category',
      label: 'Translations',
      items: [
        'translations/upload-strings',
        'translations/edit-translations',
        'translations/translate',
        'translations/review',
        'translations/export',
      ],
    },
    'faq',
  ],
};

module.exports = sidebars;
