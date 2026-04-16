import type { Episode } from '../data/episodes.js';
import { SHOW } from '../data/episodes.js';

export function buildEpisodesPage(eps: Episode[], baseUrl: string) {
  const itemIds: string[] = [];
  const elements: Record<string, any> = {};

  eps.forEach((ep, i) => {
    const itemId = `ep_${i}`;
    const badgeId = `badge_${i}`;
    itemIds.push(itemId);

    elements[itemId] = {
      type: 'item' as const,
      props: {
        title: `Ep ${ep.number}: ${ep.title}`,
        description: `${ep.guests} - ${ep.duration}`,
      },
      children: ep.isNew ? [badgeId] : undefined,
      on: ep.listenUrl
        ? { press: { action: 'open_url' as const, params: { url: ep.listenUrl } } }
        : undefined,
    };

    if (ep.isNew) {
      elements[badgeId] = {
        type: 'badge' as const,
        props: { label: 'NEW', color: 'green' as const },
      };
    }
  });

  elements.page = {
    type: 'stack' as const,
    props: { direction: 'vertical' as const, gap: 'md' as const },
    children: ['header', 'tagline', 'ep_list', 'btn_row'],
  };

  elements.header = {
    type: 'text' as const,
    props: { content: SHOW.name, weight: 'bold' as const },
  };

  elements.tagline = {
    type: 'text' as const,
    props: { content: SHOW.tagline, size: 'sm' as const },
  };

  elements.ep_list = {
    type: 'item_group' as const,
    props: {},
    children: itemIds,
  };

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
    props: { label: 'Share Show', icon: 'share' as const },
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

  return {
    version: '2.0' as const,
    theme: { accent: 'blue' as const },
    ui: { root: 'page', elements },
  };
}
