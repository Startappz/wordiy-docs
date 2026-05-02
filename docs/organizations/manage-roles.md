---
sidebar_position: 3
title: Manage Roles & Permissions
---

# Manage Roles & Permissions

Control team member access with organization and project-level roles.

## Organization Roles

Organization roles determine what members can do at the organization level (manage team, projects, billing, etc.). There are three organization roles:

### Owner: Full Control Over the Organization

Permissions:

- ✅ Manage all team members (invite, remove, change roles)
- ✅ Create, edit, and delete projects
- ✅ Update organization settings
- ✅ Access and manage billing
- ✅ Delete the organization
- ✅ Transfer organization ownership
- ✅ Full access to all projects and data

Best for: Organization founders and administrators

### Admin: Manage Team and Projects (no Billing Access)

Permissions:

- ✅ Manage team members (invite, remove, change roles)
- ✅ Create and edit projects
- ✅ Update organization settings
- ✅ Access all projects and data
- ❌ Cannot manage billing
- ❌ Cannot delete organization
- ❌ Cannot transfer ownership

Best for: Team leads and project managers

### Member: Limited Organization Access

Permissions:

- ✅ Access organization based on project assignments
- ✅ View basic organization information
- ❌ Cannot manage team or projects
- ❌ Cannot view billing
- ❌ Cannot change organization settings

Best for: Team members with project-level responsibilities only

## Project-Level Roles

Within each project, members can be assigned specific roles to control what they can do with translations:

- **Translator** — Create and edit translations
- **Reviewer** — Review and approve translations
- **Viewer** — Read-only access to translations

Project roles are managed separately from organization roles and provide granular control over translation workflows.

## Assigning Organization Roles

### Invite Team Member with Organization Role

1. Go to your organization → **Members**
2. Click **"Invite Member"**
3. Enter email address
4. Select organization role (Owner, Admin, or Member)
5. Click **"Send Invitation"**

The member will receive an email invitation to join the organization with the specified role.

### Change Existing Member's Role

1. Go to your organization → **Members**
2. Find the team member
3. Click the role dropdown next to their name
4. Select new role (Owner, Admin, or Member)
5. Confirm the change

**Note:** Only Owners can assign or change the Owner role. You cannot change your own role.

## Assigning Project Roles

Members assigned at the Member level can have different roles within individual projects:

1. Go to **Organization** → **Members**
2. Find the member
3. In the project list, select their role (Translator, Reviewer, Viewer, or None)
4. Save changes

## Permission Hierarchy

```text
Organization Level (determines management capabilities)
├── Owner — Full control
├── Admin — Team & project management
└── Member — Limited access, roles defined per project

Project Level (for Members, determines translation capabilities)
├── Translator — Create/edit translations
├── Reviewer — Review/approve translations
└── Viewer — Read-only access
```

## Best Practices

- **Principle of Least Privilege** — Assign only the permissions needed for each role
- **Owner Protection** — Keep Owner role limited to 1-2 trusted people
- **Project-Level Assignment** — Use Member role at organization level, assign specific permissions per project
- **Regular Reviews** — Audit team member roles and permissions quarterly
- **Onboarding Documentation** — Clearly explain roles and expectations to new team members

## Common Role Assignments

### Small Team (2-5 people)

- 1 Owner
- Rest as Admin or Member with project-level Translator/Reviewer roles

### Medium Team (5-20 people)

- 1 Owner
- 1-2 Admin (for project coordination)
- Remaining members as Members with project-level roles assigned

### Large Team (20+ people)

- 1-2 Owners
- 3-5 Admins (one per project/area)
- Remaining members as Members with project-level roles

## Troubleshooting

### Member Can't Access a Project

- Check their organization role (must be at least Member)
- Check their project-level role (must be Translator, Reviewer, or Viewer)
- Verify they accepted the invitation

### Need to Remove a Member

1. Go to **Members**
2. Find the member
3. Click **"Remove"**
4. Confirm removal

The member loses access immediately and cannot access any projects or organization data.

### Cannot Promote Member to Owner

Only current Owners can assign the Owner role to other members. Contact an existing Owner if you need this change.

## Next Steps

- [Invite team members](/docs/organizations/invite-members)
- [Create your first project](/docs/projects/create-project)
- [Manage project settings](/docs/projects/project-settings)
