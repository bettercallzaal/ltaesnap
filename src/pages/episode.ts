import type { Episode } from '../data/episodes.js';
import { SHOW } from '../data/episodes.js';
import { hosts } from '../data/hosts.js';

export function buildEpisodePage(ep: Episode, baseUrl: string) {
  const elements: Record<string, any> = {
    page: {
      type: 'stack' as const,
      props: { direction: 'vertical' as const, gap: 'md' as const },
      children: SHOW.coverImage
        ? ['cover', 'show_name', 'ep_title', 'meta', 'desc', 'badges', 'btn_listen', 'btn_row']
        : ['show_name', 'ep_title', 'meta', 'desc', 'badges', 'btn_listen', 'btn_row'],
    },
    show_name: {
      type: 'text' as const,
      props: { content: SHOW.name, weight: 'bold' as const },
    },
    ep_title: {
      type: 'text' as const,
      props: { content: `Ep ${ep.number}: ${ep.title}`, weight: 'bold' as const },
    },
    meta: {
      type: 'text' as const,
      props: {
        content: `${ep.guests} - ${ep.duration} - ${ep.date}`,
        size: 'sm' as const,
      },
    },
    desc: {
      type: 'text' as const,
      props: { content: ep.description, size: 'sm' as const },
    },
    badges: {
      type: 'stack' as const,
      props: { direction: 'horizontal' as const, gap: 'sm' as const },
      children: ep.isNew
        ? ['new_badge', 'topic_badge', 'dur_badge']
        : ['topic_badge', 'dur_badge'],
    },
    new_badge: {
      type: 'badge' as const,
      props: { label: 'NEW', color: 'green' as const },
    },
    topic_badge: {
      type: 'badge' as const,
      props: { label: ep.topic, color: 'blue' as const },
    },
    dur_badge: {
      type: 'badge' as const,
      props: { label: ep.duration, color: 'gray' as const },
    },
    btn_listen: {
      type: 'button' as const,
      props: { label: 'Listen Now', variant: 'primary' as const, icon: 'play' as const },
      on: {
        press: ep.listenUrl
          ? { action: 'open_url' as const, params: { url: ep.listenUrl } }
          : { action: 'submit' as const, params: { target: `${baseUrl}/` } },
      },
    },
    btn_row: {
      type: 'stack' as const,
      props: { direction: 'horizontal' as const, gap: 'sm' as const },
      children: ['share_btn', 'hosts_btn', 'episodes_btn'],
    },
    share_btn: {
      type: 'button' as const,
      props: { label: 'Share', icon: 'share' as const },
      on: {
        press: {
          action: 'compose_cast' as const,
          params: {
            text: `Listening to "${ep.title}" on ${SHOW.name} with ${ep.guests}`,
            embeds: [baseUrl],
          },
        },
      },
    },
    hosts_btn: {
      type: 'button' as const,
      props: { label: 'Hosts', icon: 'users' as const },
      on: {
        press: {
          action: 'submit' as const,
          params: { target: `${baseUrl}/hosts` },
        },
      },
    },
    episodes_btn: {
      type: 'button' as const,
      props: { label: 'Episodes', icon: 'list' as const },
      on: {
        press: {
          action: 'submit' as const,
          params: { target: `${baseUrl}/episodes` },
        },
      },
    },
  };

  if (SHOW.coverImage) {
    elements.cover = {
      type: 'image' as const,
      props: { src: SHOW.coverImage, aspectRatio: '16:9' as const },
    };
  }

  return {
    version: '2.0' as const,
    theme: { accent: 'blue' as const },
    ui: { root: 'page', elements },
  };
}
