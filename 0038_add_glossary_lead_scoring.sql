-- Lead Scoring glossary terms — required by Lead Scoring use-case and tool pages
-- Covers terms linked via <GlossaryLink> that were missing (lead-scoring, ai, predictive-analytics, data-model, sales-funnel, intent-data)
-- Place this file at GeekBackend/GeekRepository/Migrations/Sql/0038_add_glossary_lead_scoring.sql
-- Then commit + push GeekBackend (migrations auto-apply on Railway deploy)

BEGIN;

INSERT INTO geek_glossary.terms (slug, title, category, short_summary, status)
VALUES (
    'lead-scoring',
    'Lead Scoring',
    'Sales',
    'Ranking prospects by fit and behavior to prioritize follow-up on leads most likely to convert.',
    'published'
)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO geek_glossary.term_definitions (term_id, sort_order, part_of_speech, text, example)
SELECT t.id, 0, 'noun',
    'A methodology for assigning points to leads based on demographic fit, engagement signals, and buying intent, so sales teams focus on high-potential prospects first.',
    'A B2B software company scores leads +20 for inside service area, +25 for requesting a demo, and -30 for outside area, so reps immediately prioritize the highest-scoring inquiries.'
FROM geek_glossary.terms t WHERE t.slug = 'lead-scoring';

INSERT INTO geek_glossary.terms (slug, title, category, short_summary, status)
VALUES (
    'ai',
    'AI',
    'Technology',
    'Artificial intelligence systems that analyze data and automate decisions to improve marketing and sales outcomes.',
    'published'
)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO geek_glossary.term_definitions (term_id, sort_order, part_of_speech, text, example)
SELECT t.id, 0, 'noun',
    'Artificial intelligence — software that learns patterns from data to automate tasks, generate insights, and make predictions without being explicitly programmed for every scenario.',
    'A small business uses AI to analyze thousands of lead interactions and automatically flag high-intent prospects, saving hours of manual sorting each week.'
FROM geek_glossary.terms t WHERE t.slug = 'ai';

INSERT INTO geek_glossary.terms (slug, title, category, short_summary, status)
VALUES (
    'predictive-analytics',
    'Predictive Analytics',
    'Analytics',
    'Using historical and behavioral data to forecast which leads are most likely to convert.',
    'published'
)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO geek_glossary.term_definitions (term_id, sort_order, part_of_speech, text, example)
SELECT t.id, 0, 'noun',
    'An analysis approach that applies statistical models and machine learning to historical data to predict future outcomes, such as lead conversion likelihood.',
    '6sense analyzes past deal outcomes and current engagement to predict which accounts are in-market, so sales can prioritize those most likely to buy.'
FROM geek_glossary.terms t WHERE t.slug = 'predictive-analytics';

INSERT INTO geek_glossary.terms (slug, title, category, short_summary, status)
VALUES (
    'data-model',
    'Data Model',
    'Technology',
    'The structured mapping of lead and customer data fields that powers accurate scoring and automation.',
    'published'
)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO geek_glossary.term_definitions (term_id, sort_order, part_of_speech, text, example)
SELECT t.id, 0, 'noun',
    'A blueprint that defines how customer data — such as contact details, engagement history, and firmographic attributes — is organized, normalized, and related for consistent scoring and reporting.',
    'A team maps website form fields, CRM contact records, and email engagement into a unified data model so Apollo can enrich and deduplicate leads reliably.'
FROM geek_glossary.terms t WHERE t.slug = 'data-model';

INSERT INTO geek_glossary.terms (slug, title, category, short_summary, status)
VALUES (
    'sales-funnel',
    'Sales Funnel',
    'Sales',
    'The staged journey prospects move through from awareness to purchase, used to measure conversion at each step.',
    'published'
)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO geek_glossary.term_definitions (term_id, sort_order, part_of_speech, text, example)
SELECT t.id, 0, 'noun',
    'A visual model of the customer journey — from first touch to closed deal — that shows volume and conversion rates at each stage and highlights where prospects drop off.',
    'By analyzing their sales funnel, a services firm finds 60% of leads stall after the proposal stage and adds automated follow-up to recover stalled deals.'
FROM geek_glossary.terms t WHERE t.slug = 'sales-funnel';

INSERT INTO geek_glossary.terms (slug, title, category, short_summary, status)
VALUES (
    'intent-data',
    'Intent Data',
    'Marketing',
    'Behavioral signals that indicate a prospect is actively researching a purchase.',
    'published'
)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO geek_glossary.term_definitions (term_id, sort_order, part_of_speech, text, example)
SELECT t.id, 0, 'noun',
    'Data collected from content consumption, search activity, and engagement patterns that signals a prospect''s readiness to buy.',
    '6sense surfaces intent data when target accounts repeatedly visit pricing pages and download comparison guides, flagging them for immediate outreach.'
FROM geek_glossary.terms t WHERE t.slug = 'intent-data';

COMMIT;
