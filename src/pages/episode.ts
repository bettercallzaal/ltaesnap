import type { Episode } from '../data/episodes.js';
import { SHOW } from '../data/episodes.js';

export function buildEpisodePage(ep: Episode, baseUrl: string) {
  const children: string[] = [];
  const elements: Record<string, any> = {};

  // Cover art (if set)
  if (SHOW.coverImage) {
    children.push('cover');
    elements.cover = {
      type: 'image' as const,
      props: { url: SHOW.coverImage, aspect: '16:9' as const },
    };
  }

  // Show header as item with badge
  children.push('header');
  elements.header = {
    type: 'item' as const,
    props: {
      title: SHOW.name,
      description: SHOW.tagline,
    },
    children: ['live_badge'],
  };
  elements.live_badge = {
    type: 'badge' as const,
    props: { label: 'Podcast', color: 'purple' as const, icon: 'play' as const },
  };

  // Separator
  children.push('divider1');
  elements.divider1 = { type: 'separator' as const, props: {} };

  // Episode details as item_group
  children.push('ep_details');
  elements.ep_details = {
    type: 'item_group' as const,
    props: { separator: true },
    children: ['ep_title_item', 'ep_hosts_item', 'ep_about_item'],
  };

  elements.ep_title_item = {
    type: 'item' as const,
    props: {
      title: `Ep ${ep.number}: ${ep.title}`,
      description: ep.date,
    },
    children: ep.isNew ? ['new_badge'] : ['topic_badge'],
  };
  elements.new_badge = {
    type: 'badge' as const,
    props: { label: 'NEW', color: 'green' as const, icon: 'zap' as const },
  };
  elements.topic_badge = {
    type: 'badge' as const,
    props: { label: ep.topic, color: 'blue' as const },
  };

  elements.ep_hosts_item = {
    type: 'item' as const,
    props: {
      title: 'Hosts',
      description: ep.guests,
    },
    children: ['hosts_badge'],
  };
  elements.hosts_badge = {
    type: 'badge' as const,
    props: { label: `${ep.duration}`, color: 'gray' as const, icon: 'clock' as const },
  };

  elements.ep_about_item = {
    type: 'item' as const,
    props: {
      title: 'About This Episode',
      description: ep.description,
    },
  };

  // Action buttons row 1: Listen + Share
  children.push('btn_primary');
  elements.btn_primary = {
    type: 'stack' as const,
    props: { direction: 'horizontal' as const, gap: 'sm' as const },
    children: ['listen_btn', 'share_btn'],
  };

  // Pick best available URL: listenUrl (podcast platform) > youtubeUrl > fallback
  const watchUrl = ep.listenUrl || ep.youtubeUrl;

  elements.listen_btn = {
    type: 'button' as const,
    props: { label: watchUrl ? 'Watch' : 'Coming Soon', variant: 'primary' as const, icon: 'play' as const },
    on: {
      press: watchUrl
        ? { action: 'open_url' as const, params: { url: watchUrl } }
        : {
            action: 'compose_cast' as const,
            params: {
              text: `${SHOW.name} - coming soon! Follow @zaal @ohnahji @wethemniggas for updates`,
              embeds: [baseUrl],
            },
          },
    },
  };

  elements.share_btn = {
    type: 'button' as const,
    props: { label: 'Share', icon: 'share' as const },
    on: {
      press: {
        action: 'compose_cast' as const,
        params: {
          text: `"${ep.title}" on ${SHOW.name}\n\n${ep.description}\n\nWith ${ep.guests}`,
          embeds: [baseUrl],
        },
      },
    },
  };

  // Action buttons row 2: Hosts + Story + Episodes
  children.push('btn_secondary');
  elements.btn_secondary = {
    type: 'stack' as const,
    props: { direction: 'horizontal' as const, gap: 'sm' as const },
    children: ['hosts_btn', 'story_btn', 'episodes_btn'],
  };

  elements.hosts_btn = {
    type: 'button' as const,
    props: { label: 'Hosts', icon: 'users' as const },
    on: {
      press: {
        action: 'submit' as const,
        params: { target: `${baseUrl}/hosts` },
      },
    },
  };

  elements.story_btn = {
    type: 'button' as const,
    props: { label: 'Our Story', icon: 'star' as const },
    on: {
      press: {
        action: 'submit' as const,
        params: { target: `${baseUrl}/story` },
      },
    },
  };

  elements.episodes_btn = {
    type: 'button' as const,
    props: { label: 'Episodes', icon: 'list' as const },
    on: {
      press: {
        action: 'submit' as const,
        params: { target: `${baseUrl}/episodes` },
      },
    },
  };

  // Assemble page
  elements.page = {
    type: 'stack' as const,
    props: { direction: 'vertical' as const, gap: 'md' as const },
    children,
  };

  return {
    version: '2.0' as const,
    theme: { accent: 'purple' as const },
    ui: { root: 'page', elements },
  };
}
