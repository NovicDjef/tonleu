import gamestackTexture2Large from '~/assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from '~/assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from '~/assets/gamestack-list.jpg';
import gamestackTextureLarge from '~/assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import gamestackTexture from '~/assets/gamestack-login.jpg';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './koursier.module.css';

const title = 'Livraison Express Multi-Services';
const description =
  'Application révolutionnaire de livraison multi-services : gaz, colis, repas avec suivi en temps réel et service rapide.';
const roles = ['Mobile App Development', 'UX/UI Design', 'Real-time Tracking'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Koursier = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.koursier}>
        <ProjectBackground
          src={gamestackTexture}
          srcSet={`${gamestackTexture} 1280w, ${gamestackTextureLarge} 2560w`}
          width={1280}
          height={800}
          placeholder={gamestackTexturePlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://Kourcier.com"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${gamestackTexture} 800w, ${gamestackTextureLarge} 1920w`}
              width={800}
              height={500}
              placeholder={gamestackTexturePlaceholder}
              alt="L'application Koursier montrant l'interface de commande avec géolocalisation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>📦 QUE POUVEZ-VOUS COMMANDER ?</ProjectSectionHeading>
              <ProjectSectionText>
                Besoin de gaz, d'envoyer un colis ou de vous faire livrer un repas ? 
                Notre application révolutionne la livraison avec un service rapide, fiable et transparent !
              </ProjectSectionText>
              <ProjectSectionText>
                🔥 **Livraison de gaz** : Bouteilles de gaz domestique, livraison d'urgence disponible, tous formats et marques, installation possible.
                📮 **Envoi de colis** : Documents importants, cadeaux et achats, livraison express same-day, suivi en temps réel.
                🍕 **Livraison de repas** : Restaurants partenaires, plats cuisinés maison, livraison chaude garantie, large choix de cuisines.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={`${gamestackTexture} 350w, ${gamestackTextureLarge} 700w`}
                width={350}
                height={750}
                placeholder={gamestackTexturePlaceholder}
                alt="Interface de sélection des services de livraison."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={`${gamestackTexture2} 350w, ${gamestackTexture2Large} 700w`}
                width={350}
                height={750}
                placeholder={gamestackTexture2Placeholder}
                alt="Suivi en temps réel de la livraison."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>⚡ FONCTIONNALITÉS RÉVOLUTIONNAIRES</ProjectSectionHeading>
              <ProjectSectionText>
                **🎯 Commande ultra-simple :** Interface intuitive en 3 clics, géolocalisation automatique, prix transparent sans surprise, paiement sécurisé intégré.
                **📱 Suivi en temps réel :** Position GPS de votre livreur, estimation d'arrivée précise, notifications à chaque étape, historique complet de vos commandes.
              </ProjectSectionText>
              <ProjectSectionText>
                **👨‍🚚 Contact direct livreur :** Nom et téléphone du livreur, chat intégré pour instructions, photo de profil et note du livreur, communication sécurisée.
                **🔔 Notifications intelligentes :** Confirmation de commande immédiate, livreur assigné avec ses coordonnées, départ du livreur vers votre adresse, arrivée imminente (5 min avant), livraison effectuée avec confirmation.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${gamestackTexture2} 800w, ${gamestackTexture2Large} 1920w`}
              width={800}
              height={500}
              placeholder={gamestackTexture2Placeholder}
              alt="Fonctionnalités de l'application Koursier avec suivi en temps réel."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridImage}>
              <div className={styles.gridBackground}>
                <Image
                  srcSet={`${gamestackTexture2} 440w, ${gamestackTexture2Large} 880w`}
                  width={440}
                  height={790}
                  placeholder={gamestackTexture2Placeholder}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
              <div className={styles.gridForeground}>
                <Image
                  srcSet={`${gamestackTexture} 440w, ${gamestackTextureLarge} 880w`}
                  width={440}
                  height={340}
                  placeholder={gamestackTexturePlaceholder}
                  alt="Interface de suivi de livraison avec informations détaillées."
                  sizes={`(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 747px, 556px`}
                />
              </div>
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>🛡️ SÉCURITÉ ET FIABILITÉ</ProjectSectionHeading>
              <ProjectSectionText>
                **✅ Service vérifié :** Livreurs identifiés et vérifiés, assurance livraison incluse, support client 24/7, remboursement en cas de problème.
                **🔐 Paiement sécurisé :** Cartes bancaires cryptées, paiement mobile sécurisé, factures électroniques, historique des transactions.
                **📍 Zone de couverture :** Service disponible dans votre ville, extension continue des zones, livraison même en périphérie, horaires étendus 7j/7.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>🏆 POURQUOI NOUS CHOISIR ?</ProjectSectionHeading>
              <ProjectSectionText>
                **⚡ Rapidité :** Livreurs disponibles immédiatement, système de répartition intelligent, livraison moyenne en 30-45 min, service d'urgence disponible.
                **💰 Prix compétitifs :** Tarifs transparents, pas de frais cachés, promotions régulières, rapport qualité-prix imbattable.
              </ProjectSectionText>
              <ProjectSectionText>
                **🎯 Simplicité :** Application intuitive, commande en moins de 2 minutes, pas besoin de créer de compte complexe, interface adaptée à tous les âges.
                **🌟 Satisfaction client :** Support réactif, résolution rapide des problèmes, écoute des suggestions, amélioration continue.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              src={gamestackTexture2}
              width={940}
              height={500}
              placeholder={gamestackTexture2Placeholder}
              alt="Utilisateurs utilisant l'application Koursier pour leurs livraisons quotidiennes"
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>📊 AVANTAGES EXCLUSIFS & 🚀 COMMENCEZ MAINTENANT</ProjectSectionHeading>
              <ProjectSectionText>
                Premier service multi-livraison de la région, réseau de livreurs professionnels formés, technologie de pointe pour le suivi, partenariats avec les meilleurs fournisseurs, service client dédié et réactif.
              </ProjectSectionText>
              <ProjectSectionText>
                Téléchargez l'app, passez votre première commande et découvrez la livraison du futur ! Rejoignez des milliers d'utilisateurs qui nous font confiance chaque jour. **Votre satisfaction est notre priorité !**
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};