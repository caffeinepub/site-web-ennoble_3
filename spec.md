# Site Web Ennoble

## Current State
- Two-page site (Home, Page2) with Header, Footer, Chatbot, WhatsApp button
- Contact section has an enquiry form that uses a `mailto:` link — unreliable and device-dependent
- Backend (`main.mo`) already has `submitEnquiry`, `getAllEnquiries`, and `getSubmissionCount` functions but the frontend does not call them
- No admin dashboard exists to view submitted enquiries

## Requested Changes (Diff)

### Add
- `/admin` route — password-protected admin dashboard page
- Admin dashboard shows a list of all submitted enquiries (name, email, city, website, message, submission order)
- Simple PIN/password gate on the admin page (hardcoded admin password checked client-side, sufficient for this use case)
- Success state on the contact form shows "Enquiry submitted successfully" (not "your email client has opened")

### Modify
- Contact form `handleSubmit`: replace `mailto:` logic with a call to `backend.submitEnquiry(...)` 
- Success state message updated to reflect actual submission (no email client reference)
- App.tsx: add `/admin` route

### Remove
- `mailto:` form submission logic
- `ENQUIRY_EMAIL` constant (no longer needed)

## Implementation Plan
1. Update `ContactSection` in `Home.tsx` to call `backend.submitEnquiry` on form submit, show real success message
2. Create `src/frontend/src/pages/Admin.tsx` — PIN-gated dashboard that calls `backend.getAllEnquiries()` and displays results in a clean table/card list
3. Add `/admin` route to `App.tsx`
4. Add a subtle "Admin" link in the footer (small, unobtrusive)
