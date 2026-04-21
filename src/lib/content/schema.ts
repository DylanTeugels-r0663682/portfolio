import { z } from "zod";

const NonEmptyString = z.string().min(1);

export const MetaItemSchema = z.object({
  k: NonEmptyString,
  v: NonEmptyString,
});

export const AboutBulletSchema = z.object({
  w: NonEmptyString,
  d: NonEmptyString,
});

export const TimelineEntrySchema = z.object({
  year: NonEmptyString,
  role: NonEmptyString,
  desc: NonEmptyString,
});

export const CapabilitySchema = z.object({
  title: NonEmptyString,
  role: NonEmptyString,
  otherRoles: z.array(NonEmptyString).optional(),
  teaser: NonEmptyString,
  stack: NonEmptyString,
  what: NonEmptyString,
  why: NonEmptyString,
});

export const CertSchema = z.object({
  badge: NonEmptyString,
  t: NonEmptyString,
  s: NonEmptyString,
});

export const HeadlineSchema = z.object({
  leadLines: z.array(NonEmptyString).min(1),
  rotatingWords: z.array(NonEmptyString).min(1),
  tail: z.string().optional(),
});

export const PortfolioSchema = z.object({
  name: NonEmptyString,
  role: NonEmptyString,
  employer: NonEmptyString,
  location: NonEmptyString,
  email: z.string().email(),
  linkedin: z.string().url(),
  github: z.string().url(),
  headline: HeadlineSchema,
  sub: NonEmptyString,
  meta: z.array(MetaItemSchema).min(1),
  aboutBullets: z.array(AboutBulletSchema).min(1),
  timeline: z.array(TimelineEntrySchema).min(1),
  capabilities: z.array(CapabilitySchema).min(1),
  certs: z.array(CertSchema).min(1),
  rdProjects: z.array(NonEmptyString).min(1),
});

export type Portfolio = z.infer<typeof PortfolioSchema>;
export type MetaItem = z.infer<typeof MetaItemSchema>;
export type AboutBullet = z.infer<typeof AboutBulletSchema>;
export type TimelineEntry = z.infer<typeof TimelineEntrySchema>;
export type Capability = z.infer<typeof CapabilitySchema>;
export type Cert = z.infer<typeof CertSchema>;
export type Headline = z.infer<typeof HeadlineSchema>;
