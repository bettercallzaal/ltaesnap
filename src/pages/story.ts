import { SHOW, BACKSTORY } from '../data/episodes.js';

export function buildStoryPage(baseUrl: string) {
  const elements: Record<string, any> = {};

  // Header
  elements.header = {
    type: 'item' as const,
    props: {
      title: SHOW.name,
      description: 'The Origin Story',
    },
    children: ['story_badge'],
  };
  elements.story_badge = {
    type: 'badge' as const,
    props: { label: 'Est. 2025', color: 'purple' as const, icon: 'star' as const },
  };

  // LTAW3 legacy
  elements.legacy = {
    type: 'item_group' as const,
    props: { separator: true },
    children: ['ltaw3_item', 'seasons_item', 'guests_item', 'evolution_item'],
  };

  elements.ltaw3_item = {
    type: 'item' as const,
    props: {
      title: BACKSTORY.predecessor,
      description: `${BACKSTORY.totalEpisodes} episodes, ${BACKSTORY.seasons} seasons (${BACKSTORY.runDates})`,
    },
    children: ['ltaw3_badge'],
  };
  elements.ltaw3_badge = {
    type: 'badge' as const,
    props: { label: `${BACKSTORY.totalEpisodes} eps`, color: 'blue' as const, icon: 'play' as const },
  };

  elements.seasons_item = {
    type: 'item' as const,
    props: {
      title: 'Original Crew',
      description: BACKSTORY.originalHosts,
    },
    children: ['crew_badge'],
  };
  elements.crew_badge = {
    type: 'badge' as const,
    props: { label: 'OG Hosts', color: 'green' as const, icon: 'users' as const },
  };

  elements.guests_item = {
    type: 'item' as const,
    props: {
      title: 'Notable Guests',
      description: BACKSTORY.notableGuests,
    },
    children: ['guests_badge'],
  };
  elements.guests_badge = {
    type: 'badge' as const,
    props: { label: '5 guests', color: 'teal' as const, icon: 'star' as const },
  };

  elements.evolution_item = {
    type: 'item' as const,
    props: {
      title: 'The Evolution',
      description: BACKSTORY.evolution,
    },
  };

  // Why it works
  elements.why = {
    type: 'text' as const,
    props: {
      content: BACKSTORY.whyItWorks,
      size: 'sm' as const,
    },
  };

  // Credit line
  elements.credit = {
    type: 'text' as const,
    props: {
      content: SHOW.credit,
      size: 'sm' as const,
      align: 'center' as const,
    },
  };

  // Buttons
  elements.btn_row = {
    type: 'stack' as const,
    props: { direction: 'horizontal' as const, gap: 'sm' as const },
    children: ['back_btn', 'archive_btn'],
  };

  elements.back_btn = {
    type: 'button' as const,
    props: { label: 'Back', icon: 'arrow-left' as const },
    on: {
      press: {
        action: 'submit' as const,
        params: { target: `${baseUrl}/` },
      },
    },
  };

  elements.archive_btn = {
    type: 'button' as const,
    props: { label: 'LTAW3 Archive', variant: 'primary' as const, icon: 'bookmark' as const },
    on: {
      press: {
        action: 'open_url' as const,
        params: { url: BACKSTORY.archive },
      },
    },
  };

  // Page
  elements.page = {
    type: 'stack' as const,
    props: { direction: 'vertical' as const, gap: 'md' as const },
    children: ['header', 'legacy', 'why', 'credit', 'btn_row'],
  };

  return {
    version: '2.0' as const,
    theme: { accent: 'purple' as const },
    ui: { root: 'page', elements },
  };
}
