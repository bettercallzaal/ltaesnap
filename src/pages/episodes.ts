import type { Episode } from '../data/episodes.js';
import { SHOW } from '../data/episodes.js';

export function buildEpisodesPage(eps: Episode[], baseUrl: string) {
  const elements: Record<string, any> = {};

  // Header
  elements.header = {
    type: 'item' as const,
    props: {
      title: SHOW.name,
      description: `${eps.length} episode${eps.length === 1 ? '' : 's'}`,
    },
    children: ['ep_count_badge'],
  };
  elements.ep_count_badge = {
    type: 'badge' as const,
    props: { label: 'Episodes', color: 'purple' as const, icon: 'play' as const },
  };

  // Episode items
  const itemIds: string[] = [];

  eps.forEach((ep, i) => {
    const itemId = `ep_${i}`;
    const badgeId = `badge_${i}`;
    itemIds.push(itemId);

    const badgeChildren: string[] = [badgeId];

    elements[itemId] = {
      type: 'item' as const,
      props: {
        title: `Ep ${ep.number}: ${ep.title}`,
        description: `${ep.guests} - ${ep.duration}`,
      },
      children: badgeChildren,
    };

    elements[badgeId] = {
      type: 'badge' as const,
      props: ep.isNew
        ? { label: 'NEW', color: 'green' as const, icon: 'zap' as const }
        : { label: ep.topic, color: 'blue' as const },
    };
  });

  elements.ep_list = {
    type: 'item_group' as const,
    props: { separator: true },
    children: itemIds,
  };

  // Tagline
  elements.tagline = {
    type: 'text' as const,
    props: {
      content: SHOW.tagline,
      size: 'sm' as const,
      align: 'center' as const,
    },
  };

  // Buttons
  elements.btn_row = {
    type: 'stack' as const,
    props: { direction: 'horizontal' as const, gap: 'sm' as const },
    children: ['back_btn', 'share_btn'],
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

  elements.share_btn = {
    type: 'button' as const,
    props: { label: 'Share Show', variant: 'primary' as const, icon: 'share' as const },
    on: {
      press: {
        action: 'compose_cast' as const,
        params: {
          text: `Check out ${SHOW.name} - ${SHOW.tagline}`,
          embeds: [baseUrl],
        },
      },
    },
  };

  // Page
  elements.page = {
    type: 'stack' as const,
    props: { direction: 'vertical' as const, gap: 'md' as const },
    children: ['header', 'ep_list', 'tagline', 'btn_row'],
  };

  return {
    version: '2.0' as const,
    theme: { accent: 'purple' as const },
    ui: { root: 'page', elements },
  };
}
