<?php

/*
 * This file is part of the Symfony package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Form;

use App\Application;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints as Assert;

class TagType extends AbstractType
{
    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $app = $this->app;
        $form_data = $options['data'];

        $builder
            ->add('id', 'hidden')
            ->add('title', 'text', ['constraints' => [
                new Assert\NotBlank(),
                new Assert\Length(['max' => 255])
            ],
                'attr' => ['max_length' => 255],
            ])
            ->add('slug', 'text', ['constraints' => [
                new Assert\NotBlank(),
                new Assert\Length(['max' => 255]),
                new Assert\Callback(function ($data, $context) use ($app, $form_data) {
                    /**
                     * поиск по слугу и сравнение с формой
                     */
                    $existed = $app['tag.model']->findOneBy(['slug' => $data]);
                    if (isset($form_data->id) && $existed && $existed->id != $form_data->id) {
                        $context->buildViolation('Slug "' . $data . '" already exist')
                                ->addViolation();
                    }
                })
            ],
                'attr' => ['max_length' => 255],
            ])
            ->add('Save', 'submit',
                ['attr' => ['class' => 'btn-primary']]);
    }

    /**
     * @param OptionsResolver $resolver
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => 'App\Model\Tag',
        ]);
    }

    /**
     * @return string
     */
    public function getName()
    {
        // Best Practice: use 'app_' as the prefix of your custom form types names
        // see http://symfony.com/doc/current/best_practices/forms.html#custom-form-field-types
        return 'app_tag';
    }
}
