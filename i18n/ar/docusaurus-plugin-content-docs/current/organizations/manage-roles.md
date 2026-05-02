---
sidebar_position: 3
title: Manage Roles & Permissions
---

# Manage Roles & Permissions

Control team member access with role-based permissions.

## Organization Roles

### Owner
**Full control over everything**

Permissions:
- ✅ Create, edit, delete projects
- ✅ Manage all team members
- ✅ View and manage billing
- ✅ Update organization settings
- ✅ Access all project data
- ✅ Delete organization

**Best for:** Organization founders and administrators

### Manager
**Manage projects and team**

Permissions:
- ✅ Create, edit projects
- ✅ Invite and manage team members
- ✅ View billing information (read-only)
- ✅ Update organization settings
- ✅ Access all projects
- ❌ Cannot manage billing or delete organization

**Best for:** Team leads and project coordinators

### Translator
**Create and edit translations**

Permissions:
- ✅ Create and edit translations
- ✅ View project settings
- ✅ Upload strings (in assigned projects)
- ❌ Cannot manage team or projects
- ❌ Cannot view billing

**Best for:** Translators and content contributors

### Reviewer
**Review and approve translations**

Permissions:
- ✅ View translations
- ✅ Review and approve/reject translations
- ✅ Leave comments on translations
- ❌ Cannot edit translations
- ❌ Cannot manage projects or team

**Best for:** QA specialists and senior translators

### Viewer
**Read-only access**

Permissions:
- ✅ View projects and translations
- ✅ View project statistics
- ❌ Cannot edit or create anything
- ❌ Cannot manage team or billing

**Best for:** Stakeholders and project observers

## Assigning Roles

### Invite Team Member with Role

1. Go to **Organization** → **Members**
2. Click **"Invite Member"**
3. Enter email address
4. Select role from dropdown
5. Click **"Send Invitation"**

### Change Existing Member's Role

1. Go to **Organization** → **Members**
2. Find the team member
3. Click the role dropdown
4. Select new role
5. Confirm the change

## Project-Level Permissions

Organization roles are inherited in all projects, but you can also set project-specific permissions:

- **Translator** — Can translate in specific projects only
- **Reviewer** — Reviews translations in assigned projects
- **Viewer** — Views specific projects

To set project permissions:
1. Go to **Project** → **Settings** → **Access Control**
2. Add or modify team member permissions
3. Save changes

## Permission Hierarchy

```
Organization Owner
    ↓ (can delegate to)
Organization Manager
    ↓ (can manage)
Project Members with specific roles
    ├── Translator
    ├── Reviewer
    └── Viewer
```

## Best Practices

- **Principle of Least Privilege** — Give only necessary permissions
- **Separate Concerns** — Use different roles for different tasks
- **Regular Review** — Audit team member roles quarterly
- **Document Access** — Keep records of who has what access
- **Onboarding** — Explain roles during team member onboarding

## Common Role Assignments

### Small Team (2-5 people)
- 1 Owner
- 1-2 Managers/Senior Translators
- 2-3 Translators

### Medium Team (5-20 people)
- 1-2 Owners
- 2-3 Managers
- 5-10 Translators
- 3-5 Reviewers
- 1-2 Viewers (stakeholders)

### Large Team (20+ people)
- 2-3 Owners
- 5-10 Managers (per project/language)
- 10-30 Translators
- 5-10 Reviewers
- 3-5 Viewers

## Troubleshooting

### Member Can't Access Project
- Check their organization role
- Check project-specific permissions
- Verify they accepted the invitation

### Need to Remove Member
1. Go to **Members**
2. Find member
3. Click **"Remove"**
4. Confirm removal

They'll lose access immediately.

## Next Steps

- [Invite team members](/docs/organizations/invite-members)
- [Create your first project](/docs/projects/create-project)
- [Understand project settings](/docs/projects/project-settings)
